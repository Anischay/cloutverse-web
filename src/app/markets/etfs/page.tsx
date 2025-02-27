'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const ETFsPage = () => {
  const [selectedTab, setSelectedTab] = useState('popular');

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
            ETFs & Indices
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Diversified exposure to the reputation economy through curated portfolios
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex space-x-4 mb-8 border-b border-gray-800">
          {['popular', 'sector', 'performance', 'new'].map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`px-4 py-2 capitalize ${
                selectedTab === tab
                  ? 'text-purple-500 border-b-2 border-purple-500'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* ETF Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {[
            {
              name: "Tech Influencer Index",
              symbol: "TECH",
              aum: "$2.4M",
              return: "+18.5%",
              holdings: 25,
              description: "Top tech thought leaders and innovators"
            },
            {
              name: "Creator Economy Fund",
              symbol: "CREATE",
              aum: "$1.8M",
              return: "+12.3%",
              holdings: 40,
              description: "Diversified exposure to content creators"
            },
            {
              name: "DeFi Leaders Index",
              symbol: "DEFI",
              aum: "$3.2M",
              return: "+25.7%",
              holdings: 15,
              description: "Leading voices in decentralized finance"
            },
            {
              name: "Social Impact ETF",
              symbol: "IMPACT",
              aum: "$1.2M",
              return: "+8.9%",
              holdings: 30,
              description: "Thought leaders driving social change"
            },
            {
              name: "Gaming Influencers",
              symbol: "GAME",
              aum: "$2.1M",
              return: "+15.4%",
              holdings: 20,
              description: "Top gaming content creators and streamers"
            },
            {
              name: "Web3 Pioneers",
              symbol: "WEB3",
              aum: "$2.8M",
              return: "+21.6%",
              holdings: 35,
              description: "Leaders shaping the future of web3"
            }
          ].map((etf, index) => (
            <motion.div
              key={etf.symbol}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{etf.name}</h3>
                  <p className="text-gray-400">${etf.symbol}</p>
                </div>
                <span className="text-green-400 font-semibold">{etf.return}</span>
              </div>
              <p className="text-gray-400 mb-4">{etf.description}</p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-gray-400">AUM</div>
                  <div className="font-semibold">{etf.aum}</div>
                </div>
                <div>
                  <div className="text-gray-400">Holdings</div>
                  <div className="font-semibold">{etf.holdings}</div>
                </div>
              </div>
              <button className="w-full mt-4 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                Invest Now
              </button>
            </motion.div>
          ))}
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "Professional Management",
              description: "Expert-curated portfolios with regular rebalancing",
              icon: "⚡"
            },
            {
              title: "Instant Diversification",
              description: "Broad exposure to top reputation assets",
              icon: "🔄"
            },
            {
              title: "Low Fees",
              description: "Competitive management fees and low entry barriers",
              icon: "💰"
            }
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ETFsPage;
