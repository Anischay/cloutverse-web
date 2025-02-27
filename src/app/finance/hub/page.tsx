'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

const FinancialHubPage = () => {
  const [selectedView, setSelectedView] = useState('portfolio');

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
            Financial Hub
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Your command center for the reputation economy
          </p>
        </motion.div>

        {/* Financial Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="col-span-2 p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20"
          >
            <h2 className="text-2xl font-bold mb-6">Portfolio Overview</h2>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div>
                <div className="text-gray-400">Total Value</div>
                <div className="text-2xl font-bold">$124,500</div>
                <div className="text-green-400">+12.5%</div>
              </div>
              <div>
                <div className="text-gray-400">Risk Score</div>
                <div className="text-2xl font-bold">72/100</div>
                <div className="text-purple-400">Moderate</div>
              </div>
              <div>
                <div className="text-gray-400">Yield APY</div>
                <div className="text-2xl font-bold">8.4%</div>
                <div className="text-green-400">+2.1%</div>
              </div>
            </div>
            <div className="h-48 bg-black/30 rounded-lg mb-4"></div>
            <div className="flex justify-between text-sm text-gray-400">
              <span>Asset Allocation</span>
              <span>Historical Performance</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20">
              <h3 className="font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <button className="w-full px-4 py-2 rounded-lg bg-purple-500/20 text-purple-400 hover:bg-purple-500/30 transition-all duration-200">
                  Deposit Funds
                </button>
                <button className="w-full px-4 py-2 rounded-lg bg-purple-500/20 text-purple-400 hover:bg-purple-500/30 transition-all duration-200">
                  Trade Assets
                </button>
                <button className="w-full px-4 py-2 rounded-lg bg-purple-500/20 text-purple-400 hover:bg-purple-500/30 transition-all duration-200">
                  Stake Tokens
                </button>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20">
              <h3 className="font-semibold mb-4">Risk Analysis</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-400">Portfolio Risk</span>
                    <span className="text-purple-400">Moderate</span>
                  </div>
                  <div className="h-2 rounded-full bg-gray-800">
                    <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-green-500 to-yellow-500"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-400">Diversification</span>
                    <span className="text-green-400">High</span>
                  </div>
                  <div className="h-2 rounded-full bg-gray-800">
                    <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-green-500 to-green-400"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Financial Tools */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            {
              title: "Yield Optimizer",
              description: "Maximize returns through automated yield farming",
              apy: "8.4%",
              tvl: "$2.4M"
            },
            {
              title: "Lending Protocol",
              description: "Borrow against your reputation assets",
              available: "$450K",
              rate: "4.2%"
            },
            {
              title: "Insurance Pool",
              description: "Protection against reputation risks",
              coverage: "$1.2M",
              premium: "2.5%"
            },
            {
              title: "Liquidity Pools",
              description: "Provide liquidity and earn fees",
              volume: "$345K",
              rewards: "12.5%"
            }
          ].map((tool, index) => (
            <motion.div
              key={tool.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20"
            >
              <h3 className="text-xl font-semibold mb-2">{tool.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{tool.description}</p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                {Object.entries(tool).slice(2).map(([key, value]) => (
                  <div key={key}>
                    <div className="text-gray-400 capitalize">{key}</div>
                    <div className="text-xl font-semibold">{value}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Advanced Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20"
          >
            <h3 className="text-xl font-semibold mb-4">Portfolio Constructor</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Personal Tokens</span>
                <span>45%</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Reputation ETFs</span>
                <span>30%</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Derivatives</span>
                <span>15%</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Stablecoin</span>
                <span>10%</span>
              </div>
              <button className="w-full px-4 py-2 rounded-lg bg-purple-500/20 text-purple-400 hover:bg-purple-500/30 transition-all duration-200">
                Rebalance Portfolio
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20"
          >
            <h3 className="text-xl font-semibold mb-4">Risk Management</h3>
            <div className="space-y-4">
              <div className="p-3 rounded-lg bg-black/30">
                <div className="font-semibold mb-1">Hedging Strategy</div>
                <div className="text-gray-400 text-sm">Active protection against market volatility</div>
                <div className="text-purple-400 text-sm mt-2">Coverage: 85%</div>
              </div>
              <div className="p-3 rounded-lg bg-black/30">
                <div className="font-semibold mb-1">Stop Loss</div>
                <div className="text-gray-400 text-sm">Automated risk management</div>
                <div className="text-purple-400 text-sm mt-2">Trigger: -15%</div>
              </div>
              <button className="w-full px-4 py-2 rounded-lg bg-purple-500/20 text-purple-400 hover:bg-purple-500/30 transition-all duration-200">
                Adjust Risk Parameters
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20"
          >
            <h3 className="text-xl font-semibold mb-4">Financial Planning</h3>
            <div className="space-y-4">
              <div className="p-3 rounded-lg bg-black/30">
                <div className="font-semibold mb-1">Growth Projection</div>
                <div className="text-gray-400 text-sm">Based on current portfolio</div>
                <div className="text-green-400 text-sm mt-2">+45% Annual</div>
              </div>
              <div className="p-3 rounded-lg bg-black/30">
                <div className="font-semibold mb-1">Yield Generation</div>
                <div className="text-gray-400 text-sm">Passive income strategy</div>
                <div className="text-green-400 text-sm mt-2">$2,400/month</div>
              </div>
              <button className="w-full px-4 py-2 rounded-lg bg-purple-500/20 text-purple-400 hover:bg-purple-500/30 transition-all duration-200">
                View Detailed Analysis
              </button>
            </div>
          </motion.div>
        </div>

        {/* Market Insights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20 mb-8"
        >
          <h2 className="text-2xl font-bold mb-6">Market Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Market Sentiment</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">Fear & Greed Index</span>
                  <span className="text-green-400">65 - Greed</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Volatility Index</span>
                  <span className="text-purple-400">Low</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Trending Sectors</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">Tech Influencers</span>
                  <span className="text-green-400">+15.4%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Creator Economy</span>
                  <span className="text-green-400">+12.8%</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Upcoming Events</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">Token Launch</span>
                  <span className="text-purple-400">2 days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Governance Vote</span>
                  <span className="text-purple-400">5 days</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Advanced Tools CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <button className="px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
            Explore Advanced Financial Tools
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default FinancialHubPage;
