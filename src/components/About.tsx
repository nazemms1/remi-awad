import { useRef } from "react";
import { useScroll, useSpring } from "framer-motion";
import { about } from "../data/content";
import ScrollCounter from "./ScrollCounter";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import SectionReveal from "./SectionReveal";

export default function About() {
  const statsRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: statsRef,
    offset: ["start 0.9", "start 0.25"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 26, restDelta: 0.001 });

  return (
    <section id="about" className="section py-28">
      <SectionHeading number="01" eyebrow="About" title="Pharmacy, economics, and data — one practice" />

      <SectionReveal direction="left">
        <p className="max-w-4xl font-serif-display text-3xl leading-[1.3] text-ink sm:text-4xl">
          "{about.statement}"
        </p>
      </SectionReveal>

      <SectionReveal direction="right" className="mt-14 grid gap-12 md:grid-cols-3">
        <div className="space-y-5 md:col-span-2">
          <Reveal>
            <p className="text-lg leading-relaxed text-ink/90">{about.intro}</p>
          </Reveal>
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={0.08 * (i + 1)}>
              <p className="leading-relaxed text-muted">{p}</p>
            </Reveal>
          ))}
        </div>
        <div>
          <div ref={statsRef} className="divide-y divide-border border-y border-border md:border-y-0 md:border-l md:pl-8">
            {about.stats.map((s) => (
              <div key={s.label} className="flex items-baseline justify-between gap-4 py-4 md:flex-col md:items-start md:gap-1">
                <span className="font-serif-display text-3xl text-primary">
                  <ScrollCounter progress={progress} value={s.value} />
                </span>
                <span className="text-xs uppercase tracking-widest text-muted">{s.label}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 md:border-l md:pl-8">
            <p className="text-xs uppercase tracking-widest text-muted">Tools</p>
            <ul className="mt-2 flex flex-wrap gap-1.5">
              {about.tools.map((tool) => (
                <li key={tool} className="rounded-full bg-surface2 px-2.5 py-1 text-xs font-medium text-primary">
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
