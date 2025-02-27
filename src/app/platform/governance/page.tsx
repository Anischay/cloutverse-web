'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const GovernancePage = () => {
  const [activeProposals, setActiveProposals] = useState(12);
  const [totalVotes, setTotalVotes] = useState("2.5M");
  const [participation, setParticipation] = useState(78);

  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
            Governance Portal
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Shape the future of Cloutverse through decentralized governance
          </p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {[
            {
              label: "Active Proposals",
              value: activeProposals,
              icon: "📜"
            },
            {
              label: "Total Votes Cast",
              value: totalVotes,
              icon: "🗳️"
            },
            {
              label: "Participation Rate",
              value: `${participation}%`,
              icon: "📊"
            }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20"
            >
              <div className="text-4xl mb-4">{stat.icon}</div>
              <div className="text-2xl font-bold mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Active Proposals */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8">Active Proposals</h2>
          <div className="space-y-4">
            {[
              {
                id: "CIP-23",
                title: "Implement Dynamic Reputation Scoring",
                status: "Active",
                votes: "1.2M",
                timeLeft: "3 days",
                support: 82
              },
              {
                id: "CIP-24",
                title: "Expand Insurance Coverage Options",
                status: "Active",
                votes: "980K",
                timeLeft: "5 days",
                support: 65
              },
              {
                id: "CIP-25",
                title: "Introduce Reputation Staking Rewards",
                status: "Active",
                votes: "750K",
                timeLeft: "7 days",
                support: 91
              }
            ].map((proposal, index) => (
              <motion.div
                key={proposal.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-sm text-purple-400">{proposal.id}</span>
                    <h3 className="text-xl font-semibold">{proposal.title}</h3>
                  </div>
                  <div className="text-right">
                    <div className="text-green-400">{proposal.status}</div>
                    <div className="text-sm text-gray-400">{proposal.timeLeft} left</div>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-400">Support</span>
                    <span className="text-purple-400">{proposal.support}%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
                      style={{ width: `${proposal.support}%` }}
                    />
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-400">{proposal.votes} votes</div>
                  <button className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                    Vote Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8">How Governance Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "1. Create Proposal",
                description: "Submit your proposal for platform improvements",
                icon: "✍️"
              },
              {
                title: "2. Community Discussion",
                description: "Engage in open debate with the community",
                icon: "💭"
              },
              {
                title: "3. Voting Period",
                description: "Cast your votes using CloutCoin tokens",
                icon: "🗳️"
              }
            ].map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20"
              >
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Get Involved</h2>
          <p className="text-gray-400 mb-8">
            Your voice matters. Join the Cloutverse DAO and help shape the future of reputation finance.
          </p>
          <div className="space-x-4">
            <button className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
              Submit Proposal
            </button>
            <button className="px-8 py-3 rounded-full bg-transparent border border-purple-500 text-white font-semibold hover:bg-purple-500/10 transition-all duration-300">
              View All Proposals
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default GovernancePage;
