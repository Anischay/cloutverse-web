'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';

const InvestorsPage = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);

  const [activeProduct, setActiveProduct] = useState(0);

  const products = [
    {
      title: "Reputation ETFs",
      description: "Diversified exposure to top digital influencers",
      features: [
        "Curated influencer portfolios",
        "Automated rebalancing",
        "Risk management",
        "Quarterly dividends"
      ],
      returns: "+45%",
      icon: "📈"
    },
    {
      title: "Derivatives",
      description: "Advanced trading instruments for reputation assets",
      features: [
        "Futures contracts",
        "Options trading",
        "Leverage trading",
        "Risk hedging"
      ],
      returns: "+65%",
      icon: "💹"
    },
    {
      title: "Staking Pools",
      description: "Earn passive income from reputation staking",
      features: [
        "High APY returns",
        "Flexible lock periods",
        "Compound interest",
        "Auto-reinvestment"
      ],
      returns: "+25%",
      icon: "🏦"
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
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-xl" />
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
            className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent"
          >
            For Investors
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
          >
            Unlock the potential of reputation-based financial instruments
          </motion.p>
        </div>
      </motion.div>

      {/* Investment Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">Investment Products</h2>
          <p className="text-xl text-gray-400">Diverse options for every investment strategy</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                activeProduct === index
                  ? 'bg-gradient-to-br from-purple-500/30 to-blue-500/30 border-2 border-purple-500'
                  : 'bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20'
              }`}
              onClick={() => setActiveProduct(index)}
            >
              <div className="flex justify-between items-center mb-4">
                <div className="text-4xl">{product.icon}</div>
                <div className="text-green-400 font-bold">{product.returns} YTD</div>
              </div>
              <h3 className="text-xl font-bold mb-2">{product.title}</h3>
              <p className="text-gray-400 mb-4">{product.description}</p>
              <ul className="space-y-2">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-300">
                    <span className="mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Market Analysis */}
      <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Market Analysis</h2>
            <p className="text-xl text-gray-400">Real-time insights into the reputation economy</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Market Overview",
                stats: [
                  { label: "Total Market Cap", value: "$8.5B" },
                  { label: "24h Volume", value: "$1.2B" },
                  { label: "Active Traders", value: "125K" }
                ]
              },
              {
                title: "Top Performing Sectors",
                stats: [
                  { label: "Tech Influencers", value: "+85%" },
                  { label: "Finance Creators", value: "+65%" },
                  { label: "Gaming Stars", value: "+45%" }
                ]
              }
            ].map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-black/50 backdrop-blur-xl border border-purple-500/20"
              >
                <h3 className="text-xl font-bold mb-6">{section.title}</h3>
                <div className="space-y-4">
                  {section.stats.map((stat) => (
                    <div key={stat.label} className="flex justify-between items-center">
                      <span className="text-gray-400">{stat.label}</span>
                      <span className="text-xl font-bold">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Trading Tools */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">Advanced Trading Tools</h2>
          <p className="text-xl text-gray-400 mb-12">Professional-grade tools for serious investors</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "AI Analytics",
                description: "Predictive analytics for reputation trends",
                icon: "🤖"
              },
              {
                title: "Portfolio Management",
                description: "Advanced portfolio tracking and optimization",
                icon: "📊"
              },
              {
                title: "Risk Management",
                description: "Sophisticated risk assessment tools",
                icon: "🛡️"
              }
            ].map((tool, index) => (
              <motion.div
                key={tool.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20"
              >
                <div className="text-4xl mb-4">{tool.icon}</div>
                <h3 className="text-xl font-bold mb-2">{tool.title}</h3>
                <p className="text-gray-400">{tool.description}</p>
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
          <button className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
            Start Trading
          </button>
          <p className="mt-4 text-gray-400">
            Get access to professional trading tools and start investing in the reputation economy
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default InvestorsPage;
