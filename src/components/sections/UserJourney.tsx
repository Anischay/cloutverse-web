'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import HolographicCard from '../ui/HolographicCard';

const userTypes = [
  {
    title: 'Individuals',
    icon: '👤',
    description: 'Influencers, Creators, and Professionals',
    journey: [
      'Create Clout ID & Verification',
      'Track Reputation Score',
      'Manage CloutCoin Assets',
      'Access Financial Services',
      'Participate in Governance',
      'Secure Reputation Insurance'
    ]
  },
  {
    title: 'Retail Investors',
    icon: '📈',
    description: 'Traders and Investment Enthusiasts',
    journey: [
      'Market Analysis & Research',
      'CloutCoin Trading',
      'Portfolio Management',
      'ETF Investment',
      'Risk Management',
      'Insurance Coverage'
    ]
  },
  {
    title: 'Institutions',
    icon: '🏢',
    description: 'Funds, Banks, and Financial Organizations',
    journey: [
      'Due Diligence & Analysis',
      'Strategic Investment',
      'Liquidity Provision',
      'Risk Management',
      'Governance Participation',
      'Insurance Solutions'
    ]
  },
  {
    title: 'Brands',
    icon: '🎯',
    description: 'Advertisers and Marketing Teams',
    journey: [
      'Influencer Analysis',
      'Reputation-Backed Sponsorships',
      'Campaign Optimization',
      'Brand Collaborations',
      'Ad Model Integration',
      'Risk Mitigation'
    ]
  }
];

const UserJourney = () => {
  const [activeType, setActiveType] = useState(userTypes[0]);

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 gradient-text">
            Your Journey on Cloutverse
          </h2>
          <p className="text-xl text-gray-300">
            Discover how Cloutverse empowers different user types with tailored solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* User Type Selection */}
          <div className="space-y-4">
            {userTypes.map((type) => (
              <motion.div
                key={type.title}
                className={`p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                  activeType.title === type.title
                    ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/50'
                    : 'hover:bg-white/5'
                }`}
                onClick={() => setActiveType(type)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center gap-4">
                  <span className="text-3xl">{type.icon}</span>
                  <div>
                    <h3 className="font-semibold text-white">{type.title}</h3>
                    <p className="text-sm text-gray-400">{type.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Journey Visualization */}
          <div className="lg:col-span-2">
            <HolographicCard className="h-full">
              <div className="space-y-8">
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-4xl">{activeType.icon}</span>
                  <div>
                    <h3 className="text-2xl font-bold gradient-text">
                      {activeType.title} Journey
                    </h3>
                    <p className="text-gray-400">{activeType.description}</p>
                  </div>
                </div>

                <div className="grid gap-4">
                  {activeType.journey.map((step, index) => (
                    <motion.div
                      key={step}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-4"
                    >
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <div className="flex-1 p-4 rounded-lg bg-white/5">
                        {step}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </HolographicCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserJourney;
