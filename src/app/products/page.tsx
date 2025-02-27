'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const ReputationIndexPage = () => {
  const [selectedIndex, setSelectedIndex] = useState('tech');

  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            Reputation Indices
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore our curated indices tracking the most influential voices across different sectors
          </p>
        </motion.div>

        {/* Index Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {['tech', 'finance', 'creative'].map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedIndex(category)}
              className={`p-6 rounded-xl border ${
                selectedIndex === category
                  ? 'border-purple-500 bg-purple-500/10'
                  : 'border-gray-700 hover:border-purple-500/50'
              } transition-all duration-300`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <h3 className="text-xl font-semibold mb-2 capitalize">{category} Leaders</h3>
              <p className="text-gray-400">
                Top {category} influencers ranked by reputation score
              </p>
            </motion.button>
          ))}
        </div>

        {/* Index Details */}
        <motion.div
          key={selectedIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-3xl p-8"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-4 capitalize">{selectedIndex} Index</h2>
              <p className="text-gray-400 mb-6">
                Track and invest in the collective reputation of leading {selectedIndex} influencers
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <span className="text-2xl">📈</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Performance Tracking</h4>
                    <p className="text-gray-400">Real-time reputation score updates</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <span className="text-2xl">🔄</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Rebalancing</h4>
                    <p className="text-gray-400">Monthly updates to index composition</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <span className="text-2xl">🛡️</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Risk Management</h4>
                    <p className="text-gray-400">Diversified exposure across top influencers</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Placeholder for index chart/visualization */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl" />
              <div className="h-full min-h-[300px] rounded-xl border border-purple-500/30 p-6">
                <div className="flex justify-between mb-8">
                  <div>
                    <h4 className="font-semibold">Index Value</h4>
                    <p className="text-2xl font-bold text-purple-400">1,234.56</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">24h Change</h4>
                    <p className="text-2xl font-bold text-green-400">+5.67%</p>
                  </div>
                </div>
                {/* Placeholder for chart */}
                <div className="h-48 bg-gradient-to-b from-purple-500/20 to-transparent rounded-lg" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Featured Influencers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Influencers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-xl p-6"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-purple-500/20" />
                  <div>
                    <h3 className="font-semibold">Influencer {i}</h3>
                    <p className="text-purple-400">@handle{i}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Reputation Score</span>
                    <span className="font-semibold">98.{i}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Followers</span>
                    <span className="font-semibold">1.{i}M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Engagement</span>
                    <span className="font-semibold">{i + 4}%</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16 py-16"
        >
          <h2 className="text-3xl font-bold mb-4">Start Investing in Reputation</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Join the future of social capital investment. Track, analyze, and invest in the
            world's top influencers through our reputation indices.
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl font-semibold hover:opacity-90 transition-opacity">
            Get Started
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default ReputationIndexPage;
