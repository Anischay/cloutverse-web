'use client';

import { motion } from 'framer-motion';

const features = [
  {
    title: "Clout Score",
    description: "AI-driven analysis of engagement, professional credibility, and financial history",
    icon: "🎯"
  },
  {
    title: "Reputation ETFs",
    description: "Sector-based reputation ETFs for diversified exposure to high-impact individuals",
    icon: "📈"
  },
  {
    title: "AI Analytics",
    description: "Advanced machine learning models analyze global reputation trends",
    icon: "🤖"
  },
  {
    title: "Reputation Insurance",
    description: "Coverage against reputation loss with AI-driven risk assessment",
    icon: "🛡️"
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold text-center mb-16"
        >
          The Cloutverse Ecosystem
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-lg"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
