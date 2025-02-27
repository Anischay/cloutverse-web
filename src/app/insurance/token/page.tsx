'use client';

import { motion } from 'framer-motion';

const TokenInsurancePage = () => {
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
            Token Value Insurance
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Protect your personal token value against market volatility and risks
          </p>
        </motion.div>

        {/* Coverage Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "Basic Coverage",
              price: "2% annually",
              coverage: "Up to $100,000",
              features: [
                "Market volatility protection",
                "Basic smart contract coverage",
                "24/7 monitoring",
                "Standard claims process"
              ]
            },
            {
              title: "Premium Coverage",
              price: "3.5% annually",
              coverage: "Up to $500,000",
              features: [
                "Enhanced volatility protection",
                "Full smart contract coverage",
                "Priority claims processing",
                "Crisis management support",
                "Liquidity protection"
              ]
            },
            {
              title: "Enterprise Coverage",
              price: "Custom pricing",
              coverage: "Custom limits",
              features: [
                "Tailored coverage options",
                "Institutional-grade protection",
                "Dedicated support team",
                "Custom risk assessment",
                "Multi-token coverage"
              ]
            }
          ].map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20"
            >
              <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
              <div className="mb-4">
                <div className="text-2xl font-bold text-purple-400">{plan.price}</div>
                <div className="text-gray-400">Coverage: {plan.coverage}</div>
              </div>
              <ul className="space-y-2 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <span className="text-purple-400">•</span>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full px-4 py-2 rounded-lg bg-purple-500/20 text-purple-400 hover:bg-purple-500/30 transition-all duration-200">
                Get Coverage
              </button>
            </motion.div>
          ))}
        </div>

        {/* Risk Assessment */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-8">Token Risk Assessment</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20">
              <h3 className="text-xl font-semibold mb-6">Risk Factors</h3>
              <div className="space-y-4">
                {[
                  { name: "Market Volatility", risk: "Medium", score: 65 },
                  { name: "Smart Contract Risk", risk: "Low", score: 85 },
                  { name: "Liquidity Risk", risk: "Low", score: 80 },
                  { name: "Operational Risk", risk: "Very Low", score: 90 }
                ].map((factor, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-2">
                      <span>{factor.name}</span>
                      <span className="text-purple-400">{factor.risk}</span>
                    </div>
                    <div className="h-2 rounded-full bg-gray-800">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-green-500 to-green-400"
                        style={{ width: `${factor.score}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20">
              <h3 className="text-xl font-semibold mb-6">Protection Mechanisms</h3>
              <div className="space-y-4">
                {[
                  {
                    title: "Smart Contract Auditing",
                    description: "Continuous monitoring and auditing of smart contract interactions"
                  },
                  {
                    title: "Price Oracle Network",
                    description: "Decentralized price feeds for accurate token valuation"
                  },
                  {
                    title: "Liquidity Reserves",
                    description: "Dedicated reserves for claim settlements"
                  },
                  {
                    title: "Risk Monitoring",
                    description: "24/7 automated risk assessment and alerts"
                  }
                ].map((mechanism, i) => (
                  <div key={i} className="p-4 bg-black/30 rounded-lg">
                    <div className="font-semibold mb-1">{mechanism.title}</div>
                    <div className="text-gray-400 text-sm">{mechanism.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Claims Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-8">Claims Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                title: "Submit Claim",
                description: "File a claim through our automated system",
                icon: "📝"
              },
              {
                title: "Verification",
                description: "Automated verification of claim conditions",
                icon: "✅"
              },
              {
                title: "Processing",
                description: "Smart contract processes valid claims",
                icon: "⚙️"
              },
              {
                title: "Settlement",
                description: "Receive compensation within 24 hours",
                icon: "💰"
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

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Protect Your Token Value</h2>
          <p className="text-gray-400 mb-8">Get comprehensive coverage for your personal token</p>
          <button className="px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
            Get Started
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default TokenInsurancePage;
