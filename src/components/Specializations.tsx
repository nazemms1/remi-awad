import { motion } from "framer-motion";
import { specializations } from "../data/content";
import SectionHeading from "./SectionHeading";
import SectionReveal from "./SectionReveal";

export default function Specializations() {
  return (
    <section id="specializations" className="section py-28">
      <SectionHeading number="02" eyebrow="Focus areas" title="Where I specialize" />
      <div className="divide-y divide-border border-y border-border">
        {specializations.map((s, i) => (
          <SectionReveal key={s.title} direction={i % 2 === 0 ? "right" : "left"}>
            <motion.div
              whileHover={{ x: 8 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="grid gap-3 py-8 md:grid-cols-[4rem_1fr_2fr] md:items-center"
            >
              <span className="font-serif-display text-2xl text-primary/40">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="font-display text-xl font-semibold text-ink">{s.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{s.description}</p>
            </motion.div>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}
