import { motion } from "framer-motion";

const revealVariants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export function Reveal({ children, delay = 0, className }) {
  return (
    <motion.div
      className={className}
      variants={revealVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

export default function SectionWrapper({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="mx-auto w-full max-w-6xl px-6 py-24 sm:py-28">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.35em] text-primary">
          {eyebrow}
        </p>
        <h2 className="mt-4 font-display text-3xl font-bold sm:text-5xl">{title}</h2>
        <div className="mt-6 h-px w-full bg-border" />
      </Reveal>
      <div className="mt-12">{children}</div>
    </section>
  );
}
