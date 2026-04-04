import Navbar from "@/components/Navbar";
import { SectionBadge } from "@/components/SageSection";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import Footer from "@/components/Footer";

const articles = [
  {
    title: "Truth Trivialisation in Infodemic",
    publication: "IAMCR Conference Paper, 2022",
    description:
      "Research paper examining how truth becomes trivialized during information epidemics, presented at the International Association for Media and Communication Research.",
    date: "2022",
  },
  {
    title: "Community Radio: Bridging the Digital Divide",
    publication: "Community Radio Book (Lead Editor)",
    description:
      "Lead editor for two editions exploring the role of community radio in connecting rural populations across Nepal.",
    date: "2021",
  },
  {
    title: "Survivors of Sexual Violence During Armed Conflict",
    publication: "Onlinekhabar, 2024–2025",
    description:
      "Investigative series on survivors of sexual violence during Nepal's armed conflict, recognized with a Certificate of Appreciation from Aparajita Foundation (2025).",
    date: "2025",
  },
  {
    title: "Nepal's Digital Media Landscape",
    publication: "SajhaPost.com",
    description:
      "Long-form analysis of how Nepal's media ecosystem is evolving in the digital age, covering newsroom transformation and audience behavior.",
    date: "2020",
  },
  {
    title: "Environmental Journalism in the Himalayas",
    publication: "Academic Lecture Series",
    description:
      "A collection of writings on environmental reporting in mountain communities, developed alongside teaching Environmental Journalism at Shepherd College.",
    date: "2023",
  },
];

const Articles = () => {
  const ref = useScrollReveal();

  return (
    <div className="min-h-screen pt-16">
      <Navbar />
      <section ref={ref} className="py-24 px-[8%]">
        <SectionBadge>Articles & Publications</SectionBadge>
        <p className="font-body text-lg text-muted-foreground max-w-2xl mb-12 leading-relaxed">
          A collection of published articles, research papers, and editorial work spanning investigative journalism, media studies, and community broadcasting.
        </p>
        <div className="max-w-4xl space-y-0 divide-y divide-foreground/10">
          {articles.map((article, i) => (
            <div key={i} className="py-8 group">
              <div className="flex items-center gap-4 mb-2">
                <span className="font-display text-sm text-sage">{article.date}</span>
                <span className="font-body text-[0.7rem] font-semibold uppercase tracking-[1.5px] text-muted-foreground/80">
                  {article.publication}
                </span>
              </div>
              <h3 className="font-display text-xl md:text-2xl uppercase mb-3 leading-tight">
                {article.title}
              </h3>
              <p className="font-body text-base text-muted-foreground leading-relaxed max-w-2xl">
                {article.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Articles;
