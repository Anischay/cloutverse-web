'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const InsurancePage = () => {
  const [selectedProduct, setSelectedProduct] = useState('reputation');

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
            Reputation Insurance
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Protect your digital reputation and personal token value with our comprehensive insurance products
          </p>
        </motion.div>

        {/* Insurance Products */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "Reputation Shield",
              description: "Protection against sudden drops in reputation score",
              coverage: "Up to 90% value protection",
              premium: "From 2.5% annually",
              features: [
                "24/7 reputation monitoring",
                "Automatic claim processing",
                "Crisis management support",
                "Recovery assistance"
              ]
            },
            {
              title: "Token Value Insurance",
              description: "Safeguard your personal token value against market volatility",
              coverage: "Up to $500,000",
              premium: "From 3% annually",
              features: [
                "Market volatility protection",
                "Smart contract coverage",
                "Liquidity risk protection",
                "Exchange delisting coverage"
              ]
            },
            {
              title: "Social Capital Protection",
              description: "Comprehensive coverage for your social media presence",
              coverage: "Full account recovery",
              premium: "From 1.8% annually",
              features: [
                "Account hack protection",
                "Content theft coverage",
                "Impersonation protection",
                "Engagement loss coverage"
              ]
            }
          ].map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20"
            >
              <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{product.description}</p>
              <div className="space-y-4 mb-6">
                <div>
                  <div className="text-gray-400">Coverage</div>
                  <div className="text-lg font-semibold">{product.coverage}</div>
                </div>
                <div>
                  <div className="text-gray-400">Premium</div>
                  <div className="text-lg font-semibold">{product.premium}</div>
                </div>
              </div>
              <div className="space-y-2">
                {product.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <span className="text-purple-400">•</span>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
              <button className="w-full mt-6 px-4 py-2 rounded-lg bg-purple-500/20 text-purple-400 hover:bg-purple-500/30 transition-all duration-200">
                Get Coverage
              </button>
            </motion.div>
          ))}
        </div>

        {/* Claims Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-8">Smart Claims Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                title: "Incident Detection",
                description: "Our AI systems continuously monitor your reputation metrics and token value",
                icon: "🔍"
              },
              {
                title: "Automatic Verification",
                description: "Smart contracts verify claim conditions and trigger immediate response",
                icon: "✅"
              },
              {
                title: "Instant Payout",
                description: "Receive compensation directly to your wallet within minutes",
                icon: "💸"
              },
              {
                title: "Recovery Support",
                description: "Access to our network of reputation management experts",
                icon: "🛟"
              }
            ].map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20"
              >
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Risk Assessment */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          <div className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20">
            <h3 className="text-xl font-semibold mb-6">Risk Assessment</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span>Account Security</span>
                  <span className="text-green-400">Strong</span>
                </div>
                <div className="h-2 rounded-full bg-gray-800">
                  <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-green-500 to-green-400"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span>Market Exposure</span>
                  <span className="text-yellow-400">Moderate</span>
                </div>
                <div className="h-2 rounded-full bg-gray-800">
                  <div className="h-full w-3/5 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-400"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span>Reputation Volatility</span>
                  <span className="text-green-400">Low</span>
                </div>
                <div className="h-2 rounded-full bg-gray-800">
                  <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-green-500 to-green-400"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20">
            <h3 className="text-xl font-semibold mb-6">Coverage Calculator</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Token Value</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg bg-black/30 border border-purple-500/20 focus:border-purple-500/40 outline-none"
                  placeholder="Enter token value"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Coverage Period</label>
                <select className="w-full px-4 py-2 rounded-lg bg-black/30 border border-purple-500/20 focus:border-purple-500/40 outline-none">
                  <option>3 months</option>
                  <option>6 months</option>
                  <option>1 year</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Coverage Type</label>
                <select className="w-full px-4 py-2 rounded-lg bg-black/30 border border-purple-500/20 focus:border-purple-500/40 outline-none">
                  <option>Basic Protection</option>
                  <option>Standard Coverage</option>
                  <option>Premium Coverage</option>
                </select>
              </div>
              <button className="w-full px-4 py-2 rounded-lg bg-purple-500/20 text-purple-400 hover:bg-purple-500/30 transition-all duration-200">
                Calculate Premium
              </button>
            </div>
          </div>
        </motion.div>

        {/* Insurance Pool Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20 mb-16"
        >
          <h2 className="text-2xl font-bold mb-6">Insurance Pool Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <div className="text-gray-400">Total Value Locked</div>
              <div className="text-2xl font-bold">$24.5M</div>
              <div className="text-green-400">+5.2% this week</div>
            </div>
            <div>
              <div className="text-gray-400">Active Policies</div>
              <div className="text-2xl font-bold">1,245</div>
              <div className="text-green-400">+12% this month</div>
            </div>
            <div>
              <div className="text-gray-400">Claims Processed</div>
              <div className="text-2xl font-bold">98.5%</div>
              <div className="text-purple-400">Within 24 hours</div>
            </div>
            <div>
              <div className="text-gray-400">Pool Stability</div>
              <div className="text-2xl font-bold">AAA</div>
              <div className="text-green-400">Highly Secure</div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Protect Your Digital Assets?</h2>
          <p className="text-gray-400 mb-8">Get started with our comprehensive insurance coverage today</p>
          <button className="px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
            Get Instant Quote
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default InsurancePage;
