import { SectionBadge } from "./SageSection";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const timeline = [
  {
    period: "2021 – Present",
    title: "Associate Editor",
    org: "Onlinekhabar.com, Kathmandu",
    desc: "Leading editorial operations for Nepal's most-visited digital news platform with 100+ staff. Previously Opinion Editor (2021–2024).",
  },
  {
    period: "2019 – Present",
    title: "Lecturer – BMT & MMT",
    org: "Shepherd College, Kathmandu",
    desc: "Teaching New Media, News Reporting, Online Journalism, and Environmental Journalism at undergraduate and postgraduate levels.",
  },
  {
    period: "2014 – 2021",
    title: "Editor in Chief",
    org: "SajhaPost.com, Kathmandu",
    desc: "Launched and led a national digital news platform for 7 years, establishing it as a credible voice in Nepal's online media landscape.",
  },
  {
    period: "2009 – 2014",
    title: "Station Manager",
    org: "Radio Bihani, Dhading",
    desc: "Founded and managed a community radio station that grew to 450+ shareholders. Currently Senior Vice-President of the Board.",
  },
  {
    period: "2004 – 2015",
    title: "Reporter & Editor",
    org: "Janadesh Weekly / Jana Muktimarga Weekly",
    desc: "11 years of field journalism across Pokhara, Dhading, and Kathmandu. Later launched and edited a locally published weekly.",
  },
];

const CareerTimeline = () => (
  <section id="about" className="py-24 px-[8%]">
    <SectionBadge>Career Timeline</SectionBadge>
    <div className="max-w-4xl space-y-0 divide-y divide-foreground/10">
      {timeline.map((item, i) => (
        <div key={i} className="py-8 grid md:grid-cols-[180px_1fr] gap-4 md:gap-8">
          <span className="font-body text-xs font-semibold uppercase tracking-widest text-muted-foreground pt-1">
            {item.period}
          </span>
          <div>
            <h3 className="font-display text-lg uppercase mb-1">{item.title}</h3>
            <p className="font-body text-sm font-medium text-sage mb-2">{item.org}</p>
            <p className="font-body text-base text-muted-foreground leading-relaxed">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default CareerTimeline;
