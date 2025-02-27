'use client';

import { motion } from 'framer-motion';

const SocialCapitalInsurancePage = () => {
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
            Social Capital Protection
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive insurance for your social media presence and digital influence
          </p>
        </motion.div>

        {/* Coverage Types */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "Account Protection",
              description: "Safeguard against account compromise and takeover",
              icon: "🔒",
              features: [
                "24/7 account monitoring",
                "Hack prevention",
                "Recovery assistance",
                "Identity verification"
              ]
            },
            {
              title: "Content Protection",
              description: "Protect your intellectual property and content",
              icon: "📱",
              features: [
                "Content theft protection",
                "Copyright infringement coverage",
                "Plagiarism monitoring",
                "Content recovery"
              ]
            },
            {
              title: "Engagement Protection",
              description: "Insurance against engagement loss and manipulation",
              icon: "📈",
              features: [
                "Follower loss coverage",
                "Engagement rate protection",
                "Bot attack prevention",
                "Reputation monitoring"
              ]
            }
          ].map((coverage, index) => (
            <motion.div
              key={coverage.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20"
            >
              <div className="text-4xl mb-4">{coverage.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{coverage.title}</h3>
              <p className="text-gray-400 mb-4">{coverage.description}</p>
              <ul className="space-y-2">
                {coverage.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <span className="text-purple-400">•</span>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Protection Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-8">Protection Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20">
              <h3 className="text-xl font-semibold mb-6">Proactive Protection</h3>
              <div className="space-y-4">
                {[
                  {
                    title: "AI-Powered Monitoring",
                    description: "24/7 monitoring of your social media presence"
                  },
                  {
                    title: "Threat Detection",
                    description: "Early warning system for potential threats"
                  },
                  {
                    title: "Content Verification",
                    description: "Blockchain-based content timestamping"
                  },
                  {
                    title: "Access Control",
                    description: "Multi-factor authentication and security"
                  }
                ].map((feature, i) => (
                  <div key={i} className="p-4 bg-black/30 rounded-lg">
                    <div className="font-semibold mb-1">{feature.title}</div>
                    <div className="text-gray-400 text-sm">{feature.description}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20">
              <h3 className="text-xl font-semibold mb-6">Recovery Services</h3>
              <div className="space-y-4">
                {[
                  {
                    title: "Account Recovery",
                    description: "Expert assistance in account recovery"
                  },
                  {
                    title: "Content Restoration",
                    description: "Recovery of lost or stolen content"
                  },
                  {
                    title: "Reputation Repair",
                    description: "Professional reputation management"
                  },
                  {
                    title: "Legal Support",
                    description: "Access to legal expertise when needed"
                  }
                ].map((service, i) => (
                  <div key={i} className="p-4 bg-black/30 rounded-lg">
                    <div className="font-semibold mb-1">{service.title}</div>
                    <div className="text-gray-400 text-sm">{service.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Coverage Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-8">Coverage Calculator</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20">
              <h3 className="text-xl font-semibold mb-6">Calculate Your Coverage</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Platform Type</label>
                  <select className="w-full px-4 py-2 rounded-lg bg-black/30 border border-purple-500/20 focus:border-purple-500/40 outline-none">
                    <option>Instagram</option>
                    <option>Twitter</option>
                    <option>TikTok</option>
                    <option>YouTube</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Follower Count</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg bg-black/30 border border-purple-500/20 focus:border-purple-500/40 outline-none"
                    placeholder="Enter follower count"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Average Engagement Rate</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg bg-black/30 border border-purple-500/20 focus:border-purple-500/40 outline-none"
                    placeholder="Enter engagement rate"
                  />
                </div>
                <button className="w-full px-4 py-2 rounded-lg bg-purple-500/20 text-purple-400 hover:bg-purple-500/30 transition-all duration-200">
                  Calculate Premium
                </button>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20">
              <h3 className="text-xl font-semibold mb-6">Coverage Statistics</h3>
              <div className="space-y-6">
                <div>
                  <div className="text-gray-400 mb-2">Total Claims Processed</div>
                  <div className="text-3xl font-bold">2,450+</div>
                  <div className="text-green-400">98% Success Rate</div>
                </div>
                <div>
                  <div className="text-gray-400 mb-2">Average Recovery Time</div>
                  <div className="text-3xl font-bold">24 Hours</div>
                  <div className="text-purple-400">For Standard Claims</div>
                </div>
                <div>
                  <div className="text-gray-400 mb-2">Protected Accounts</div>
                  <div className="text-3xl font-bold">10,000+</div>
                  <div className="text-green-400">Across All Platforms</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Protect Your Digital Influence</h2>
          <p className="text-gray-400 mb-8">Get comprehensive coverage for your social media presence</p>
          <button className="px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
            Get Protected Now
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default SocialCapitalInsurancePage;
