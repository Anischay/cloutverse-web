'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';

const InstitutionsPage = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);

  const [activeTab, setActiveTab] = useState('analytics');
  const [selectedCase, setSelectedCase] = useState(null);

  const solutions = {
    analytics: {
      title: "Enterprise Analytics",
      description: "Comprehensive reputation intelligence for institutions",
      features: [
        {
          title: "Real-time Monitoring",
          description: "24/7 reputation tracking across all digital channels",
          icon: "📊"
        },
        {
          title: "Risk Assessment",
          description: "AI-powered risk detection and mitigation",
          icon: "🛡️"
        },
        {
          title: "Market Intelligence",
          description: "Competitive analysis and market trends",
          icon: "🔍"
        },
        {
          title: "Custom Reports",
          description: "Tailored analytics and insights delivery",
          icon: "📈"
        }
      ]
    },
    trading: {
      title: "Institutional Trading",
      description: "Advanced trading infrastructure for large-scale operations",
      features: [
        {
          title: "High-Frequency Trading",
          description: "Low-latency execution for reputation assets",
          icon: "⚡"
        },
        {
          title: "Dark Pool",
          description: "Private liquidity pool for large transactions",
          icon: "🌊"
        },
        {
          title: "Smart Order Routing",
          description: "Optimal execution across multiple venues",
          icon: "🔄"
        },
        {
          title: "Risk Management",
          description: "Advanced risk controls and monitoring",
          icon: "🎯"
        }
      ]
    },
    compliance: {
      title: "Compliance Suite",
      description: "Comprehensive compliance and regulatory solutions",
      features: [
        {
          title: "Regulatory Reporting",
          description: "Automated compliance reporting",
          icon: "📋"
        },
        {
          title: "KYC/AML",
          description: "Advanced identity verification",
          icon: "🔐"
        },
        {
          title: "Audit Trail",
          description: "Complete transaction history",
          icon: "📝"
        },
        {
          title: "Policy Management",
          description: "Customizable compliance rules",
          icon: "📜"
        }
      ]
    }
  };

  const caseStudies = [
    {
      title: "Global Investment Bank",
      result: "+45% Efficiency",
      description: "Implemented reputation trading desk with advanced analytics",
      metrics: {
        "Trading Volume": "$2.5B",
        "Cost Reduction": "35%",
        "Risk Incidents": "-60%"
      }
    },
    {
      title: "Asset Management Firm",
      result: "+80% ROI",
      description: "Leveraged reputation data for portfolio optimization",
      metrics: {
        "AUM Growth": "$1.8B",
        "Performance": "+25%",
        "Client Satisfaction": "95%"
      }
    },
    {
      title: "Insurance Corporation",
      result: "-40% Risk",
      description: "Enhanced risk assessment with reputation analytics",
      metrics: {
        "Claims Reduction": "45%",
        "Premium Growth": "+30%",
        "Market Share": "+15%"
      }
    }
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-black text-white">
      {/* Parallax Hero Section */}
      <motion.div
        style={{ y, opacity }}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-xl" />
          <motion.div
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute inset-0 opacity-30"
            style={{
              background: "radial-gradient(circle at center, blue 0%, transparent 50%)",
              backgroundSize: "100% 100%",
            }}
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-500 bg-clip-text text-transparent"
          >
            For Institutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
          >
            Enterprise-grade solutions for institutional reputation management
          </motion.p>
        </div>
      </motion.div>

      {/* Solutions Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">Enterprise Solutions</h2>
          <div className="flex justify-center space-x-4 mb-12">
            {Object.keys(solutions).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {solutions[activeTab].features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Case Studies */}
      <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Success Stories</h2>
            <p className="text-xl text-gray-400">See how institutions are transforming with Cloutverse</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedCase(selectedCase === study ? null : study)}
                className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                  selectedCase === study
                    ? 'bg-gradient-to-br from-blue-500/30 to-purple-500/30 border-2 border-blue-500'
                    : 'bg-black/50 backdrop-blur-xl border border-blue-500/20'
                }`}
              >
                <div className="text-2xl font-bold mb-2">{study.title}</div>
                <div className="text-green-400 text-xl font-bold mb-4">{study.result}</div>
                <p className="text-gray-400 mb-4">{study.description}</p>
                <AnimatePresence>
                  {selectedCase === study && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-2"
                    >
                      {Object.entries(study.metrics).map(([key, value]) => (
                        <div key={key} className="flex justify-between">
                          <span className="text-gray-400">{key}</span>
                          <span className="font-bold">{value}</span>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Integration Process */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">Integration Process</h2>
          <p className="text-xl text-gray-400 mb-12">Seamless enterprise integration in four steps</p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Assessment",
                description: "Custom needs analysis and solution design"
              },
              {
                step: "2",
                title: "Integration",
                description: "Technical integration and system setup"
              },
              {
                step: "3",
                title: "Training",
                description: "Staff training and onboarding"
              },
              {
                step: "4",
                title: "Support",
                description: "24/7 enterprise support and maintenance"
              }
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold">
                    {step.step}
                  </span>
                </div>
                <div className="pt-8 p-6 rounded-xl bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/20">
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
            Schedule Consultation
          </button>
          <p className="mt-4 text-gray-400">
            Get a customized solution for your institution
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default InstitutionsPage;
