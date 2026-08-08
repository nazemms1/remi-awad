import { motion } from "framer-motion";
import { projects } from "../data/content";
import SectionHeading from "./SectionHeading";
import SectionReveal from "./SectionReveal";

export default function Projects() {
  return (
    <section id="projects" className="section py-28">
      <SectionHeading number="03" eyebrow="Selected work" title="Projects" />
      <div className="space-y-6">
        {projects.map((p, i) => (
          <SectionReveal key={p.title} direction={i % 2 === 0 ? "left" : "right"}>
            <motion.article
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
              className={`card grid gap-6 p-8 md:grid-cols-[auto_1fr_auto] md:items-center ${
                i % 2 === 1 ? "bg-surface2" : ""
              }`}
            >
              <span className="font-serif-display text-4xl text-primary/30">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="font-display text-xl font-semibold text-ink sm:text-2xl">{p.title}</h3>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">{p.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <li key={t} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex gap-4 text-xs font-semibold text-primary md:flex-col md:text-right">
                {p.repo && (
                  <a href={p.repo} className="hover:underline">
                    Code →
                  </a>
                )}
                {p.link && (
                  <a href={p.link} className="hover:underline">
                    Live →
                  </a>
                )}
              </div>
            </motion.article>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}
