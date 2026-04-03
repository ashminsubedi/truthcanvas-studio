const stats = [
  { number: "12+", label: "Years in Journalism" },
  { number: "200+", label: "Published Articles" },
  { number: "3", label: "Press Awards" },
  { number: "15", label: "Countries Covered" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-secondary">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="font-body text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-3">
              About
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">
              The journalist<br />
              <span className="italic">behind the byline.</span>
            </h2>
            <div className="space-y-5 font-body text-base text-muted-foreground leading-relaxed">
              <p>
                I'm Sudarshan Khatiwada, an investigative journalist 
                covering corruption, civil rights, and institutional accountability. My work 
                has appeared in The National Tribune, Global Report, and Civic Data Lab.
              </p>
              <p>
                With over a decade of experience in the field, I specialize in long-form 
                investigations that hold power to account. I've reported from conflict zones, 
                courthouses, and corporate boardrooms—always chasing the story that needs to be told.
              </p>
              <p>
                Previously a staff reporter at The Chronicle, I now work as an independent 
                journalist, collaborating with newsrooms and nonprofits on projects that drive 
                real-world impact.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 md:mt-20">
            {stats.map((stat, i) => (
              <div key={i} className="border border-border p-6">
                <span className="font-display text-4xl font-black text-primary">
                  {stat.number}
                </span>
                <p className="font-body text-sm text-muted-foreground mt-2 uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
