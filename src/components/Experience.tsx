import { education, experience, volunteering } from "../data/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import SectionReveal from "./SectionReveal";

export default function Experience() {
  return (
    <section id="experience" className="section py-28">
      <SectionHeading number="04" eyebrow="Career" title="Experience & education" />
      <div className="grid gap-12 md:grid-cols-3">
        <SectionReveal direction="left" className="divide-y divide-border border-y border-border md:col-span-2">
          {experience.map((e, i) => (
            <Reveal key={e.role + e.org} delay={i * 0.07}>
              <div className="grid gap-3 py-8 md:grid-cols-[9rem_1fr]">
                <span className="font-serif-display text-lg text-primary">{e.period}</span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {e.role} <span className="font-sans font-normal text-muted">· {e.org}</span>
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {e.points.map((pt, j) => (
                      <li key={j} className="flex gap-2 text-sm text-muted">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </SectionReveal>
        <SectionReveal direction="right">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-primary">Education</h3>
          <div className="mt-4 space-y-4">
            {education.map((ed, i) => (
              <Reveal key={ed.degree} delay={i * 0.08}>
                <div className="border-l-2 border-primary/30 pl-4">
                  <p className="font-display text-sm font-semibold text-ink">{ed.degree}</p>
                  <p className="mt-1 text-sm text-muted">{ed.school}</p>
                  <p className="mt-1 text-xs text-muted/70">{ed.period}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <h3 className="mt-10 text-xs font-semibold uppercase tracking-widest text-primary">Volunteering</h3>
          <div className="mt-4 space-y-4">
            {volunteering.map((v, i) => (
              <Reveal key={v.role} delay={i * 0.08}>
                <div className="border-l-2 border-accent/30 pl-4">
                  <p className="font-display text-sm font-semibold text-ink">{v.role}</p>
                  <p className="mt-1 text-sm text-muted">{v.org}</p>
                  <p className="mt-1 text-xs text-muted/70">{v.period}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
