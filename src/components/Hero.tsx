import { motion, type Variants } from "framer-motion";
import { profile } from "../data/content";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  return (
    <section id="top" className="section grid min-h-[92vh] items-center gap-10 py-24 md:grid-cols-[1fr_auto]">
      <motion.div variants={container} initial="hidden" animate="show">
        <motion.span
          variants={item}
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary"
        >
          Pharmacy × Health Economics × Data Science
        </motion.span>

        <motion.h1
          variants={item}
          className="mt-6 max-w-3xl font-display text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-6xl"
        >
          {profile.heroLine}{" "}
          <span className="font-serif-display font-normal text-primary">{profile.heroAccent}</span>
        </motion.h1>

        <motion.p variants={item} className="mt-8 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
          {profile.tagline}
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-5">
          <motion.a
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            href="#projects"
            className="rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-soft transition-colors hover:bg-primary2"
          >
            View my work
          </motion.a>
          <motion.a
            whileHover={{ x: 4 }}
            href={`${import.meta.env.BASE_URL}${profile.resumeUrl}`}
            download
            className="text-sm font-semibold text-ink underline decoration-primary/40 decoration-2 underline-offset-4"
          >
            Download résumé →
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="hidden justify-self-end md:block"
      >
        <div className="flex h-64 w-64 flex-col items-center justify-center rounded-full border border-primary/20 bg-surface/60 text-center shadow-soft backdrop-blur">
          <span className="font-serif-display text-lg text-primary">{profile.name}</span>
          <span className="mt-2 max-w-[10rem] text-xs uppercase tracking-widest text-muted">{profile.location}</span>
        </div>
      </motion.div>
    </section>
  );
}
