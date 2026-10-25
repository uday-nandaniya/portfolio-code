import { Suspense, lazy } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { profile, stats } from "../data.js";

const AICore3D = lazy(() => import("./AICore3D.jsx"));

const nameParts = profile.name.split(" ");

export default function Hero() {
  const mx = useMotionValue(50);
  const my = useMotionValue(30);
  const spotlightX = useSpring(mx, { stiffness: 60, damping: 20 });
  const spotlightY = useSpring(my, { stiffness: 60, damping: 20 });

  return (
    <section
      id="top"
      className="relative overflow-hidden"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mx.set(((e.clientX - rect.left) / rect.width) * 100);
        my.set(((e.clientY - rect.top) / rect.height) * 100);
      }}
    >
      <div className="hero-aura absolute inset-0" />
      <div className="grid-lines absolute inset-0 opacity-40" />
      {/* Ambient glow that follows the cursor around the hero */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: useTransform(
            [spotlightX, spotlightY],
            ([x, y]) =>
              `radial-gradient(600px circle at ${x}% ${y}%, rgba(124,140,255,0.08), transparent 60%)`
          ),
        }}
      />

      {/* Signature 3D element: a calm wireframe "AI core" confined to its own
          panel on the right, well clear of the text column, so it never sits
          behind or blurs the copy. It only rotates while you hold the left
          mouse button and drag across it - otherwise it stays still. */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-0 hidden w-[42%] xl:block"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 30%)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 30%)",
        }}
      >
        <div className="pointer-events-auto h-full w-full">
          <Suspense fallback={null}>
            <AICore3D />
          </Suspense>
        </div>
      </div>
      <p className="pointer-events-none absolute right-6 top-24 z-0 hidden select-none font-mono text-[10px] uppercase tracking-[0.3em] text-muted/50 xl:block">
        hold &amp; drag to rotate
      </p>

      <motion.div
        aria-hidden
        className="absolute -right-32 top-24 h-[26rem] w-[26rem] rounded-full bg-primary/10 blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-6 pb-24 pt-36">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-mono text-xs uppercase tracking-[0.4em] text-primary"
        >
          {profile.role}
        </motion.p>

        <h1 className="mt-6 text-5xl font-display font-extrabold leading-[0.95] sm:text-7xl lg:text-8xl">
          {nameParts.map((part, i) => (
            <motion.span
              key={part}
              className={`mr-4 inline-block ${i === 1 ? "text-gradient" : ""}`}
              initial={{ opacity: 0, y: 40, rotateX: -40 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              {part}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-8 max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <MagneticButton
            href="#projects"
            className="glow-shadow rounded-full bg-primary px-7 py-3 text-sm font-semibold text-background"
          >
            View my work
          </MagneticButton>
          <MagneticButton
            href={`mailto:${profile.email}`}
            className="rounded-full border border-border px-7 py-3 text-sm font-semibold hover:bg-card"
          >
            {profile.email}
          </MagneticButton>
        </motion.div>

        <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4">
          {stats.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ backgroundColor: "rgba(94,231,201,0.06)", y: -3 }}
              transition={{ duration: 0.6, delay: 0.85 + i * 0.08 }}
              className="bg-card/80 px-6 py-7"
            >
              <p className="font-display text-2xl font-bold text-primary sm:text-3xl">
                {item.value}
              </p>
              <p className="mt-2 text-xs text-muted">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// A button that gently glides toward the cursor while hovered, and springs
// back on mouse-leave - a small "magnetic" interaction driven entirely by
// the mouse position.
function MagneticButton({ href, className, children }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 14, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 150, damping: 14, mass: 0.4 });

  return (
    <motion.a
      href={href}
      className={`inline-block ${className}`}
      style={{ x: springX, y: springY }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.97 }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - rect.left - rect.width / 2) * 0.25);
        y.set((e.clientY - rect.top - rect.height / 2) * 0.35);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.a>
  );
}
