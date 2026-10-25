import { Reveal } from "./SectionWrapper.jsx";
import { profile } from "../data.js";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-border">
      <div className="hero-aura absolute inset-0 opacity-70" />
      <div className="relative mx-auto w-full max-w-6xl px-6 py-28 text-center">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-primary">
            Contact
          </p>
          <h2 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-bold sm:text-6xl">
            Let&apos;s build something <span className="text-gradient">intelligent</span>.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-muted">
            Open to AI/ML engineering roles, research collaborations and freelance model
            work.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="glow-shadow rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-background transition-transform hover:scale-105"
            >
              {profile.email}
            </a>
            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="rounded-full border border-border px-8 py-3.5 text-sm font-semibold transition-colors hover:bg-card"
            >
              {profile.phone}
            </a>
          </div>
        </Reveal>
      </div>
      <footer className="relative border-t border-border py-8 text-center font-mono text-[11px] text-muted">
        © {new Date().getFullYear()} {profile.name} · {profile.location}
      </footer>
    </section>
  );
}
