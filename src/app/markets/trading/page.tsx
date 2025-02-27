'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const TradingPage = () => {
  const [selectedTab, setSelectedTab] = useState('spot');
  const [selectedPair, setSelectedPair] = useState('CHEN/CLOUT');

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
            Trading Platform
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Advanced trading interface for reputation assets
          </p>
        </motion.div>

        {/* Trading Interface */}
        <div className="grid grid-cols-12 gap-6 mb-16">
          {/* Market Overview */}
          <div className="col-span-12 lg:col-span-3 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="p-4 rounded-xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">Markets</h3>
                <input
                  type="text"
                  placeholder="Search"
                  className="px-3 py-1 text-sm rounded-lg bg-black/50 border border-purple-500/20"
                />
              </div>
              <div className="space-y-2">
                {[
                  { pair: 'CHEN/CLOUT', price: '1.245', change: '+5.2%' },
                  { pair: 'MWILL/CLOUT', price: '0.856', change: '-2.1%' },
                  { pair: 'TECH/CLOUT', price: '2.341', change: '+8.4%' },
                  { pair: 'CREATE/CLOUT', price: '1.567', change: '+3.7%' }
                ].map((market) => (
                  <div
                    key={market.pair}
                    onClick={() => setSelectedPair(market.pair)}
                    className={`p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                      selectedPair === market.pair
                        ? 'bg-purple-500/20 border border-purple-500/40'
                        : 'hover:bg-purple-500/10'
                    }`}
                  >
                    <div className="flex justify-between">
                      <span>{market.pair}</span>
                      <span className={market.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}>
                        {market.change}
                      </span>
                    </div>
                    <div className="text-gray-400">${market.price}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Chart and Trading */}
          <div className="col-span-12 lg:col-span-6 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 rounded-xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20"
            >
              {/* Trading Tabs */}
              <div className="flex space-x-4 mb-4">
                {['spot', 'margin', 'futures'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setSelectedTab(tab)}
                    className={`px-4 py-2 rounded-lg capitalize ${
                      selectedTab === tab
                        ? 'bg-purple-500/20 text-purple-400'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Chart Placeholder */}
              <div className="h-64 mb-4 rounded-lg bg-black/30 border border-purple-500/10 flex items-center justify-center">
                <p className="text-gray-400">Chart Component</p>
              </div>

              {/* Trading Form */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <h4 className="font-semibold text-green-400">Buy {selectedPair.split('/')[0]}</h4>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Price</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 rounded-lg bg-black/50 border border-purple-500/20"
                      placeholder="0.00"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Amount</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 rounded-lg bg-black/50 border border-purple-500/20"
                      placeholder="0.00"
                    />
                  </div>
                  <button className="w-full px-4 py-2 rounded-lg bg-green-500/20 text-green-400 hover:bg-green-500/30 transition-all duration-200">
                    Buy
                  </button>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-red-400">Sell {selectedPair.split('/')[0]}</h4>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Price</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 rounded-lg bg-black/50 border border-purple-500/20"
                      placeholder="0.00"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Amount</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 rounded-lg bg-black/50 border border-purple-500/20"
                      placeholder="0.00"
                    />
                  </div>
                  <button className="w-full px-4 py-2 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-all duration-200">
                    Sell
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Order Book & History */}
          <div className="col-span-12 lg:col-span-3 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="p-4 rounded-xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20"
            >
              <h3 className="font-semibold mb-4">Order Book</h3>
              <div className="space-y-2">
                {[
                  { price: 1.248, amount: 2500, type: 'sell' },
                  { price: 1.247, amount: 1800, type: 'sell' },
                  { price: 1.246, amount: 3200, type: 'sell' },
                  { price: 1.245, amount: 2100, type: 'buy' },
                  { price: 1.244, amount: 2800, type: 'buy' },
                  { price: 1.243, amount: 1500, type: 'buy' }
                ].map((order, index) => (
                  <div
                    key={index}
                    className="flex justify-between text-sm"
                  >
                    <span className={order.type === 'sell' ? 'text-red-400' : 'text-green-400'}>
                      ${order.price.toFixed(3)}
                    </span>
                    <span className="text-gray-400">{order.amount.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="p-4 rounded-xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20"
            >
              <h3 className="font-semibold mb-4">Trade History</h3>
              <div className="space-y-2">
                {[
                  { price: 1.245, amount: 1200, time: '14:30:25' },
                  { price: 1.246, amount: 800, time: '14:30:18' },
                  { price: 1.244, amount: 1500, time: '14:30:12' },
                  { price: 1.245, amount: 2000, time: '14:30:05' }
                ].map((trade, index) => (
                  <div
                    key={index}
                    className="flex justify-between text-sm"
                  >
                    <span className="text-purple-400">${trade.price.toFixed(3)}</span>
                    <span className="text-gray-400">{trade.amount}</span>
                    <span className="text-gray-500">{trade.time}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Advanced Order Types",
              description: "Limit, market, and stop orders",
              icon: "📊"
            },
            {
              title: "Real-time Data",
              description: "Live price feeds and market depth",
              icon: "⚡"
            },
            {
              title: "Secure Trading",
              description: "Multi-signature security protocols",
              icon: "🔒"
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
      </div>
    </div>
  );
};

export default TradingPage;
