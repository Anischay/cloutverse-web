'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';

const ScoreOrb = ({ score }) => {
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh>
        <sphereGeometry args={[2, 64, 64]} />
        <MeshDistortMaterial
          color={score > 75 ? "#4ecdc4" : score > 50 ? "#f1c40f" : "#ff6b6b"}
          speed={0.5}
          distort={0.3}
          radius={1}
        />
      </mesh>
    </Float>
  );
};

const ReputationDemo = () => {
  const [score, setScore] = useState(70);
  const [factors, setFactors] = useState({
    engagement: 65,
    credibility: 75,
    history: 70,
    network: 80
  });

  const updateFactor = (factor: string, value: number) => {
    setFactors(prev => ({
      ...prev,
      [factor]: value
    }));
    
    // Calculate new score
    const newScore = Math.round(
      Object.values({ ...factors, [factor]: value }).reduce((a, b) => a + b, 0) / 4
    );
    setScore(newScore);
  };

  return (
    <section className="min-h-screen py-20 relative">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500">
            Reputation Score Calculator
          </h2>
          <p className="text-xl text-gray-300">
            Experience how your actions influence your Clout Score
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 3D Score Visualization */}
          <div className="h-[400px] bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-2xl overflow-hidden">
            <Canvas camera={{ position: [0, 0, 8] }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <ScoreOrb score={score} />
            </Canvas>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <motion.div
                key={score}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-6xl font-bold text-white"
              >
                {score}
              </motion.div>
            </div>
          </div>

          {/* Interactive Controls */}
          <div className="space-y-8">
            {Object.entries(factors).map(([factor, value]) => (
              <div key={factor} className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-lg text-gray-300 capitalize">
                    {factor}
                  </label>
                  <span className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                    {value}
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={value}
                  onChange={(e) => updateFactor(factor, parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="p-6 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl backdrop-blur-lg"
            >
              <h3 className="text-xl font-semibold mb-4 text-white">
                Score Analysis
              </h3>
              <p className="text-gray-300">
                {score > 75
                  ? "Excellent reputation! Your high score opens up premium financial opportunities."
                  : score > 50
                  ? "Good standing. Consider improving key metrics to unlock more benefits."
                  : "Room for improvement. Focus on building your reputation through positive actions."}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReputationDemo;
