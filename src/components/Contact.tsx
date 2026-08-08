import { motion } from "framer-motion";
import { profile } from "../data/content";
import SectionReveal from "./SectionReveal";

export default function Contact() {
  return (
    <section id="contact" className="section flex min-h-[70vh] flex-col items-center justify-center py-28 text-center">
      <SectionReveal direction="down">
        <span className="text-xs font-semibold uppercase tracking-widest text-primary">Contact</span>
        <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-bold leading-tight text-ink sm:text-6xl">
          Let's work on something that{" "}
          <span className="font-serif-display font-normal text-primary">helps people.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-md leading-relaxed text-muted">
          I'm open to roles and collaborations in health economics, market access, and health
          data science. Reach out — I'd love to hear about what you're building.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <motion.a
            whileHover={{ y: -3, boxShadow: "0 20px 50px -15px rgba(35,77,61,0.4)" }}
            whileTap={{ scale: 0.97 }}
            href={`mailto:${profile.email}`}
            className="inline-block rounded-full bg-primary px-9 py-4 text-sm font-semibold text-white shadow-soft transition-colors hover:bg-primary2"
          >
            Email {profile.name}
          </motion.a>
          <a
            href={`tel:${profile.phone.replace(/\s+/g, "")}`}
            className="text-sm font-semibold text-ink underline decoration-primary/40 decoration-2 underline-offset-4"
          >
            {profile.phone}
          </a>
        </div>
      </SectionReveal>
    </section>
  );
}
