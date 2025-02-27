'use client';

import { motion } from 'framer-motion';

export default function CallToAction() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(white,transparent_70%)] bg-black/[0.07]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
              Start Your Journey in Web3 Reputation Finance
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of users who are already transforming their digital influence into valuable assets.
            </p>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {[
                { label: "Security Audited", icon: "🛡️" },
                { label: "24/7 Support", icon: "💬" },
                { label: "Community Driven", icon: "🤝" },
                { label: "Regular Updates", icon: "🔄" }
              ].map((item) => (
                <div key={item.label} className="flex items-center space-x-3">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-gray-400">{item.label}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(168, 85, 247, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">Launch App</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 rounded-lg font-semibold transition-all duration-300 backdrop-blur-sm"
              >
                View Documentation
              </motion.button>
            </div>
          </motion.div>

          {/* Right: Partner Logos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-8"
          >
            {[
              "Backed by leading investors",
              "Featured in major media",
              "Industry partnerships",
              "Security certifications"
            ].map((text, index) => (
              <motion.div
                key={text}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm flex items-center justify-center text-center"
              >
                <span className="text-gray-400 text-sm">{text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              value: "100%",
              label: "On-Chain Transparency",
              description: "All transactions and reputation scores are recorded on blockchain"
            },
            {
              value: "< 2s",
              label: "Transaction Speed",
              description: "Lightning-fast processing for all platform operations"
            },
            {
              value: "24/7",
              label: "Platform Availability",
              description: "Continuous operation with real-time updates and support"
            }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-xl font-semibold text-gray-300 mb-2">{stat.label}</div>
              <div className="text-gray-400">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
