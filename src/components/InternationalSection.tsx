import { SectionBadge } from "./SageSection";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const conferences = [
  { year: "2025", event: "ICA 75th Annual Conference", location: "Colorado, USA" },
  { year: "2025", event: "Asia Video Alliance Founding Meeting", location: "Hong Kong" },
  { year: "2023", event: "CBAA Conference", location: "Adelaide, Australia" },
  { year: "2023", event: "AMARC Asia-Pacific General Assembly", location: "Bangkok, Thailand" },
  { year: "2022", event: "East-West Centre Media Conference", location: "Hawaii, USA" },
  { year: "2022", event: "59th ABU General Assembly", location: "New Delhi, India" },
  { year: "2019", event: "ABU General Assembly", location: "Tokyo, Japan" },
  { year: "2016", event: "The Alternative Conference", location: "Copenhagen, Denmark" },
  { year: "2015", event: "AMARC Global General Assembly", location: "Accra, Ghana" },
  { year: "2013", event: "Asia Media Summit", location: "Manado, Indonesia" },
  { year: "2013", event: "3rd AMARC Asia-Pacific Conference", location: "Seoul, South Korea" },
];

const InternationalSection = () => {
  const ref = useScrollReveal();
  return (
    <section ref={ref} className="py-24 px-[8%]">
      <SectionBadge>International Exposure</SectionBadge>
      <div className="max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {conferences.map((c, i) => (
            <div key={i} className="flex gap-4 items-start">
              <span className="font-display text-sm text-sage shrink-0 mt-0.5">{c.year}</span>
              <div>
                <p className="font-body text-sm font-semibold text-foreground">{c.event}</p>
                <p className="font-body text-xs text-muted-foreground uppercase tracking-wider mt-0.5">{c.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternationalSection;
