'use client';

import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

const Node = ({ position, name, description, color, onHover }: any) => {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group position={position}>
      <mesh
        ref={meshRef}
        onPointerOver={() => {
          setHovered(true);
          onHover(true);
        }}
        onPointerOut={() => {
          setHovered(false);
          onHover(false);
        }}
        scale={hovered ? 1.2 : 1}
      >
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color={color}
          metalness={0.8}
          roughness={0.2}
          envMapIntensity={1}
        />
      </mesh>
      <Html distanceFactor={15}>
        <div className={`bg-black/80 backdrop-blur-lg p-4 rounded-lg transition-all duration-300 ${hovered ? 'scale-110' : 'scale-90 opacity-0'}`}>
          <h3 className="text-lg font-bold text-white mb-2">{name}</h3>
          <p className="text-sm text-gray-300">{description}</p>
        </div>
      </Html>
    </group>
  );
};

const Connection = ({ start, end, active }: any) => {
  const points = [
    new THREE.Vector3(...start),
    new THREE.Vector3(...end)
  ];
  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);

  return (
    <line geometry={lineGeometry}>
      <lineBasicMaterial
        color={active ? "#ff6b6b" : "#4ecdc4"}
        linewidth={1}
        opacity={active ? 1 : 0.3}
        transparent
      />
    </line>
  );
};

const nodes = [
  {
    position: [0, 0, 0],
    name: "Clout Score",
    description: "AI-driven reputation metric",
    color: "#ff6b6b"
  },
  {
    position: [-4, 2, -2],
    name: "ETFs",
    description: "Reputation-based financial products",
    color: "#4ecdc4"
  },
  {
    position: [4, 2, -2],
    name: "Insurance",
    description: "Reputation risk protection",
    color: "#9b59b6"
  },
  {
    position: [0, 4, 0],
    name: "Analytics",
    description: "Advanced market insights",
    color: "#f1c40f"
  }
];

const Ecosystem = () => {
  const [activeNode, setActiveNode] = useState(null);

  return (
    <section className="h-screen w-full relative">
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 15] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          
          {nodes.map((node, i) => (
            <Node
              key={i}
              {...node}
              onHover={(hover: boolean) => setActiveNode(hover ? i : null)}
            />
          ))}

          {/* Connections between nodes */}
          {nodes.map((start, i) => 
            nodes.slice(i + 1).map((end, j) => (
              <Connection
                key={`${i}-${j}`}
                start={start.position}
                end={end.position}
                active={activeNode === i || activeNode === j + i + 1}
              />
            ))
          )}

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Canvas>
      </div>

      <div className="relative z-10 h-full flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl px-4"
        >
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500">
            The Cloutverse Ecosystem
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            A fully integrated, reputation-powered economy built on cutting-edge technology
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Ecosystem;
