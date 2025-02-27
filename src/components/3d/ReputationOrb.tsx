'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useFrame, useThree, Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import { motion } from 'framer-motion-3d';

const ReputationSphere = () => {
  const meshRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = Math.sin(time / 4);
    meshRef.current.rotation.y = Math.cos(time / 2);
  });

  return (
    <motion.mesh
      ref={meshRef}
      whileHover={{ scale: 1.2 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <sphereGeometry args={[1, 64, 64]} />
      <meshPhongMaterial
        color="#8B5CF6"
        emissive="#4C1D95"
        specular="#FFFFFF"
        shininess={50}
        transparent
        opacity={0.9}
      />
    </motion.mesh>
  );
};

const ReputationOrb = () => {
  return (
    <div className="w-full h-[400px] relative">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <ReputationSphere />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
};

export default ReputationOrb;
