'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const MarketsPage = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('trending');

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
            Personal Token Markets
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover, trade, and invest in the future of digital influence
          </p>
        </motion.div>

        {/* Market Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"
        >
          {[
            { label: "24h Volume", value: "$2.4M" },
            { label: "Active Tokens", value: "1,234" },
            { label: "Total Holders", value: "45.2K" },
            { label: "Market Cap", value: "$12.8M" }
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20"
            >
              <div className="text-gray-400 mb-2">{stat.label}</div>
              <div className="text-2xl font-bold">{stat.value}</div>
            </div>
          ))}
        </motion.div>

        {/* Market Tabs */}
        <div className="mb-8">
          <div className="flex space-x-4 border-b border-gray-800">
            {['trending', 'new', 'top gainers', 'most held'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 capitalize ${
                  activeTab === tab
                    ? 'text-purple-500 border-b-2 border-purple-500'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Market Table */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="overflow-x-auto"
        >
          <table className="w-full">
            <thead>
              <tr className="text-left text-gray-400">
                <th className="px-6 py-3">Token</th>
                <th className="px-6 py-3">Price</th>
                <th className="px-6 py-3">24h Change</th>
                <th className="px-6 py-3">Market Cap</th>
                <th className="px-6 py-3">Holders</th>
                <th className="px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  name: "Sarah Chen",
                  symbol: "$CHEN",
                  price: "$1.24",
                  change: "+12.5%",
                  marketCap: "$620K",
                  holders: "2.1K",
                  positive: true
                },
                {
                  name: "Marcus Williams",
                  symbol: "$MWILL",
                  price: "$0.85",
                  change: "-3.2%",
                  marketCap: "$425K",
                  holders: "1.8K",
                  positive: false
                },
                // Add more sample data as needed
              ].map((token, index) => (
                <motion.tr
                  key={token.symbol}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="border-b border-gray-800 hover:bg-purple-900/10"
                >
                  <td className="px-6 py-4">
                    <div>
                      <div className="font-semibold">{token.name}</div>
                      <div className="text-gray-400">{token.symbol}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4">{token.price}</td>
                  <td className={`px-6 py-4 ${token.positive ? 'text-green-400' : 'text-red-400'}`}>
                    {token.change}
                  </td>
                  <td className="px-6 py-4">{token.marketCap}</td>
                  <td className="px-6 py-4">{token.holders}</td>
                  <td className="px-6 py-4">
                    <button className="px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white text-sm hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                      Trade
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Market Analysis */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16"
        >
          <div className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20">
            <h3 className="text-xl font-semibold mb-4">Market Insights</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-400">Average Token Price</span>
                <span>$0.95</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Daily Active Traders</span>
                <span>3.2K</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Average Daily Trades</span>
                <span>12.5K</span>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20">
            <h3 className="text-xl font-semibold mb-4">Trading Activity</h3>
            <div className="h-40 flex items-end space-x-2">
              {[40, 65, 45, 80, 55, 70, 60].map((height, index) => (
                <div
                  key={index}
                  className="flex-1 bg-gradient-to-t from-purple-500 to-pink-500 rounded-t"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mb-16"
        >
          <button
            onClick={() => router.push('/platform/personal-token')}
            className="px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
          >
            Launch Your Own Token
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default MarketsPage;
