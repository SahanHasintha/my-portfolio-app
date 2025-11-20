import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from '../contexts/ThemeContext';

function ParticleField() {
  const ref = useRef<THREE.Points>(null);
  const { theme } = useTheme();

  // Generate random particle positions
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(2000 * 3);
    for (let i = 0; i < 2000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20; // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20; // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20; // z
    }
    return positions;
  }, []);

  // Animation loop
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.1;
      ref.current.rotation.y = state.clock.elapsedTime * 0.05;
      
      // Move particles in a wave-like motion
      const positions = ref.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] += Math.sin(state.clock.elapsedTime + positions[i]) * 0.01;
      }
      ref.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <Points ref={ref} positions={particlesPosition} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color={theme === 'dark' ? '#ffffff' : '#000000'}
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={theme === 'dark' ? 0.6 : 0.3}
      />
    </Points>
  );
}

function FloatingOrbs() {
  const { theme } = useTheme();
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {Array.from({ length: 8 }).map((_, i) => (
        <mesh
          key={i}
          position={[
            Math.cos(i * 0.785) * 8,
            Math.sin(i * 0.785) * 8,
            Math.sin(i * 0.5) * 4
          ]}
        >
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshBasicMaterial
            color={theme === 'dark' ? '#ffffff' : '#000000'}
            transparent
            opacity={theme === 'dark' ? 0.4 : 0.2}
          />
        </mesh>
      ))}
    </group>
  );
}

function ConnectingLines() {
  const { theme } = useTheme();
  const linesRef = useRef<THREE.Group>(null);

  const lineGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(100 * 6); // 100 lines, 2 points each, 3 coordinates per point
    
    for (let i = 0; i < 100; i++) {
      const startX = (Math.random() - 0.5) * 20;
      const startY = (Math.random() - 0.5) * 20;
      const startZ = (Math.random() - 0.5) * 20;
      
      const endX = startX + (Math.random() - 0.5) * 4;
      const endY = startY + (Math.random() - 0.5) * 4;
      const endZ = startZ + (Math.random() - 0.5) * 4;
      
      positions[i * 6] = startX;
      positions[i * 6 + 1] = startY;
      positions[i * 6 + 2] = startZ;
      positions[i * 6 + 3] = endX;
      positions[i * 6 + 4] = endY;
      positions[i * 6 + 5] = endZ;
    }
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geometry;
  }, []);

  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.rotation.x = state.clock.elapsedTime * 0.05;
      linesRef.current.rotation.y = state.clock.elapsedTime * 0.03;
    }
  });

  return (
    <group ref={linesRef}>
      <lineSegments geometry={lineGeometry}>
        <lineBasicMaterial
          color={theme === 'dark' ? '#ffffff' : '#000000'}
          transparent
          opacity={theme === 'dark' ? 0.2 : 0.1}
        />
      </lineSegments>
    </group>
  );
}

const Particle3DBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        
        <ParticleField />
        <FloatingOrbs />
        <ConnectingLines />
      </Canvas>
    </div>
  );
};

export default Particle3DBackground;
