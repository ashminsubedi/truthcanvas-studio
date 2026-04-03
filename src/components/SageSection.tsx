interface BadgeProps {
  children: React.ReactNode;
}

const Badge = ({ children }: BadgeProps) => (
  <span className="inline-block bg-foreground text-background px-6 py-2.5 rounded-full font-display text-xs uppercase tracking-wider mb-10">
    {children}
  </span>
);

interface CardProps {
  title: string;
  description: string;
  tag?: string;
}

const Card = ({ title, description, tag }: CardProps) => (
  <div>
    <h3 className="font-display text-3xl uppercase mb-4">{title}</h3>
    <p className="font-body text-lg text-muted-foreground leading-relaxed">{description}</p>
    {tag && (
      <span className="block mt-3 font-body text-xs font-semibold uppercase tracking-[1.5px] opacity-80">
        {tag}
      </span>
    )}
  </div>
);

const SageSection = ({
  badge,
  cards,
}: {
  badge: string;
  cards: CardProps[];
}) => (
  <section className="bg-sage border-y border-muted py-24 px-[8%]">
    <Badge>{badge}</Badge>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {cards.map((card, i) => (
        <Card key={i} {...card} />
      ))}
    </div>
  </section>
);

export default SageSection;
