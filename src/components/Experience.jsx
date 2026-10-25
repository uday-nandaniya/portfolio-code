import { motion } from "framer-motion";
import SectionWrapper, { Reveal } from "./SectionWrapper.jsx";
import { experience, education } from "../data.js";

export default function Experience() {
  return (
    <SectionWrapper id="experience" eyebrow="Path so far" title="Experience & education">
      <div className="grid gap-14 lg:grid-cols-2">
        <div>
          <h3 className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
            Experience
          </h3>
          <div className="mt-6 space-y-6">
            {experience.map((item, i) => (
              <Reveal key={item.role} delay={i * 0.08}>
                <div className="relative rounded-2xl border border-border bg-card p-6">
                  <motion.span
                    className="absolute left-0 top-6 h-10 w-[3px] rounded-r bg-primary"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    style={{ transformOrigin: "top" }}
                  />
                  <p className="font-mono text-[11px] text-muted">{item.period}</p>
                  <h4 className="mt-2 text-lg font-semibold">{item.role}</h4>
                  <p className="text-sm text-primary">{item.org}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{item.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
            Education
          </h3>
          <div className="mt-6 space-y-6">
            {education.map((item, i) => (
              <Reveal key={item.degree} delay={i * 0.08}>
                <div className="relative rounded-2xl border border-border bg-card p-6">
                  <motion.span
                    className="absolute left-0 top-6 h-10 w-[3px] rounded-r bg-signal"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    style={{ transformOrigin: "top" }}
                  />
                  <p className="font-mono text-[11px] text-muted">{item.period}</p>
                  <h4 className="mt-2 text-lg font-semibold">{item.degree}</h4>
                  <p className="text-sm text-signal">{item.org}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
