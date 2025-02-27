'use client';

import { motion } from 'framer-motion';

const RoadmapPage = () => {
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
            Platform Roadmap
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our journey to revolutionize reputation-based finance
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-purple-500/50 to-blue-500/50"></div>

          {/* Milestones */}
          {[
            {
              phase: "Q1 2025",
              title: "Foundation Phase",
              status: "Completed",
              items: [
                "Platform architecture development",
                "Smart contract deployment",
                "Basic token creation system",
                "Core team expansion"
              ]
            },
            {
              phase: "Q2 2025",
              title: "Growth Phase",
              status: "In Progress",
              items: [
                "Advanced reputation scoring",
                "Insurance product launch",
                "Multi-chain integration",
                "Community governance implementation"
              ]
            },
            {
              phase: "Q3 2025",
              title: "Expansion Phase",
              status: "Upcoming",
              items: [
                "Derivatives market launch",
                "Cross-chain bridges",
                "Institutional partnerships",
                "Enhanced analytics dashboard"
              ]
            },
            {
              phase: "Q4 2025",
              title: "Innovation Phase",
              status: "Planned",
              items: [
                "AI-powered trading features",
                "Mobile app launch",
                "Global marketing campaign",
                "Enterprise solutions"
              ]
            },
            {
              phase: "Q1 2026",
              title: "Ecosystem Phase",
              status: "Planned",
              items: [
                "Developer SDK release",
                "Third-party integrations",
                "Decentralized identity system",
                "Cross-platform expansion"
              ]
            }
          ].map((milestone, index) => (
            <motion.div
              key={milestone.phase}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative mb-16 ${
                index % 2 === 0 ? "text-right pr-8 md:pr-0" : "text-left pl-8 md:pl-0"
              }`}
            >
              <div
                className={`md:flex ${
                  index % 2 === 0
                    ? "md:flex-row-reverse md:justify-start"
                    : "md:flex-row md:justify-end"
                } items-center`}
              >
                <div className="md:w-1/2 p-6">
                  <div
                    className={`p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20 ${
                      index % 2 === 0 ? "md:ml-8" : "md:mr-8"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold">{milestone.title}</h3>
                      <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-sm">
                        {milestone.phase}
                      </span>
                    </div>
                    <div className="mb-4">
                      <span
                        className={`text-sm ${
                          milestone.status === "Completed"
                            ? "text-green-400"
                            : milestone.status === "In Progress"
                            ? "text-yellow-400"
                            : "text-gray-400"
                        }`}
                      >
                        {milestone.status}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {milestone.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <span className="text-purple-400">•</span>
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Future Vision */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-16 mb-16"
        >
          <h2 className="text-2xl font-bold mb-8">Future Vision</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Global Adoption",
                description: "Become the leading platform for reputation-based finance worldwide",
                icon: "🌍"
              },
              {
                title: "Innovation Hub",
                description: "Drive continuous innovation in Web3 and DeFi space",
                icon: "💡"
              },
              {
                title: "Community Growth",
                description: "Build a thriving ecosystem of users, developers, and partners",
                icon: "🤝"
              }
            ].map((vision, index) => (
              <motion.div
                key={vision.title}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20"
              >
                <div className="text-4xl mb-4">{vision.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{vision.title}</h3>
                <p className="text-gray-400">{vision.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Get Involved */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Get Involved</h2>
          <p className="text-gray-400 mb-8">Join us in building the future of digital reputation</p>
          <div className="flex justify-center gap-4">
            <button className="px-6 py-2 rounded-lg bg-purple-500/20 text-purple-400 hover:bg-purple-500/30 transition-all duration-200">
              Join Discord
            </button>
            <button className="px-6 py-2 rounded-lg bg-purple-500/20 text-purple-400 hover:bg-purple-500/30 transition-all duration-200">
              Follow Updates
            </button>
            <button className="px-6 py-2 rounded-lg bg-purple-500/20 text-purple-400 hover:bg-purple-500/30 transition-all duration-200">
              View GitHub
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RoadmapPage;
