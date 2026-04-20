// Scrapes Sudarshan Khatiwada's author page on Onlinekhabar and returns
// a normalized list of articles. Public endpoint (no auth required).
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const BASE_URL = "https://www.onlinekhabar.com/writer/sudarshan_khatiwada";

function buildSourceUrl(page: number): string {
  if (page <= 1) return `${BASE_URL}/`;
  return `${BASE_URL}/page/${page}/`;
}

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
 * Onlinekhabar's author page wraps the writer's articles in
 *   <section class="ok-section ok-section-author-post-lists"> ... </section>
 * Each article is a <div class="ok-news-post ..."> containing:
 *   - <a href="..."><img src="..." alt="..."></a>
 *   - <h2 class="ok-news-title-txt">title</h2>
 *   - <p>excerpt</p>
 *   - <div class="ok-title-info">… date span …</div>
 */
function parseArticles(html: string): Article[] {
  const sectionMatch = html.match(
    /<section[^>]*class="[^"]*ok-section-author-post-lists[^"]*"[\s\S]*?<\/section>/,
  );
  if (!sectionMatch) return [];
  const section = sectionMatch[0];

  // Split on the opening tag of each article block, keeping the tag itself.
  const parts = section.split(/(?=<div class="ok-news-post[^"]*">)/);
  const results: Article[] = [];

  for (const part of parts) {
    if (!part.startsWith('<div class="ok-news-post')) continue;

    const urlMatch = part.match(/<a[^>]+href="([^"]+)"/);
    if (!urlMatch) continue;
    const url = urlMatch[1];
    if (!/onlinekhabar\.com\/\d{4}\/\d{2}\/\d+\//.test(url)) continue;

    const titleMatch = part.match(
      /<h2[^>]*class="[^"]*ok-news-title-txt[^"]*"[^>]*>([\s\S]*?)<\/h2>/,
    );
    const title = titleMatch ? stripTags(titleMatch[1]) : "";
    if (!title) continue;

    const imgMatch = part.match(/<img[^>]+src="([^"]+)"/i);
    const image = imgMatch ? imgMatch[1] : "";

    const excerptMatch = part.match(/<\/h2>\s*<p[^>]*>([\s\S]*?)<\/p>/);
    const excerpt = excerptMatch ? stripTags(excerptMatch[1]) : "";

    const dateBlockMatch = part.match(
      /<div[^>]*class="[^"]*ok-title-info[^"]*"[^>]*>([\s\S]*?)<\/div>/,
    );
    let date = "";
    if (dateBlockMatch) {
      const inner = stripTags(dateBlockMatch[1]);
      const m = inner.match(
        /२०\d{2}[^०-९0-9]+[०-९\d]+\s*गते(?:[^०-९0-9]*[०-९\d]{1,2}[:\.][०-९\d]{2})?/,
      );
      date = m ? m[0].trim() : inner.split(/\s{2,}/)[0].trim();
    }

    results.push({ title, excerpt, date, url, image });
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
