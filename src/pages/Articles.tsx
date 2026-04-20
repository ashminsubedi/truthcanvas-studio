import { useEffect, useState } from "react";
import { ExternalLink, RefreshCw } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SectionBadge } from "@/components/SageSection";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { supabase } from "@/integrations/supabase/client";

type Article = {
  title: string;
  excerpt: string;
  date: string;
  url: string;
  image: string;
};

// Fallback list — used if the live scrape fails (offline, upstream blocked,
// markup change, etc.). Keep a few hand-curated entries here so the page
// always has something to show.
const FALLBACK_ARTICLES: Article[] = [
  {
    title: "एमालेको ड्रयागन रोपेर उपियाँ फलाउने नियति",
    excerpt:
      "चुनावमा त्यति ठूलो धक्का खाएर पार्टीको साख भुइँमा बज्रिँदा पनि एमाले नेतृत्वले समाजको कुरा सुन्न रुचि देखाएको छैन।",
    date: "२०८२ चैत १८",
    url: "https://www.onlinekhabar.com/2026/04/1903059/umls-destiny-of-planting-dragons-and-reaping-opium",
    image:
      "https://www.onlinekhabar.com/wp-content/uploads/2026/04/suhang-nembang-badal-500x244.jpg",
  },
  {
    title: "कांग्रेसलाई इतिहासको हतियार होइन, भविष्यको आधार बनाउने संकल्प",
    excerpt:
      "यस्तो लाग्छ - हाम्रा शीर्ष भनिएका नेताहरू पनि शक्तिमा बसिरहने (कु)लतले ग्रसित छन्।",
    date: "२०८२ पुष २८",
    url: "https://www.onlinekhabar.com/2026/01/1847489/the-rebellion-of-the-sky-and-the-world-against-the-tyranny-of-power",
    image:
      "https://www.onlinekhabar.com/wp-content/uploads/2026/01/Gagan-kumar-thapa-bishwa-prakash-sharma-500x244.jpg",
  },
  {
    title: "मतदाताविरुद्ध महागठबन्धन !",
    excerpt:
      "लोकतन्त्रमा मतदातासँग पर्याप्त विकल्पको सुविधा हुनु अनिवार्य हुन्छ।",
    date: "२०८२ पुष २२",
    url: "https://www.onlinekhabar.com/2026/01/1843141/grand-alliance-against-voters",
    image:
      "https://www.onlinekhabar.com/wp-content/uploads/2026/01/oli-prachanda-deuba-balen-kulman-rabi-2-500x244.png",
  },
];

