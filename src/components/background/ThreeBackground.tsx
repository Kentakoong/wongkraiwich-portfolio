"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useTheme } from "next-themes";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

const waveVertexShader = `
uniform float uTime;
uniform float uScroll;
varying float vElevation;

void main() {
  vec3 pos = position;
  
  // Wave equation with scroll acceleration influence
  float frequency = 0.2;
  // Base amplitude + scroll boost
  float amplitude = 0.3 + uScroll * 15.0;
  
  float elevation = 
    sin(pos.x * frequency + uTime) * (1.0 * amplitude) + 
    sin(pos.z * 0.15 + uTime * 0.5) * (1.0 * amplitude) +
    sin((pos.x + pos.z) * 0.1 + uTime) * (0.5 * amplitude);
    
  pos.y = elevation;
  vElevation = elevation;

  vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
  gl_Position = projectionMatrix * mvPosition;
  
  // Size attenuation
  gl_PointSize = 8.0 * (30.0 / -mvPosition.z);
}
`;

const waveFragmentShader = `
uniform vec3 uColor;
varying float vElevation;

void main() {
  // Circular particle
  float r = distance(gl_PointCoord, vec2(0.5));
  if (r > 0.5) discard;
  
  // Dynamic opacity based on elevation
  float alpha = 0.4 + (vElevation + 2.0) * 0.05;
  
  gl_FragColor = vec4(uColor, alpha);
}
`;

function WaveParticles({ color }: { color: string }) {
  const ref = useRef<THREE.ShaderMaterial>(null);
  const pointsRef = useRef<THREE.Points>(null);
  const count = 120; // Increased count
  const sep = 3;

  const scrollRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll percentage (0 to 1)
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollTop = window.scrollY;
      scrollRef.current = docHeight > 0 ? scrollTop / docHeight : 0;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const positions = useMemo(() => {
    const positions = new Float32Array(count * count * 3);
    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        const x = sep * (xi - count / 2);
        const z = sep * (zi - count / 2);
        const y = 0;
        const i = (xi * count + zi) * 3;
        positions[i] = x;
        positions[i + 1] = y;
        positions[i + 2] = z;
      }
    }
    return positions;
  }, []);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uScroll: { value: 0 },
      uColor: { value: new THREE.Color(color) },
    }),
    [color]
  );

  useEffect(() => {
    if (ref.current) {
      ref.current.uniforms.uColor.value.set(color);
    }
  }, [color]);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    if (ref.current) {
      ref.current.uniforms.uTime.value = time * 2; // Speed up animation
    }
    if (pointsRef.current) {
      pointsRef.current.rotation.y = time * 0.05; // Gentle rotation
    }
  });

  return (
    <points ref={pointsRef} rotation={[-Math.PI / 6, 0, 0]}>
      <bufferGeometry>
        <bufferAttribute
          args={[positions, 3]}
          array={positions}
          attach="attributes-position"
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <shaderMaterial
        depthWrite={false}
        fragmentShader={waveFragmentShader}
        ref={ref}
        transparent
        uniforms={uniforms}
        vertexShader={waveVertexShader}
      />
    </points>
  );
}

export function ThreeBackground() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";
  const particleColor =
    typeof document !== "undefined"
      ? getComputedStyle(document.documentElement)
          .getPropertyValue("--particle-color")
          .trim() || (isDark ? "#e5e5e5" : "#1a1a1a")
      : isDark
        ? "#e5e5e5"
        : "#1a1a1a";

  return (
    <div className="pointer-events-none fixed inset-0 z-0 h-screen min-h-dvh w-full opacity-60">
      <Canvas camera={{ position: [0, 0, 45], fov: 60 }} dpr={[1, 2]}>
        <group dispose={null}>
          <WaveParticles color={particleColor} />
        </group>
      </Canvas>
    </div>
  );
}
