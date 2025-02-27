'use client';

import { motion } from 'framer-motion';

const PlatformOverview = () => {
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
            Platform Overview
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover how Cloutverse is revolutionizing reputation-based finance
          </p>
        </motion.div>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "Reputation Tokenization",
              description: "Convert your digital influence into tradable tokens",
              icon: "💎",
              features: [
                "AI-powered reputation scoring",
                "Automated token creation",
                "Real-time value tracking",
                "Multi-platform integration"
              ]
            },
            {
              title: "Financial Products",
              description: "Comprehensive suite of financial instruments",
              icon: "📊",
              features: [
                "Reputation indices",
                "Insurance products",
                "Derivatives trading",
                "Yield generation"
              ]
            },
            {
              title: "Risk Management",
              description: "Advanced protection for digital assets",
              icon: "🛡️",
              features: [
                "Insurance coverage",
                "Risk assessment",
                "Portfolio hedging",
                "Smart contract audits"
              ]
            }
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 mb-4">{feature.description}</p>
              <ul className="space-y-2">
                {feature.features.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <span className="text-purple-400">•</span>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Platform Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { label: "Total Value Locked", value: "$245M", change: "+15.4%" },
            { label: "Active Users", value: "125K+", change: "+32.8%" },
            { label: "Personal Tokens", value: "2.5K", change: "+25.2%" },
            { label: "Insurance Coverage", value: "$180M", change: "+42.1%" }
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20"
            >
              <div className="text-gray-400">{stat.label}</div>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-green-400">{stat.change}</div>
            </div>
          ))}
        </motion.div>

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-8">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                title: "Connect Accounts",
                description: "Link your social and web3 accounts",
                icon: "🔗"
              },
              {
                title: "Get Scored",
                description: "Receive your Clout Score™",
                icon: "📊"
              },
              {
                title: "Create Token",
                description: "Launch your personal token",
                icon: "🚀"
              },
              {
                title: "Grow Value",
                description: "Build and protect your reputation",
                icon: "📈"
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

        {/* Technology Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-8">Technology Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Blockchain",
                items: ["Ethereum", "Polygon", "Optimism", "Arbitrum"]
              },
              {
                title: "AI & Analytics",
                items: ["Machine Learning", "Natural Language Processing", "Predictive Analytics", "Risk Modeling"]
              },
              {
                title: "Security",
                items: ["Multi-sig Wallets", "Smart Contract Audits", "Insurance Protocols", "Real-time Monitoring"]
              }
            ].map((tech, index) => (
              <div
                key={tech.title}
                className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20"
              >
                <h3 className="text-xl font-semibold mb-4">{tech.title}</h3>
                <ul className="space-y-2">
                  {tech.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <span className="text-purple-400">•</span>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-gray-400 mb-8">Join the future of reputation-based finance today</p>
          <button className="px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
            Create Your Token
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default PlatformOverview;
