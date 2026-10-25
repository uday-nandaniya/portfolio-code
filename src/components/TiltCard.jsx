import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

/**
 * Wraps its children in a card that tilts in 3D toward the cursor and shows
 * a soft glare that follows the pointer - fully mouse-controlled, resets
 * smoothly on mouse-leave.
 */
export default function TiltCard({ children, className = "", maxTilt = 10 }) {
  const ref = useRef(null);

  const px = useMotionValue(0.5); // 0..1 across the card
  const py = useMotionValue(0.5);

  const springConfig = { stiffness: 200, damping: 20, mass: 0.4 };
  const rotateX = useSpring(
    useTransform(py, [0, 1], [maxTilt, -maxTilt]),
    springConfig
  );
  const rotateY = useSpring(
    useTransform(px, [0, 1], [-maxTilt, maxTilt]),
    springConfig
  );
  const glareX = useSpring(useTransform(px, [0, 1], [0, 100]), springConfig);
  const glareY = useSpring(useTransform(py, [0, 1], [0, 100]), springConfig);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  };

  const resetTilt = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className={`group relative ${className}`}
    >
      {children}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useTransform(
            [glareX, glareY],
            ([gx, gy]) =>
              `radial-gradient(280px circle at ${gx}% ${gy}%, rgba(94,231,201,0.16), transparent 65%)`
          ),
        }}
      />
    </motion.div>
  );
}
