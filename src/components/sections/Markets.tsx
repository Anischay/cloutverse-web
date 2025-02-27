'use client';

import { motion } from 'framer-motion';
import HolographicCard from '../ui/HolographicCard';
import DataStream from '../ui/DataStream';

const products = [
  {
    title: 'Reputation ETFs',
    description: 'Diversified exposure to top-ranked individuals and thematic reputation portfolios',
    features: [
      'AI-driven portfolio rebalancing',
      'Sector-specific reputation indices',
      'Automated risk management',
      'Real-time performance tracking'
    ],
    icon: '📊'
  },
  {
    title: 'Derivatives',
    description: 'Advanced financial instruments for sophisticated reputation trading',
    features: [
      'CloutCoin futures contracts',
      'Options trading',
      'Structured products',
      'Hedging solutions'
    ],
    icon: '📈'
  },
  {
    title: 'Insurance',
    description: 'Comprehensive protection for reputation-based assets',
    features: [
      'Downside protection',
      'Volatility hedging',
      'Custom coverage plans',
      'Automated claims processing'
    ],
    icon: '🛡️'
  }
];

const Markets = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <DataStream />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 gradient-text">
            Financial Markets & Products
          </h2>
          <p className="text-xl text-gray-300">
            Advanced financial instruments powered by reputation analytics
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <HolographicCard>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <span className="text-4xl">{product.icon}</span>
                    <h3 className="text-xl font-bold gradient-text">
                      {product.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-300">
                    {product.description}
                  </p>

                  <ul className="space-y-3">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-gray-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 px-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                  >
                    Learn More
                  </motion.button>
                </div>
              </HolographicCard>
            </motion.div>
          ))}
        </div>

        {/* Market Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { label: 'Total Value Locked', value: '$2.5B+' },
            { label: 'Active Traders', value: '100K+' },
            { label: 'Daily Volume', value: '$150M' },
            { label: 'Insurance Coverage', value: '$500M+' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-lg border border-white/10"
            >
              <div className="text-3xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Markets;
