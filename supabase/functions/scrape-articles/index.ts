// Scrapes Sudarshan Khatiwada's author page on Onlinekhabar and returns
// a normalized list of articles. Public endpoint (no auth required).
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const SOURCE_URL = "https://www.onlinekhabar.com/writer/sudarshan_khatiwada/";

type Article = {
  title: string;
  excerpt: string;
  date: string;
  url: string;
  image: string;
};

function decodeEntities(s: string): string {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&#8217;/g, "’")
    .replace(/&#8216;/g, "‘")
    .replace(/&#8220;/g, "“")
    .replace(/&#8221;/g, "”")
    .replace(/&#8211;/g, "–")
    .replace(/&#8212;/g, "—")
    .replace(/&#8230;/g, "…")
    .replace(/&nbsp;/g, " ")
    .replace(/&quot;/g, '"')
    .replace(/&#039;|&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function stripTags(s: string): string {
  return decodeEntities(s.replace(/<[^>]+>/g, "")).replace(/\s+/g, " ").trim();
}

/**
 * Onlinekhabar's author page renders each article as an <article> element
 * containing an image, an <h2><a href="...">title</a></h2>, an excerpt
 * paragraph, and a date span. We parse those with regex (no DOM in Deno
 * by default) and tolerate slight markup variations.
 */
function parseArticles(html: string): Article[] {
  const results: Article[] = [];
  const articleBlocks = html.match(/<article[\s\S]*?<\/article>/g) ?? [];

  for (const block of articleBlocks) {
    const linkMatch = block.match(
      /<h2[^>]*>\s*<a[^>]+href="([^"]+)"[^>]*>([\s\S]*?)<\/a>\s*<\/h2>/,
    );
    if (!linkMatch) continue;
    const url = linkMatch[1];
    const title = stripTags(linkMatch[2]);
    if (!url.includes("onlinekhabar.com")) continue;

    const imgMatch =
      block.match(/<img[^>]+(?:data-src|src)="([^"]+\.(?:jpg|jpeg|png|webp))"/i) ??
      block.match(/<img[^>]+src="([^"]+)"/i);
    const image = imgMatch ? imgMatch[1] : "";

    const excerptMatch =
      block.match(/<p[^>]*class="[^"]*ok-post-summary[^"]*"[^>]*>([\s\S]*?)<\/p>/) ??
      block.match(/<p[^>]*>([\s\S]*?)<\/p>/);
    const excerpt = excerptMatch ? stripTags(excerptMatch[1]) : "";

    const dateMatch =
      block.match(/<span[^>]*class="[^"]*ok-post-date[^"]*"[^>]*>([\s\S]*?)<\/span>/) ??
      block.match(/(२०\d{2}\s+[^\s<]+\s+\d+\s+गते[^<]*)/);
    const date = dateMatch ? stripTags(dateMatch[1]) : "";

    results.push({ title, excerpt, date, url, image });
  }

  // Fallback: if the regex above misses (markup change), look for the
  // pattern Lovable already saw in the markdown dump.
  if (results.length === 0) {
    const linkRegex =
      /<a[^>]+href="(https:\/\/www\.onlinekhabar\.com\/\d{4}\/\d{2}\/\d+\/[^"]+)"[^>]*>[\s\S]*?<img[^>]+src="([^"]+)"[\s\S]*?<\/a>/g;
    const seen = new Set<string>();
    let m: RegExpExecArray | null;
    while ((m = linkRegex.exec(html))) {
      const url = m[1];
      if (seen.has(url)) continue;
      seen.add(url);
      results.push({ title: "", excerpt: "", date: "", url, image: m[2] });
    }
  }

  return results;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const upstream = await fetch(SOURCE_URL, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (compatible; SudarshanKhatiwadaSite/1.0; +https://lovable.dev)",
        "Accept": "text/html,application/xhtml+xml",
        "Accept-Language": "ne,en;q=0.8",
      },
    });

    if (!upstream.ok) {
      const body = await upstream.text();
      return new Response(
        JSON.stringify({
          error: `Upstream returned ${upstream.status}`,
          detail: body.slice(0, 500),
        }),
        {
          status: 502,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    const html = await upstream.text();
    const articles = parseArticles(html);

    return new Response(
      JSON.stringify({
        source: SOURCE_URL,
        scrapedAt: new Date().toISOString(),
        count: articles.length,
        articles,
      }),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
          // Cache at the edge for 1 hour to avoid hammering Onlinekhabar
          // when many visitors hit the page.
          "Cache-Control": "public, max-age=300, s-maxage=3600",
        },
      },
    );
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("scrape-articles failed:", message);
    return new Response(
      JSON.stringify({ error: "Failed to scrape", detail: message }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      },
    );
  }
});
