import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

// A shell of faint points scattered on a sphere around the core - purely
// decorative, static positions, only a gentle shimmer (no motion/rotation).
function ParticleShell({ radius = 2.6, count = 200 }) {
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // uniform-ish distribution on a sphere shell
      const u = Math.random();
      const v = Math.random();
      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1);
      const r = radius * (0.94 + Math.random() * 0.12);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [radius, count]);

  const materialRef = useRef();

  useFrame((state) => {
    if (!materialRef.current) return;
    // subtle brightness shimmer only - no positional movement
    materialRef.current.opacity =
      0.35 + Math.sin(state.clock.getElapsedTime() * 0.6) * 0.08;
  });

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        ref={materialRef}
        color="#5ee7c9"
        size={0.045}
        sizeAttenuation
        transparent
        opacity={0.4}
        depthWrite={false}
      />
    </points>
  );
}

// The core object: two nested wireframe icosahedra, a soft glowing center,
// and two thin tilted rings - reads as a single distinctive "AI core"
// silhouette rather than a busy tangle of lines.
function Core() {
  const glowRef = useRef();

  useFrame((state) => {
    if (!glowRef.current) return;
    // gentle breathing glow - brightness/scale only, object does not rotate
    // or drift on its own
    const t = state.clock.getElapsedTime();
    const s = 1 + Math.sin(t * 0.8) * 0.035;
    glowRef.current.scale.set(s, s, s);
  });

  return (
    <group>
      <mesh>
        <icosahedronGeometry args={[1.85, 1]} />
        <meshBasicMaterial color="#5ee7c9" wireframe transparent opacity={0.32} />
      </mesh>

      <mesh rotation={[0.5, 0.4, 0]}>
        <icosahedronGeometry args={[1.35, 1]} />
        <meshBasicMaterial color="#7c8cff" wireframe transparent opacity={0.22} />
      </mesh>

      <mesh rotation={[Math.PI / 2.4, 0.3, 0]}>
        <torusGeometry args={[2.2, 0.006, 8, 96]} />
        <meshBasicMaterial color="#5ee7c9" transparent opacity={0.28} />
      </mesh>
      <mesh rotation={[Math.PI / 1.7, -0.5, 0]}>
        <torusGeometry args={[2.4, 0.005, 8, 96]} />
        <meshBasicMaterial color="#7c8cff" transparent opacity={0.18} />
      </mesh>

      <mesh ref={glowRef}>
        <sphereGeometry args={[0.52, 32, 32]} />
        <meshBasicMaterial color="#a9ffe9" transparent opacity={0.85} />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.86, 32, 32]} />
        <meshBasicMaterial color="#5ee7c9" transparent opacity={0.12} depthWrite={false} />
      </mesh>

      <ParticleShell />
    </group>
  );
}

export default function AICore3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 11], fov: 38 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 1.6]}
    >
      <Core />
      {/* Rotation only happens while the user holds the left mouse button
          and drags - no autoRotate, no idle spin, no pointer parallax. */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={false}
        enableDamping
        dampingFactor={0.12}
        rotateSpeed={0.6}
        mouseButtons={{ LEFT: THREE.MOUSE.ROTATE }}
        touches={{ ONE: THREE.TOUCH.ROTATE }}
      />
    </Canvas>
  );
}
