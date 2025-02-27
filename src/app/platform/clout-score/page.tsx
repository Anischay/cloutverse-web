'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const CloutScorePage = () => {
  const [score, setScore] = useState(750);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
            Clout Score™
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            The next generation reputation metric powered by AI and blockchain technology
          </p>
        </motion.div>

        {/* Score Display */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="relative w-64 h-64 mx-auto mb-16"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full animate-spin-slow opacity-30 blur-xl" />
          <div className="absolute inset-0 bg-black rounded-full m-1" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
                {loading ? "..." : score}
              </div>
              <div className="text-gray-400 mt-2">Your Clout Score</div>
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "AI-Powered Analysis",
              description: "Advanced machine learning algorithms analyze your digital footprint",
              icon: "🤖"
            },
            {
              title: "Real-time Updates",
              description: "Your score updates in real-time as your influence grows",
              icon: "⚡"
            },
            {
              title: "Blockchain Verified",
              description: "Every score change is recorded on the blockchain for transparency",
              icon: "🔗"
            }
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Score Factors */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Score Factors</h2>
          <div className="space-y-4">
            {[
              { name: "Social Media Influence", value: 85 },
              { name: "Community Engagement", value: 72 },
              { name: "Content Quality", value: 90 },
              { name: "Network Strength", value: 68 }
            ].map((factor) => (
              <div key={factor.name} className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 p-4 rounded-lg">
                <div className="flex justify-between mb-2">
                  <span>{factor.name}</span>
                  <span className="text-purple-400">{factor.value}%</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${factor.value}%` }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="text-center"
        >
          <button className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
            Calculate Your Score
          </button>
          <p className="mt-4 text-gray-400">
            Connect your accounts to get your personalized Clout Score™
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default CloutScorePage;
