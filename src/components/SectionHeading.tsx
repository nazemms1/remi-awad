import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function SectionHeading({
  number,
  eyebrow,
  title,
}: {
  number: string;
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mb-14 flex items-start gap-5">
      <Reveal y={10}>
        <span className="font-serif-display text-3xl text-primary/50">{number}</span>
      </Reveal>
      <div>
        <Reveal y={10}>
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">{eyebrow}</span>
        </Reveal>
        <div className="relative mt-1 overflow-hidden">
          <motion.h2
            initial={{ y: "110%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl"
          >
            {title}
          </motion.h2>
          <motion.span
            initial={{ scaleX: 1 }}
            whileInView={{ scaleX: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.83, 0, 0.17, 1] }}
            style={{ transformOrigin: "right" }}
            className="absolute inset-0 bg-primary"
          />
        </div>
      </div>
    </div>
  );
}
