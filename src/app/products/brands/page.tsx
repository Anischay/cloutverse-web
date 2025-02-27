'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';

const BrandsPage = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);

  const [activeFeature, setActiveFeature] = useState(0);
  const [hoveredMetric, setHoveredMetric] = useState(null);

  const features = [
    {
      title: "Influencer Discovery",
      description: "AI-powered platform to find perfect brand ambassadors",
      metrics: {
        "Match Rate": "95%",
        "Time Saved": "75%",
        "ROI Increase": "45%"
      },
      icon: "🎯"
    },
    {
      title: "Campaign Management",
      description: "End-to-end campaign orchestration and tracking",
      metrics: {
        "Engagement": "+65%",
        "Conversion": "+40%",
        "Efficiency": "+80%"
      },
      icon: "📈"
    },
    {
      title: "Performance Analytics",
      description: "Real-time campaign performance and ROI tracking",
      metrics: {
        "Data Points": "1M+",
        "Accuracy": "99.9%",
        "Insights": "Real-time"
      },
      icon: "📊"
    },
    {
      title: "Brand Protection",
      description: "Reputation monitoring and crisis prevention",
      metrics: {
        "Risk Prevention": "85%",
        "Response Time": "-60%",
        "Brand Safety": "99%"
      },
      icon: "🛡️"
    }
  ];

  const successMetrics = [
    { label: "Average ROI", value: "350%", icon: "💰" },
    { label: "Brand Lift", value: "+45%", icon: "📈" },
    { label: "Engagement Rate", value: "12%", icon: "❤️" },
    { label: "Conversion Rate", value: "8.5%", icon: "🎯" }
  ];

  const brandCases = [
    {
      brand: "TechGiant Co.",
      campaign: "Innovation Series",
      results: {
        reach: "15M+",
        engagement: "25%",
        conversions: "250K"
      }
    },
    {
      brand: "EcoStyle",
      campaign: "Sustainable Living",
      results: {
        reach: "8M+",
        engagement: "18%",
        conversions: "120K"
      }
    },
    {
      brand: "FitLife",
      campaign: "Health Revolution",
      results: {
        reach: "12M+",
        engagement: "22%",
        conversions: "180K"
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
          <div className="absolute inset-0 bg-gradient-to-br from-pink-900/20 to-purple-900/20 backdrop-blur-xl" />
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
              background: "radial-gradient(circle at center, pink 0%, transparent 50%)",
              backgroundSize: "100% 100%",
            }}
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
          >
            For Brands
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
          >
            Transform your influencer marketing with AI-powered solutions
          </motion.p>
        </div>
      </motion.div>

      {/* Key Features */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">Platform Features</h2>
          <p className="text-xl text-gray-400">Comprehensive tools for modern brand marketing</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setActiveFeature(index)}
              className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                activeFeature === index
                  ? 'bg-gradient-to-br from-pink-500/30 to-purple-500/30 border-2 border-pink-500'
                  : 'bg-gradient-to-br from-pink-900/20 to-purple-900/20 border border-pink-500/20'
              }`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-400 mb-4">{feature.description}</p>
                </div>
              </div>
              <AnimatePresence>
                {activeFeature === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="grid grid-cols-3 gap-4 mt-4"
                  >
                    {Object.entries(feature.metrics).map(([key, value]) => (
                      <div
                        key={key}
                        className="p-3 rounded-lg bg-black/30 backdrop-blur-xl"
                      >
                        <div className="text-sm text-gray-400">{key}</div>
                        <div className="text-lg font-bold">{value}</div>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Success Metrics */}
      <div className="bg-gradient-to-br from-pink-900/20 to-purple-900/20 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Platform Performance</h2>
            <p className="text-xl text-gray-400">Average results across all brand campaigns</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onHoverStart={() => setHoveredMetric(index)}
                onHoverEnd={() => setHoveredMetric(null)}
                className="relative p-6 rounded-xl bg-black/50 backdrop-blur-xl border border-pink-500/20"
              >
                <motion.div
                  animate={{
                    scale: hoveredMetric === index ? 1.2 : 1,
                    y: hoveredMetric === index ? -10 : 0
                  }}
                  className="text-4xl mb-4"
                >
                  {metric.icon}
                </motion.div>
                <div className="text-2xl font-bold mb-2">{metric.value}</div>
                <div className="text-gray-400">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Case Studies */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">Success Stories</h2>
          <p className="text-xl text-gray-400">Real results from real brands</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {brandCases.map((case_, index) => (
            <motion.div
              key={case_.brand}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-xl bg-gradient-to-br from-pink-900/20 to-purple-900/20 border border-pink-500/20"
            >
              <h3 className="text-xl font-bold mb-2">{case_.brand}</h3>
              <p className="text-pink-400 mb-4">{case_.campaign}</p>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Reach</span>
                  <span className="font-bold">{case_.results.reach}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Engagement</span>
                  <span className="font-bold">{case_.results.engagement}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Conversions</span>
                  <span className="font-bold">{case_.results.conversions}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center py-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Brand?</h2>
          <p className="text-xl text-gray-400 mb-8">
            Join leading brands leveraging the power of reputation finance
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 text-white font-semibold hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300"
          >
            Schedule Demo
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default BrandsPage;
