import { motion } from "framer-motion";
import SectionWrapper, { Reveal } from "./SectionWrapper.jsx";
import TiltCard from "./TiltCard.jsx";
import { projects } from "../data.js";

export default function Projects() {
  return (
    <SectionWrapper
      id="projects"
      eyebrow="Selected work"
      title="Projects that shipped models"
    >
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 0.06}>
            <TiltCard className="h-full" maxTilt={8}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="glass-card relative h-full overflow-hidden rounded-2xl p-7"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                      {project.kind}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold">{project.title}</h3>
                  </div>
                  <span className="shrink-0 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 font-mono text-xs text-primary">
                    {project.accuracy}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-card px-2.5 py-1 text-[11px] text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="mt-6 font-mono text-[11px] text-muted">{project.period}</p>
              </motion.article>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
