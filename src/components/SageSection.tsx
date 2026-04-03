interface BadgeProps {
  children: React.ReactNode;
}

export const SectionBadge = ({ children }: BadgeProps) => (
  <span className="inline-block bg-foreground text-background px-6 py-2.5 rounded-full font-display text-[0.7rem] uppercase tracking-wider mb-10">
    {children}
  </span>
);

interface CardProps {
  title: string;
  description: string;
  tag?: string;
}

export const ContentCard = ({ title, description, tag }: CardProps) => (
  <div>
    <h3 className="font-display text-xl md:text-2xl uppercase mb-3 leading-tight">{title}</h3>
    <p className="font-body text-base text-muted-foreground leading-relaxed">{description}</p>
    {tag && (
      <span className="block mt-3 font-body text-[0.7rem] font-semibold uppercase tracking-[1.5px] text-muted-foreground/80">
        {tag}
      </span>
    )}
  </div>
);

interface SageSectionProps {
  id?: string;
  badge: string;
  cards: CardProps[];
}

const SageSection = ({ id, badge, cards }: SageSectionProps) => (
  <section id={id} className="bg-sage py-24 px-[8%] border-y border-cream-dark">
    <SectionBadge>{badge}</SectionBadge>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl">
      {cards.map((card, i) => (
        <ContentCard key={i} {...card} />
      ))}
    </div>
  </section>
);

export default SageSection;
