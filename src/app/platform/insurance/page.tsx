'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const InsurancePage = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

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
            Reputation Insurance
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Protect your digital reputation with the world's first blockchain-based reputation insurance
          </p>
        </motion.div>

        {/* Key Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {[
            {
              title: "24/7 Monitoring",
              description: "AI-powered reputation monitoring across all major platforms",
              icon: "👁️"
            },
            {
              title: "Instant Claims",
              description: "Smart contract-based claims processing with instant payouts",
              icon: "⚡"
            },
            {
              title: "Crisis Management",
              description: "Expert team ready to handle reputation emergencies",
              icon: "🛡️"
            }
          ].map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Insurance Plans */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Coverage Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Basic Protection",
                price: "99",
                features: [
                  "Basic reputation monitoring",
                  "Up to $10,000 coverage",
                  "24/7 alert system",
                  "Email support"
                ]
              },
              {
                name: "Premium Shield",
                price: "299",
                features: [
                  "Advanced reputation monitoring",
                  "Up to $100,000 coverage",
                  "Crisis management team",
                  "Priority support",
                  "Preventive consulting"
                ],
                popular: true
              },
              {
                name: "Enterprise Guard",
                price: "Custom",
                features: [
                  "Enterprise-grade monitoring",
                  "Custom coverage limit",
                  "Dedicated crisis team",
                  "24/7 direct line",
                  "Regular reputation audits",
                  "Custom solutions"
                ]
              }
            ].map((plan) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-6 rounded-xl relative ${
                  plan.popular
                    ? 'bg-gradient-to-br from-purple-500/20 to-blue-500/20 border-2 border-purple-500'
                    : 'bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-xl font-bold mb-4">{plan.name}</div>
                <div className="mb-6">
                  <span className="text-3xl font-bold">${plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-gray-400">/month</span>}
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-300">
                      <span className="mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setSelectedPlan(plan.name)}
                  className={`w-full py-3 rounded-full ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500'
                      : 'bg-gradient-to-r from-purple-900 to-blue-900 border border-purple-500'
                  } text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300`}
                >
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Coverage Details */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8">What's Covered</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Social Media Attacks",
                description: "Protection against coordinated attacks and false narratives"
              },
              {
                title: "Data Breaches",
                description: "Coverage for reputation damage from data leaks"
              },
              {
                title: "Negative Press",
                description: "Support in handling negative media coverage"
              },
              {
                title: "Identity Theft",
                description: "Protection against impersonation and identity theft"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20"
              >
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Protect Your Digital Reputation Today</h2>
          <p className="text-gray-400 mb-8">
            Don't wait for a crisis. Get comprehensive reputation insurance now.
          </p>
          <button className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
            Schedule a Consultation
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default InsurancePage;
