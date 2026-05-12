import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, PerspectiveCamera, Float, MeshWobbleMaterial } from '@react-three/drei';
import * as THREE from 'three';

export function DewCan({ color = '#00FF00', label = 'ORIGINAL' }: { color?: string, label?: string }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh ref={meshRef}>
          {/* Main Can Shape */}
          <cylinderGeometry args={[1, 1, 3.5, 32]} />
          <meshStandardMaterial 
            color={color} 
            metalness={0.8} 
            roughness={0.2} 
            emissive={new THREE.Color(color).multiplyScalar(0.2)}
          />
          
          {/* Label Area (Visual hack with another cylinder or decals if we had assets) */}
          <mesh position={[0, 0, 0.01]}>
            <cylinderGeometry args={[1.01, 1.01, 2, 32]} />
            <meshStandardMaterial 
              color="#000" 
              transparent 
              opacity={0.3}
            />
          </mesh>
        </mesh>
        
        {/* Cap */}
        <mesh position={[0, 1.75, 0]}>
          <cylinderGeometry args={[0.9, 1, 0.2, 32]} />
          <meshStandardMaterial color="#888" metalness={1} roughness={0.1} />
        </mesh>
      </Float>

      {/* Decorative Particles/Glow around the can */}
      <mesh position={[0, 0, -1]}>
        <sphereGeometry args={[2.5, 32, 32]} />
        <MeshDistortMaterial
          color={color}
          speed={4}
          distort={0.4}
          radius={1}
          transparent
          opacity={0.1}
        />
      </mesh>
    </group>
  );
}

export function LiquidSplash() {
  return (
    <mesh scale={10}>
      <sphereGeometry args={[1, 64, 64]} />
      <MeshWobbleMaterial
        color="#00FF00"
        factor={0.5}
        speed={1}
        transparent
        opacity={0.2}
      />
    </mesh>
  );
}