const Articles = () => {
  const headerRef = useScrollReveal();
  const gridRef = useScrollReveal();

  const [articles, setArticles] = useState<Article[]>(FALLBACK_ARTICLES);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [usingFallback, setUsingFallback] = useState(true);
  const [scrapedAt, setScrapedAt] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);

  const fetchPage = async (
    pageNum: number,
  ): Promise<{ articles: Article[]; hasMore: boolean; scrapedAt?: string }> => {
    const { data, error } = await supabase.functions.invoke("scrape-articles", {
      body: { page: pageNum },
    });
    if (error) throw error;
    const fetched: Article[] = (data?.articles ?? []).filter(
      (a: Article) => a.title && a.url,
    );
    return {
      articles: fetched,
      hasMore: !!data?.hasMore,
      scrapedAt: data?.scrapedAt,
    };
  };

  const load = async () => {
    setLoading(true);
    setPage(1);
    try {
      const result = await fetchPage(1);
      if (result.articles.length > 0) {
        setArticles(result.articles);
        setUsingFallback(false);
        setHasMore(result.hasMore);
        setScrapedAt(result.scrapedAt ?? null);
      } else {
        setUsingFallback(true);
        setHasMore(false);
      }
    } catch (err) {
      console.error("Failed to load articles:", err);
      setUsingFallback(true);
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  };

  const loadMore = async () => {
    if (loadingMore || !hasMore) return;
    setLoadingMore(true);
    const nextPage = page + 1;
    try {
      const result = await fetchPage(nextPage);
      if (result.articles.length > 0) {
        setArticles((prev) => {
          const seen = new Set(prev.map((a) => a.url));
          const merged = [...prev];
          for (const a of result.articles) {
            if (!seen.has(a.url)) merged.push(a);
          }
          return merged;
        });
        setPage(nextPage);
        setHasMore(result.hasMore);
      } else {
        setHasMore(false);
      }
    } catch (err) {
      console.error("Failed to load more articles:", err);
      setHasMore(false);
    } finally {
      setLoadingMore(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const [featured, ...rest] = articles;

  return (
    <div className="min-h-screen pt-16">
      <Navbar />

      {/* Header */}
      <section ref={headerRef} className="pt-16 pb-10 px-[6%] md:px-[8%]">
        <SectionBadge>Latest Articles</SectionBadge>
        <h1 className="font-display text-4xl md:text-6xl uppercase leading-[0.9] tracking-tight mb-6 max-w-4xl">
          Words from<br />the Newsroom
        </h1>
        <p className="font-body text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
          Daily commentary, opinion and reportage published in{" "}
          <a
            href="https://www.onlinekhabar.com/writer/sudarshan_khatiwada/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-foreground transition-colors"
          >
            Onlinekhabar
          </a>
          . Auto-synced on every visit.
        </p>

        {/* Status row */}
        <div className="flex flex-wrap items-center gap-3 mt-6 font-body text-xs text-muted-foreground">
          {loading ? (
            <span className="inline-flex items-center gap-2">
              <RefreshCw size={12} className="animate-spin" />
              Syncing latest articles…
            </span>
          ) : usingFallback ? (
            <span className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/60" />
              Showing cached articles · live sync unavailable
            </span>
          ) : (
            <span className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sage" />
              Live · {articles.length} articles synced
              {scrapedAt && ` · ${new Date(scrapedAt).toLocaleString()}`}
            </span>
          )}
          <button
            type="button"
            onClick={load}
            disabled={loading}
            className="inline-flex items-center gap-1.5 font-display text-[0.7rem] uppercase tracking-wider border-b border-foreground/40 hover:border-foreground hover:text-foreground transition-colors disabled:opacity-40"
          >
            <RefreshCw size={11} className={loading ? "animate-spin" : ""} />
            Refresh
          </button>
        </div>
      </section>

      {/* Featured article */}
      {featured && (
        <section className="px-[6%] md:px-[8%] pb-12">
          <a
            href={featured.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block border-2 border-foreground bg-card hover:bg-muted/40 transition-colors"
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative aspect-[16/10] md:aspect-auto overflow-hidden border-b-2 md:border-b-0 md:border-r-2 border-foreground">
                {featured.image && (
                  <img
                    src={featured.image}
                    alt={featured.title}
                    loading="eager"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
                <span className="absolute top-4 left-4 bg-foreground text-background font-display text-[0.65rem] uppercase tracking-[1.5px] px-3 py-1.5">
                  Latest
                </span>
              </div>
              <div className="p-6 md:p-10 flex flex-col justify-between gap-6">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    {featured.date && (
                      <span className="font-display text-xs uppercase tracking-wider text-sage">
                        {featured.date}
                      </span>
                    )}
                    <span className="h-px w-8 bg-foreground/30" />
                    <span className="font-body text-[0.7rem] font-semibold uppercase tracking-[1.5px] text-muted-foreground">
                      Onlinekhabar
                    </span>
                  </div>
                  <h2 className="font-display text-2xl md:text-4xl uppercase leading-tight mb-3">
                    {featured.title}
                  </h2>
                  {featured.excerpt && (
                    <p className="font-body text-base md:text-lg leading-relaxed text-foreground/80">
                      {featured.excerpt}
                    </p>
                  )}
                </div>
                <span className="inline-flex items-center gap-2 font-display text-xs uppercase tracking-wider border-b-2 border-foreground pb-0.5 self-start group-hover:opacity-70 transition-opacity">
                  Read on Onlinekhabar
                  <ExternalLink size={14} />
                </span>
              </div>
            </div>
          </a>
        </section>
      )}

      {/* Article grid */}
      <section ref={gridRef} className="px-[6%] md:px-[8%] pb-24">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-display text-xl md:text-2xl uppercase">More Writing</h2>
          <span className="font-body text-xs uppercase tracking-wider text-muted-foreground">
            {rest.length} articles
          </span>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((article) => (
            <a
              key={article.url}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col border-2 border-foreground bg-card hover:bg-muted/40 transition-colors"
            >
              <div className="relative aspect-[16/10] overflow-hidden border-b-2 border-foreground bg-muted">
                {article.image && (
                  <img
                    src={article.image}
                    alt={article.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
              </div>
              <div className="p-5 flex flex-col gap-3 flex-1">
                {article.date && (
                  <span className="font-display text-[0.7rem] uppercase tracking-wider text-sage">
                    {article.date}
                  </span>
                )}
                <h3 className="font-display text-base md:text-lg uppercase leading-snug line-clamp-3">
                  {article.title}
                </h3>
                {article.excerpt && (
                  <p className="font-body text-sm text-foreground/75 leading-relaxed line-clamp-3 flex-1">
                    {article.excerpt}
                  </p>
                )}
                <span className="inline-flex items-center gap-1.5 font-display text-[0.7rem] uppercase tracking-wider mt-2 group-hover:opacity-70 transition-opacity">
                  Read article
                  <ExternalLink size={12} />
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Load more */}
        {!usingFallback && (
          <div className="mt-12 flex flex-col items-center gap-3">
            {hasMore ? (
              <button
                type="button"
                onClick={loadMore}
                disabled={loadingMore}
                className="inline-flex items-center gap-2 border-2 border-foreground font-display text-xs uppercase tracking-wider px-8 py-4 hover:bg-foreground hover:text-background transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loadingMore ? (
                  <>
                    <RefreshCw size={14} className="animate-spin" />
                    Loading more…
                  </>
                ) : (
                  <>Load more articles</>
                )}
              </button>
            ) : (
              <p className="font-body text-xs uppercase tracking-wider text-muted-foreground">
                You've reached the end · {articles.length} articles loaded
              </p>
            )}
          </div>
        )}

        {/* CTA to source */}
        <div className="mt-16 border-t-2 border-foreground pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-body text-sm text-muted-foreground max-w-md">
            For the complete archive, visit the author profile on Onlinekhabar.
          </p>
          <a
            href="https://www.onlinekhabar.com/writer/sudarshan_khatiwada/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-foreground text-background font-display text-xs uppercase tracking-wider px-6 py-3 hover:opacity-80 transition-opacity"
          >
            View Full Archive
            <ExternalLink size={14} />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Articles;
