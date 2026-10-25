import SectionWrapper from "./SectionWrapper.jsx";
import { aboutText, aboutFacts } from "../data.js";

export default function About() {
  return (
    <SectionWrapper id="about" eyebrow="About" title="Turning data into decisions">
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <p className="text-lg leading-relaxed text-muted">{aboutText}</p>
        <div className="glass-card rounded-2xl p-6">
          <dl className="space-y-4 text-sm">
            {aboutFacts.map(([label, value]) => (
              <div
                key={label}
                className="flex justify-between gap-4 border-b border-border pb-3 last:border-b-0 last:pb-0"
              >
                <dt className="font-mono text-[11px] uppercase tracking-wider text-muted">
                  {label}
                </dt>
                <dd className="text-right">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </SectionWrapper>
  );
}
