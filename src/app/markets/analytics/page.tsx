'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const AnalyticsPage = () => {
  const [timeframe, setTimeframe] = useState('24h');

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
            Market Analytics
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            AI-powered insights into the reputation economy
          </p>
        </motion.div>

        {/* Timeframe Selection */}
        <div className="flex justify-center space-x-4 mb-8">
          {['24h', '7d', '30d', '90d', 'All'].map((time) => (
            <button
              key={time}
              onClick={() => setTimeframe(time)}
              className={`px-4 py-2 rounded-lg ${
                timeframe === time
                  ? 'bg-purple-500/20 text-purple-400'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {time}
            </button>
          ))}
        </div>

        {/* Market Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { label: "Total Volume", value: "$12.4M", change: "+15.2%" },
            { label: "Active Tokens", value: "1,234", change: "+8.4%" },
            { label: "Market Cap", value: "$45.2M", change: "+12.7%" },
            { label: "Avg Token Price", value: "$1.24", change: "+5.3%" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20"
            >
              <div className="text-gray-400 mb-2">{stat.label}</div>
              <div className="text-2xl font-bold mb-2">{stat.value}</div>
              <div className="text-green-400">{stat.change}</div>
            </motion.div>
          ))}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {[
            { title: "Volume Distribution", type: "Pie Chart" },
            { title: "Price Trends", type: "Line Chart" },
            { title: "Token Performance", type: "Bar Chart" },
            { title: "Market Sentiment", type: "Area Chart" }
          ].map((chart, index) => (
            <motion.div
              key={chart.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20"
            >
              <h3 className="text-xl font-semibold mb-4">{chart.title}</h3>
              <div className="h-64 rounded-lg bg-black/30 border border-purple-500/10 flex items-center justify-center">
                <p className="text-gray-400">{chart.type} Component</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Top Performers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold mb-6">Top Performers</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-gray-400">
                  <th className="px-6 py-3">Token</th>
                  <th className="px-6 py-3">Price</th>
                  <th className="px-6 py-3">Change</th>
                  <th className="px-6 py-3">Volume</th>
                  <th className="px-6 py-3">Market Cap</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: "Sarah Chen",
                    symbol: "$CHEN",
                    price: "$1.24",
                    change: "+12.5%",
                    volume: "$245K",
                    marketCap: "$620K"
                  },
                  {
                    name: "Tech Index",
                    symbol: "$TECH",
                    price: "$2.34",
                    change: "+8.4%",
                    volume: "$180K",
                    marketCap: "$1.2M"
                  },
                  {
                    name: "Creator Fund",
                    symbol: "$CREATE",
                    price: "$1.56",
                    change: "+6.7%",
                    volume: "$156K",
                    marketCap: "$780K"
                  }
                ].map((token, index) => (
                  <motion.tr
                    key={token.symbol}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="border-b border-gray-800"
                  >
                    <td className="px-6 py-4">
                      <div className="font-semibold">{token.name}</div>
                      <div className="text-gray-400">{token.symbol}</div>
                    </td>
                    <td className="px-6 py-4">{token.price}</td>
                    <td className="px-6 py-4 text-green-400">{token.change}</td>
                    <td className="px-6 py-4">{token.volume}</td>
                    <td className="px-6 py-4">{token.marketCap}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* AI Insights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              title: "Market Sentiment",
              description: "Overall market sentiment is bullish with strong buying pressure",
              icon: "🎯"
            },
            {
              title: "Trend Analysis",
              description: "Tech sector tokens showing consistent growth patterns",
              icon: "📈"
            },
            {
              title: "Risk Assessment",
              description: "Market volatility index indicates stable trading conditions",
              icon: "⚖️"
            }
          ].map((insight, index) => (
            <div
              key={insight.title}
              className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20"
            >
              <div className="text-4xl mb-4">{insight.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{insight.title}</h3>
              <p className="text-gray-400">{insight.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
