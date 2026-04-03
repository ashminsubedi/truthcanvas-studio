import { ArrowUpRight } from "lucide-react";

const articles = [
  {
    category: "Investigation",
    title: "The Shadow Contracts: How Public Funds Disappeared",
    outlet: "The National Tribune",
    date: "March 2026",
    description: "A six-month investigation into the misallocation of $2.3 billion in federal infrastructure spending.",
  },
  {
    category: "Longform",
    title: "Inside the Forgotten Detention Camps",
    outlet: "Global Report",
    date: "January 2026",
    description: "An on-the-ground account of conditions inside migrant detention facilities across the southern border.",
  },
  {
    category: "Breaking News",
    title: "Leaked Documents Reveal Corporate Surveillance Program",
    outlet: "The Daily Wire",
    date: "November 2025",
    description: "Exclusive reporting on a Fortune 500 company's internal surveillance of employees and whistleblowers.",
  },
  {
    category: "Data",
    title: "Mapping Environmental Injustice Across 500 Counties",
    outlet: "Civic Data Lab",
    date: "September 2025",
    description: "A data-driven investigation linking pollution exposure to socioeconomic disparities in rural communities.",
  },
];

const FeaturedWork = () => {
  return (
    <section id="work" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="font-body text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-3">
              Selected Work
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Featured Stories
            </h2>
          </div>
          <div className="hidden md:block h-px w-1/3 bg-border" />
        </div>

        <div className="space-y-0 divide-y divide-border">
          {articles.map((article, i) => (
            <a
              key={i}
              href="#"
              className="group block py-8 md:py-10 hover:bg-accent/50 transition-colors -mx-6 px-6"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                <span className="font-body text-xs uppercase tracking-widest text-primary font-semibold md:w-28 shrink-0">
                  {article.category}
                </span>
                <div className="flex-1">
                  <h3 className="font-display text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                    {article.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground line-clamp-2">
                    {article.description}
                  </p>
                </div>
                <div className="flex items-center gap-4 md:shrink-0">
                  <span className="font-body text-xs text-muted-foreground uppercase tracking-wider">
                    {article.outlet} · {article.date}
                  </span>
                  <ArrowUpRight
                    size={20}
                    className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                  />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
