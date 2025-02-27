'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const DerivativesPage = () => {
  const [selectedProduct, setSelectedProduct] = useState('futures');

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
            Reputation Derivatives
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Advanced trading instruments for sophisticated reputation asset management
          </p>
        </motion.div>

        {/* Product Selection */}
        <div className="flex space-x-4 mb-8 border-b border-gray-800">
          {['futures', 'options', 'swaps', 'structured'].map((product) => (
            <button
              key={product}
              onClick={() => setSelectedProduct(product)}
              className={`px-4 py-2 capitalize ${
                selectedProduct === product
                  ? 'text-purple-500 border-b-2 border-purple-500'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {product}
            </button>
          ))}
        </div>

        {/* Product Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20"
          >
            <h2 className="text-2xl font-bold mb-4">Available Products</h2>
            <div className="space-y-4">
              {[
                {
                  name: "Reputation Futures",
                  description: "Lock in future prices for reputation assets",
                  specs: "Settlement: Monthly, Quarterly"
                },
                {
                  name: "Clout Options",
                  description: "Flexible rights to buy/sell reputation assets",
                  specs: "European-style, Cash-settled"
                },
                {
                  name: "Influence Swaps",
                  description: "Exchange reputation exposure between assets",
                  specs: "Custom terms available"
                }
              ].map((product) => (
                <div
                  key={product.name}
                  className="p-4 rounded-lg bg-black/30 border border-purple-500/10"
                >
                  <h3 className="font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-400 text-sm mb-2">{product.description}</p>
                  <p className="text-purple-400 text-sm">{product.specs}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20"
          >
            <h2 className="text-2xl font-bold mb-4">Trading Interface</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-black/30 border border-purple-500/10">
                  <div className="text-gray-400 mb-1">Mark Price</div>
                  <div className="text-xl font-semibold">$1,245.00</div>
                </div>
                <div className="p-4 rounded-lg bg-black/30 border border-purple-500/10">
                  <div className="text-gray-400 mb-1">24h Volume</div>
                  <div className="text-xl font-semibold">$2.4M</div>
                </div>
              </div>
              <div className="p-4 rounded-lg bg-black/30 border border-purple-500/10">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-400">Order Book</span>
                  <span className="text-gray-400">Spread: $0.50</span>
                </div>
                <div className="space-y-2">
                  {[
                    { price: 1246.00, size: 2.5, type: 'sell' },
                    { price: 1245.50, size: 1.8, type: 'sell' },
                    { price: 1245.00, size: 3.2, type: 'buy' },
                    { price: 1244.50, size: 2.1, type: 'buy' }
                  ].map((order, index) => (
                    <div
                      key={index}
                      className="flex justify-between text-sm"
                    >
                      <span className={order.type === 'sell' ? 'text-red-400' : 'text-green-400'}>
                        ${order.price.toFixed(2)}
                      </span>
                      <span className="text-gray-400">{order.size} CLOUT</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Risk Warning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="p-6 rounded-xl bg-red-900/20 border border-red-500/20 mb-16"
        >
          <h3 className="text-xl font-semibold mb-2">Risk Warning</h3>
          <p className="text-gray-400">
            Derivatives trading involves substantial risk of loss and is not suitable for all investors.
            Please ensure you fully understand the risks involved and never trade with funds you cannot afford to lose.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Advanced Order Types",
              description: "Limit, market, stop-loss, and more",
              icon: "📊"
            },
            {
              title: "Portfolio Margining",
              description: "Efficient capital utilization across products",
              icon: "💰"
            },
            {
              title: "Risk Management Tools",
              description: "Sophisticated hedging capabilities",
              icon: "🛡️"
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

export default DerivativesPage;
