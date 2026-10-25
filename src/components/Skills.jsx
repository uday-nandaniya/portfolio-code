import { motion } from "framer-motion";
import SectionWrapper, { Reveal } from "./SectionWrapper.jsx";
import TiltCard from "./TiltCard.jsx";
import { skillGroups, certifications, leadership } from "../data.js";

export default function Skills() {
  return (
    <SectionWrapper
      id="skills"
      eyebrow="Toolbox"
      title="Skills, certifications & beyond"
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 0.06}>
            <TiltCard className="h-full" maxTilt={7}>
              <div className="h-full rounded-2xl border border-border bg-card p-6">
                <h3 className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
                  {group.title}
                </h3>
                <ul className="mt-4 space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm">
                      <span className="h-1 w-1 shrink-0 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>

      <div className="mt-14 grid gap-10 lg:grid-cols-2">
        <Reveal>
          <h3 className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
            Certifications
          </h3>
          <div className="mt-5 flex flex-wrap gap-2.5">
            {certifications.map((cert) => (
              <motion.span
                key={cert}
                whileHover={{ y: -3 }}
                className="rounded-full border border-border bg-card px-4 py-2 text-xs text-muted"
              >
                {cert}
              </motion.span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h3 className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
            Leadership & extra-curricular
          </h3>
          <ul className="mt-5 space-y-3">
            {leadership.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-muted">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </SectionWrapper>
  );
}
