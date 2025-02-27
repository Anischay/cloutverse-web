'use client';

import { motion, useAnimation } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Float, Text3D } from '@react-three/drei';
import { useState, useEffect } from 'react';

export default function CoreFeatures() {
  const [activeFeature, setActiveFeature] = useState(0);
  const controls = useAnimation();

  const features = [
    {
      title: "Reputation Tokenization",
      description: "Convert your digital influence into tradable assets with our advanced tokenization system.",
      icon: "💎",
      color: "#8B5CF6"
    },
    {
      title: "Smart Insurance",
      description: "Protect your digital assets with AI-powered risk assessment and automated claims processing.",
      icon: "🛡️",
      color: "#EC4899"
    },
    {
      title: "Reputation Index",
      description: "Track and analyze reputation scores across multiple platforms with real-time updates.",
      icon: "📊",
      color: "#3B82F6"
    },
    {
      title: "Decentralized Markets",
      description: "Trade reputation tokens in our secure, transparent, and liquid marketplace.",
      icon: "🌐",
      color: "#10B981"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 pt-12 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left: Interactive 3D Visualization */}
          <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] bg-black/20 rounded-2xl backdrop-blur-sm border border-white/10 order-2 lg:order-1">
            <Canvas camera={{ position: [0, 0, 5] }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <pointLight position={[-10, -10, -10]} intensity={0.5} />
              <Float speed={1.5} rotationIntensity={1} floatIntensity={1}>
                <group>
                  {/* Core Platform Sphere */}
                  <mesh position={[0, 0, 0]}>
                    <sphereGeometry args={[0.8, 32, 32]} />
                    <meshStandardMaterial
                      color={features[activeFeature].color}
                      wireframe
                      transparent
                      opacity={0.3}
                    />
                  </mesh>

                  {/* Animated Rings */}
                  {[0, 1, 2].map((index) => (
                    <group key={index} rotation={[index * Math.PI / 2, 0, 0]}>
                      <mesh>
                        <torusGeometry args={[2, 0.1, 16, 100]} />
                        <meshStandardMaterial
                          color={features[(activeFeature + index) % features.length].color}
                          wireframe
                          transparent
                          opacity={0.2}
                        />
                      </mesh>
                    </group>
                  ))}

                  {/* Floating Particles */}
                  {Array.from({ length: 20 }).map((_, index) => (
                    <mesh
                      key={index}
                      position={[
                        Math.sin(index) * 2.5,
                        Math.cos(index) * 2.5,
                        Math.sin(index + Math.PI) * 2.5
                      ]}
                    >
                      <sphereGeometry args={[0.05, 16, 16]} />
                      <meshStandardMaterial
                        color={features[activeFeature].color}
                        emissive={features[activeFeature].color}
                        emissiveIntensity={0.5}
                      />
                    </mesh>
                  ))}
                </group>
              </Float>
            </Canvas>

            {/* Feature Info Overlay */}
            <motion.div
              key={activeFeature}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8 bg-black/40 backdrop-blur-md rounded-lg p-4 sm:p-6 border border-white/10"
            >
              <div className="flex items-center space-x-4">
                <span className="text-2xl sm:text-3xl">{features[activeFeature].icon}</span>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                    {features[activeFeature].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300">
                    {features[activeFeature].description}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Features List */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
                Core Platform Features
              </h2>
              
              <div className="space-y-4 sm:space-y-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    className={`p-4 sm:p-6 rounded-lg transition-all duration-300 cursor-pointer ${
                      activeFeature === index 
                        ? 'bg-white/10 backdrop-blur-sm border border-white/10' 
                        : 'hover:bg-white/5'
                    }`}
                    onClick={() => setActiveFeature(index)}
                    whileHover={{ x: 10 }}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-center space-x-4">
                      <span className="text-xl sm:text-2xl">{feature.icon}</span>
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-400">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
