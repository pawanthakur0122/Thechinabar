import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, Environment, Float } from '@react-three/drei';
import * as THREE from 'three';

const WineGlass = () => {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group>
        {/* Stem */}
        <mesh position={[0, -0.7, 0]}>
          <cylinderGeometry args={[0.05, 0.05, 1, 32]} />
          <meshStandardMaterial
            color="#9333ea"
            roughness={0.1}
            metalness={0.8}
            emissive="#4c1d95"
            emissiveIntensity={0.2}
            transparent
            opacity={0.9}
          />
        </mesh>
        
        {/* Bowl */}
        <mesh ref={mesh} position={[0, 0, 0]}>
          <sphereGeometry args={[0.4, 32, 32, 0, Math.PI * 2, 0, Math.PI * 0.5]} />
          <meshStandardMaterial
            color="#9333ea"
            roughness={0.1}
            metalness={0.8}
            emissive="#4c1d95"
            emissiveIntensity={0.2}
            transparent
            opacity={0.7}
          />
        </mesh>

        {/* Base */}
        <mesh position={[0, -1.2, 0]}>
          <cylinderGeometry args={[0.2, 0.3, 0.1, 32]} />
          <meshStandardMaterial
            color="#9333ea"
            roughness={0.1}
            metalness={0.8}
            emissive="#4c1d95"
            emissiveIntensity={0.2}
            transparent
            opacity={0.9}
          />
        </mesh>
      </group>
    </Float>
  );
};

const Scene3D = () => {
  return (
    <Canvas className="w-full h-[40vh]">
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <Environment preset="night" />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <WineGlass />
    </Canvas>
  );
};

export default Scene3D;