'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import FAQ from '@/components/sections/FAQ';
import Newsletter from '@/components/sections/Newsletter';

const ResourcesPage = () => {
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
            Resources & Learning
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Everything you need to succeed in the reputation economy
          </p>
        </motion.div>

        {/* Resource Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "Getting Started",
              description: "Essential guides for new users",
              icon: "🚀",
              links: [
                { text: "Platform Overview", href: "/resources/overview" },
                { text: "Creating Your Token", href: "/resources/token-creation" },
                { text: "Understanding Clout Score", href: "/resources/clout-score" },
                { text: "FAQ", href: "/resources/faq" }
              ]
            },
            {
              title: "Token Management",
              description: "Optimize your token's performance",
              icon: "⚡",
              links: [
                { text: "Token Economics", href: "/resources/tokenomics" },
                { text: "Distribution Strategies", href: "/resources/distribution" },
                { text: "Community Building", href: "/resources/community" }
              ]
            },
            {
              title: "Market Analysis",
              description: "Insights and trading strategies",
              icon: "📊",
              links: [
                { text: "Market Metrics", href: "/resources/metrics" },
                { text: "Trading Basics", href: "/resources/trading" },
                { text: "Price Analysis", href: "/resources/analysis" }
              ]
            },
            {
              title: "Risk Management",
              description: "Protect and grow your value",
              icon: "🛡️",
              links: [
                { text: "Insurance Guide", href: "/resources/insurance" },
                { text: "Risk Assessment", href: "/resources/risk" },
                { text: "Security Best Practices", href: "/resources/security" }
              ]
            },
            {
              title: "Analytics & Reports",
              description: "Data-driven decision making",
              icon: "📈",
              links: [
                { text: "Performance Tracking", href: "/resources/performance" },
                { text: "Holder Analytics", href: "/resources/analytics" },
                { text: "Market Reports", href: "/resources/reports" }
              ]
            },
            {
              title: "Community",
              description: "Connect and learn from others",
              icon: "🤝",
              links: [
                { text: "Success Stories", href: "/resources/stories" },
                { text: "Discussion Forum", href: "/resources/forum" },
                { text: "Events Calendar", href: "/resources/events" }
              ]
            }
          ].map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20"
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
              <p className="text-gray-400 mb-4">{category.description}</p>
              <ul className="space-y-2">
                {category.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-purple-400 hover:text-purple-300 transition-colors duration-200"
                    >
                      {link.text} →
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <FAQ />
        </motion.div>

        {/* Featured Resources */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Featured Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Ultimate Guide to Personal Tokens",
                description: "A comprehensive guide to creating and managing your personal token",
                type: "Guide",
                readTime: "15 min read"
              },
              {
                title: "Token Distribution Masterclass",
                description: "Learn proven strategies for token distribution and community building",
                type: "Video Course",
                readTime: "1.5 hours"
              }
            ].map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">{resource.title}</h3>
                  <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-sm">
                    {resource.type}
                  </span>
                </div>
                <p className="text-gray-400 mb-4">{resource.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">{resource.readTime}</span>
                  <button className="text-purple-400 hover:text-purple-300 transition-colors duration-200">
                    Read More →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <Newsletter />
        </motion.div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mb-16 p-8 rounded-xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20"
        >
          <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-400 mb-6">
            Get the latest insights, guides, and updates delivered to your inbox
          </p>
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-l-full bg-black/50 border border-purple-500/20 focus:outline-none focus:border-purple-500"
            />
            <button className="px-6 py-2 rounded-r-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ResourcesPage;
