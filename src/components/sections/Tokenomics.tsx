'use client';

import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Text3D } from '@react-three/drei';
import { motion, useScroll, useTransform } from 'framer-motion';

const TokenModel = () => {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={2}>
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.2 : 1}
      >
        <torusGeometry args={[2, 0.5, 32, 100]} />
        <meshStandardMaterial
          color={hovered ? "#ff6b6b" : "#4ecdc4"}
          metalness={0.8}
          roughness={0.2}
          emissive={hovered ? "#ff6b6b" : "#4ecdc4"}
          emissiveIntensity={0.5}
        />
      </mesh>
    </Float>
  );
};

const TokenomicsCard = ({ title, value, description, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-lg rounded-2xl p-6 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
  >
    <h3 className="text-xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
      {title}
    </h3>
    <div className="text-3xl font-bold mb-2 text-white">{value}</div>
    <p className="text-gray-400">{description}</p>
  </motion.div>
);

const Tokenomics = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const tokenomicsData = [
    {
      title: "Total Supply",
      value: "1,000,000,000",
      description: "Fixed supply, no inflation"
    },
    {
      title: "Initial Distribution",
      value: "40%",
      description: "Community allocation"
    },
    {
      title: "Staking Rewards",
      value: "20%",
      description: "Annual yield for validators"
    },
    {
      title: "Treasury",
      value: "15%",
      description: "Platform development & maintenance"
    }
  ];

  return (
    <section className="min-h-screen py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          style={{ y }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500">
            Tokenomics
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A deflationary model ensuring sustainable growth and value appreciation
          </p>
        </motion.div>

        {/* 3D Token Visualization */}
        <div className="h-[400px] mb-16">
          <Canvas camera={{ position: [0, 0, 10] }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <TokenModel />
          </Canvas>
        </div>

        {/* Tokenomics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tokenomicsData.map((item, index) => (
            <TokenomicsCard
              key={item.title}
              {...item}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Additional Features */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-lg rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              Buyback & Burn
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li>• Automatic token burns from transaction fees</li>
              <li>• Quarterly buybacks from platform revenue</li>
              <li>• Deflationary pressure through utility growth</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-lg rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              Staking Benefits
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li>• Governance participation rights</li>
              <li>• Platform fee sharing</li>
              <li>• Premium feature access</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
