'use client';

import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Float, Text } from '@react-three/drei';
import { useEffect, useState } from 'react';

const DataVisualization = () => {
  const [data, setData] = useState([
    { value: 85, label: 'Reputation Score', color: '#8B5CF6' },
    { value: 92, label: 'Network Trust', color: '#EC4899' },
    { value: 78, label: 'Market Activity', color: '#3B82F6' }
  ]);

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setData(prev => prev.map(item => ({
        ...item,
        value: Math.max(50, Math.min(100, item.value + (Math.random() - 0.5) * 10))
      })));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full p-4">
      <Canvas
        camera={{ position: [0, 0, 5] }}
        className="w-full h-full"
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        
        {/* Central Network Hub */}
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <mesh position={[0, 0, 0]}>
            <sphereGeometry args={[0.8, 32, 32]} />
            <meshStandardMaterial
              color="#8B5CF6"
              wireframe
              transparent
              opacity={0.3}
            />
          </mesh>

          {/* Data Nodes */}
          {data.map((item, index) => {
            const angle = (index * Math.PI * 2) / data.length;
            const radius = 2;
            return (
              <group key={item.label} position={[
                Math.cos(angle) * radius,
                Math.sin(angle) * radius,
                0
              ]}>
                <mesh>
                  <sphereGeometry args={[0.3, 16, 16]} />
                  <meshStandardMaterial
                    color={item.color}
                    emissive={item.color}
                    emissiveIntensity={0.5}
                    transparent
                    opacity={item.value / 100}
                  />
                </mesh>
                
                {/* Connection Lines */}
                <mesh>
                  <cylinderGeometry args={[0.02, 0.02, radius, 8]} />
                  <meshStandardMaterial
                    color={item.color}
                    transparent
                    opacity={0.2}
                  />
                </mesh>
              </group>
            );
          })}
        </Float>

        {/* Floating Particles */}
        {Array.from({ length: 30 }).map((_, index) => (
          <Float key={index} speed={2} rotationIntensity={2} floatIntensity={2}>
            <mesh
              position={[
                (Math.random() - 0.5) * 5,
                (Math.random() - 0.5) * 5,
                (Math.random() - 0.5) * 5
              ]}
            >
              <sphereGeometry args={[0.05, 8, 8]} />
              <meshStandardMaterial
                color="#8B5CF6"
                emissive="#8B5CF6"
                emissiveIntensity={0.5}
              />
            </mesh>
          </Float>
        ))}
      </Canvas>

      {/* Overlay Information */}
      <div className="absolute bottom-6 left-6 right-6 glassmorphism p-4">
        <div className="flex justify-between items-center">
          {data.map((item) => (
            <motion.div
              key={item.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-2xl font-bold gradient-text">
                {Math.round(item.value)}%
              </div>
              <div className="text-sm text-gray-400">
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DataVisualization;
