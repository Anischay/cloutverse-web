'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const CloutCoinPage = () => {
  const router = useRouter();
  const [price, setPrice] = useState(42.69);
  const [marketCap, setMarketCap] = useState("1.2B");
  const [volume24h, setVolume24h] = useState("234.5M");

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
            CloutCoin Ecosystem
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            The dual-token economy powering the future of reputation finance
          </p>
        </motion.div>

        {/* Token Types */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {/* CloutCoin (CLOUT) */}
          <div className="p-8 rounded-xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20">
            <div className="text-4xl mb-4">🌟</div>
            <h2 className="text-2xl font-bold mb-4">CloutCoin (CLOUT)</h2>
            <p className="text-gray-400 mb-6">The central governance and utility token of the Cloutverse ecosystem</p>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Price</span>
                <span className="text-xl font-bold">${price}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Market Cap</span>
                <span className="text-xl font-bold">${marketCap}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">24h Volume</span>
                <span className="text-xl font-bold">${volume24h}</span>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold mb-2">Key Features:</h3>
              <div className="flex items-center text-gray-300">
                <span className="mr-2">✓</span>
                Platform governance voting rights
              </div>
              <div className="flex items-center text-gray-300">
                <span className="mr-2">✓</span>
                Fee discounts on all transactions
              </div>
              <div className="flex items-center text-gray-300">
                <span className="mr-2">✓</span>
                Staking rewards and benefits
              </div>
              <div className="flex items-center text-gray-300">
                <span className="mr-2">✓</span>
                Access to premium features
              </div>
            </div>
          </div>

          {/* Personal Tokens */}
          <div className="p-8 rounded-xl bg-gradient-to-br from-pink-900/20 to-purple-900/20 border border-pink-500/20">
            <div className="text-4xl mb-4">💫</div>
            <h2 className="text-2xl font-bold mb-4">Personal Tokens</h2>
            <p className="text-gray-400 mb-6">Create and trade personal reputation tokens backed by your Clout Score™</p>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Active Tokens</span>
                <span className="text-xl font-bold">1,234</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Total Value</span>
                <span className="text-xl font-bold">$8.5M</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Avg. Daily Volume</span>
                <span className="text-xl font-bold">$234K</span>
              </div>
            </div>

            <motion.button
              onClick={() => router.push('/platform/personal-token')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            >
              Launch Your Token
            </motion.button>
          </div>
        </motion.div>

        {/* Token Utility */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Ecosystem Integration</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "CLOUT Governance",
                description: "Shape platform decisions and earn rewards through active participation",
                icon: "🏛️"
              },
              {
                title: "Personal Token Creation",
                description: "Launch your own token backed by your reputation score",
                icon: "🚀"
              },
              {
                title: "Cross-token Trading",
                description: "Trade between CLOUT and personal tokens seamlessly",
                icon: "💱"
              },
              {
                title: "Reputation Staking",
                description: "Stake tokens to earn rewards and boost your influence",
                icon: "📈"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Token Distribution */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8">CLOUT Token Distribution</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Community Treasury", percentage: 40 },
              { label: "Team & Advisors", percentage: 20 },
              { label: "Ecosystem Growth", percentage: 25 },
              { label: "Public Sale", percentage: 15 }
            ].map((item) => (
              <div
                key={item.label}
                className="p-4 rounded-xl bg-gradient-to-br from-purple-900/20 to-blue-900/20"
              >
                <div className="text-xl font-bold mb-2">{item.percentage}%</div>
                <div className="text-gray-400">{item.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Sections */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="text-center space-y-8"
        >
          <div>
            <h2 className="text-3xl font-bold mb-4">Get Started with CLOUT</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-6">
              Join the revolution in reputation finance. Buy, stake, and govern with CloutCoin.
            </p>
            <button className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
              Buy CLOUT
            </button>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">Create Your Personal Token</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-6">
              Transform your influence into a tradable asset with your own personal token.
            </p>
            <button className="px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 text-white font-semibold hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300">
              Launch Token
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CloutCoinPage;
