'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const GovernancePortalPage = () => {
  const [selectedTab, setSelectedTab] = useState('active');

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
            Governance Portal
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Shape the future of Cloutverse through community-driven decision making
          </p>
        </motion.div>

        {/* Governance Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { label: "Active Proposals", value: "12", change: "+3 this week" },
            { label: "Total Votes Cast", value: "45.2K", change: "+2.4K today" },
            { label: "Voter Participation", value: "78%", change: "+5% avg" },
            { label: "Your Voting Power", value: "1,234", change: "Based on CLOUT holdings" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20"
            >
              <div className="text-gray-400 mb-2">{stat.label}</div>
              <div className="text-2xl font-bold mb-2">{stat.value}</div>
              <div className="text-purple-400 text-sm">{stat.change}</div>
            </motion.div>
          ))}
        </div>

        {/* Proposal Tabs */}
        <div className="flex space-x-4 mb-8">
          {['active', 'passed', 'failed', 'draft'].map((tab) => (
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

        {/* Proposals List */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-6 mb-16"
        >
          {[
            {
              id: "CLOUT-1",
              title: "Implement Token Burning Mechanism",
              description: "Proposal to implement a 1% token burn on all transactions to create deflationary pressure",
              status: "active",
              votes: { for: 65, against: 35 },
              timeLeft: "2 days"
            },
            {
              id: "CLOUT-2",
              title: "Expand Insurance Coverage",
              description: "Add coverage for social media account compromises in the insurance protocol",
              status: "active",
              votes: { for: 78, against: 22 },
              timeLeft: "5 days"
            },
            {
              id: "CLOUT-3",
              title: "Introduce Staking Rewards",
              description: "Implement staking rewards for long-term token holders",
              status: "active",
              votes: { for: 92, against: 8 },
              timeLeft: "1 day"
            }
          ].map((proposal, index) => (
            <motion.div
              key={proposal.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-gray-400">{proposal.id}</span>
                    <h3 className="text-xl font-semibold">{proposal.title}</h3>
                  </div>
                  <p className="text-gray-400 mt-2">{proposal.description}</p>
                </div>
                <div className="text-sm text-purple-400">{proposal.timeLeft} left</div>
              </div>

              <div className="space-y-4">
                {/* Progress Bar */}
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-green-400">{proposal.votes.for}% For</span>
                    <span className="text-red-400">{proposal.votes.against}% Against</span>
                  </div>
                  <div className="h-2 rounded-full bg-gray-800 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-green-500 to-green-400"
                      style={{ width: `${proposal.votes.for}%` }}
                    />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <button className="flex-1 px-4 py-2 rounded-lg bg-green-500/20 text-green-400 hover:bg-green-500/30 transition-all duration-200">
                    Vote For
                  </button>
                  <button className="flex-1 px-4 py-2 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-all duration-200">
                    Vote Against
                  </button>
                  <button className="px-4 py-2 rounded-lg bg-purple-500/20 text-purple-400 hover:bg-purple-500/30 transition-all duration-200">
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Create Proposal CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mb-16"
        >
          <button className="px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
            Create New Proposal
          </button>
        </motion.div>

        {/* Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "How Voting Works",
              description: "Your voting power is determined by your CLOUT holdings. 1 CLOUT = 1 Vote",
              icon: "🗳️"
            },
            {
              title: "Proposal Guidelines",
              description: "Learn how to create effective proposals that align with community goals",
              icon: "📋"
            },
            {
              title: "Execution Process",
              description: "Understand how passed proposals are implemented in the protocol",
              icon: "⚙️"
            }
          ].map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20"
            >
              <div className="text-4xl mb-4">{card.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-400">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GovernancePortalPage;
