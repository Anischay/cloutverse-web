'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import FAQ from '@/components/sections/FAQ';
import Newsletter from '@/components/sections/Newsletter';

const DocsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('getting-started');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredDocs, setFilteredDocs] = useState([]);

  const docSections = [
    {
      category: 'getting-started',
      label: 'Getting Started',
      icon: '🚀',
      items: [
        { title: 'Platform Overview', id: 'overview' },
        { title: 'Quick Start Guide', id: 'quickstart' },
        { title: 'Key Concepts', id: 'concepts' }
      ]
    },
    {
      category: 'clout-score',
      label: 'Clout Score',
      icon: '📊',
      items: [
        { title: 'Understanding Scores', id: 'score-basics' },
        { title: 'Score Calculation', id: 'score-calculation' },
        { title: 'Improving Your Score', id: 'score-improvement' }
      ]
    },
    {
      category: 'personal-tokens',
      label: 'Personal Tokens',
      icon: '🪙',
      items: [
        { title: 'Token Creation', id: 'token-creation' },
        { title: 'Token Economics', id: 'token-economics' },
        { title: 'Distribution Strategy', id: 'token-distribution' }
      ]
    },
    {
      category: 'trading',
      label: 'Trading',
      icon: '📈',
      items: [
        { title: 'Basic Trading', id: 'trading-basics' },
        { title: 'Advanced Orders', id: 'advanced-orders' },
        { title: 'Risk Management', id: 'risk-management' }
      ]
    },
    {
      category: 'governance',
      label: 'Governance',
      icon: '⚖️',
      items: [
        { title: 'Voting System', id: 'voting' },
        { title: 'Proposal Creation', id: 'proposals' },
        { title: 'DAO Structure', id: 'dao' }
      ]
    },
    {
      category: 'api',
      label: 'API Reference',
      icon: '🔧',
      items: [
        { title: 'Authentication', id: 'api-auth' },
        { title: 'Endpoints', id: 'api-endpoints' },
        { title: 'Rate Limits', id: 'api-limits' }
      ]
    },
    {
      category: 'faq',
      label: 'FAQ',
      icon: '❓',
      items: [
        { title: 'General Questions', id: 'faq-general' },
        { title: 'Technical Support', id: 'faq-technical' },
        { title: 'Platform Features', id: 'faq-features' }
      ]
    }
  ];

  useEffect(() => {
    if (searchQuery) {
      const filtered = docSections.flatMap(section => 
        section.items.filter(item =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          section.label.toLowerCase().includes(searchQuery.toLowerCase())
        ).map(item => ({ ...item, category: section.category, sectionLabel: section.label }))
      );
      setFilteredDocs(filtered);
    } else {
      setFilteredDocs([]);
    }
  }, [searchQuery]);

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
            Documentation
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive guides and resources for the Cloutverse platform
          </p>
        </motion.div>

        <div className="grid grid-cols-12 gap-8">
          {/* Sidebar Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="col-span-12 md:col-span-3 space-y-6"
          >
            <div className="sticky top-24">
              <div className="p-4 rounded-xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20">
                <div className="relative mb-4">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search docs..."
                    className="w-full px-4 py-2 pl-10 rounded-lg bg-black/50 border border-purple-500/20"
                  />
                  <span className="absolute left-3 top-2.5">🔍</span>
                </div>

                {searchQuery && filteredDocs.length > 0 ? (
                  <div className="mb-4 p-2 space-y-2">
                    {filteredDocs.map((doc) => (
                      <Link
                        key={doc.id}
                        href={`#${doc.id}`}
                        className="block p-2 rounded hover:bg-purple-500/20 text-gray-400 hover:text-white"
                      >
                        <div className="text-sm font-medium">{doc.title}</div>
                        <div className="text-xs text-gray-500">{doc.sectionLabel}</div>
                      </Link>
                    ))}
                  </div>
                ) : null}

                <nav className="space-y-2">
                  {docSections.map((section) => (
                    <div key={section.category}>
                      <button
                        onClick={() => setSelectedCategory(section.category)}
                        className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-200 flex items-center gap-2 ${
                          selectedCategory === section.category
                            ? 'bg-purple-500/20 text-purple-400'
                            : 'text-gray-400 hover:text-white hover:bg-purple-500/10'
                        }`}
                      >
                        <span>{section.icon}</span>
                        {section.label}
                      </button>
                      {selectedCategory === section.category && (
                        <div className="ml-4 mt-2 space-y-1">
                          {section.items.map((item) => (
                            <Link
                              key={item.id}
                              href={`#${item.id}`}
                              className="block px-4 py-1 text-sm text-gray-400 hover:text-white"
                            >
                              {item.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="col-span-12 md:col-span-9"
          >
            <div className="p-8 rounded-xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20">
              <div className="prose prose-invert max-w-none">
                {/* Version Badge */}
                <div className="flex justify-between items-center mb-8">
                  <span className="px-3 py-1 text-sm rounded-full bg-purple-500/20 text-purple-400">
                    v1.0.0
                  </span>
                  <a href="#" className="text-sm text-purple-400 hover:text-purple-300">
                    View on GitHub →
                  </a>
                </div>

                <h2 className="text-3xl font-bold mb-6" id="overview">Platform Overview</h2>
                <p className="text-gray-400 mb-6">
                  Cloutverse is a comprehensive platform that transforms digital reputation into
                  tradable financial assets. Our ecosystem enables individuals, investors, and
                  institutions to participate in the reputation economy through various financial
                  instruments and services.
                </p>

                <h3 className="text-2xl font-bold mb-4">Core Components</h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-4">
                    <div className="text-2xl">📊</div>
                    <div>
                      <h4 className="font-semibold mb-2">Clout Score™</h4>
                      <p className="text-gray-400">
                        AI-driven reputation scoring system that quantifies digital influence and
                        credibility across various platforms and metrics.
                      </p>
                      {/* Code Example */}
                      <div className="mt-4 p-4 rounded-lg bg-black/50 font-mono text-sm">
                        <div className="flex items-center justify-between text-gray-400 mb-2">
                          <span>Example API Call</span>
                          <button className="hover:text-white">Copy</button>
                        </div>
                        <code className="text-purple-400">
                          GET /api/v1/clout-score/:userId
                        </code>
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="text-2xl">🪙</div>
                    <div>
                      <h4 className="font-semibold mb-2">Personal Tokens</h4>
                      <p className="text-gray-400">
                        Create and manage your own token backed by your Clout Score™, enabling
                        monetization of your digital influence.
                      </p>
                      {/* Interactive Demo */}
                      <div className="mt-4 p-4 rounded-lg bg-purple-500/10 border border-purple-500/20">
                        <div className="flex items-center justify-between mb-4">
                          <span className="font-semibold">Token Calculator</span>
                          <span className="text-purple-400">Beta</span>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm text-gray-400">Clout Score</label>
                            <input type="number" className="w-full mt-1 px-3 py-2 rounded bg-black/50 border border-purple-500/20" placeholder="Enter score" />
                          </div>
                          <div>
                            <label className="text-sm text-gray-400">Initial Supply</label>
                            <input type="number" className="w-full mt-1 px-3 py-2 rounded bg-black/50 border border-purple-500/20" placeholder="Enter amount" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>

                <h3 className="text-2xl font-bold mb-4">Getting Started</h3>
                <div className="space-y-4 mb-8">
                  <div className="p-4 rounded-lg bg-purple-500/10 border border-purple-500/20">
                    <h4 className="font-semibold mb-2">1. Create Your Account</h4>
                    <p className="text-gray-400">
                      Sign up and complete the verification process to access all platform features.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-purple-500/10 border border-purple-500/20">
                    <h4 className="font-semibold mb-2">2. Build Your Clout Score™</h4>
                    <p className="text-gray-400">
                      Connect your social accounts and start building your reputation score.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-purple-500/10 border border-purple-500/20">
                    <h4 className="font-semibold mb-2">3. Launch Your Token</h4>
                    <p className="text-gray-400">
                      Create your personal token and define its economics and distribution strategy.
                    </p>
                  </div>
                </div>

                {/* Related Resources */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <Link href="#quickstart" className="p-4 rounded-lg bg-purple-500/10 border border-purple-500/20 hover:bg-purple-500/20 transition-all">
                    <h4 className="font-semibold mb-2">Quick Start Guide →</h4>
                    <p className="text-sm text-gray-400">Step-by-step guide to get started</p>
                  </Link>
                  <Link href="#concepts" className="p-4 rounded-lg bg-purple-500/10 border border-purple-500/20 hover:bg-purple-500/20 transition-all">
                    <h4 className="font-semibold mb-2">Key Concepts →</h4>
                    <p className="text-sm text-gray-400">Learn the fundamental concepts</p>
                  </Link>
                </div>

                <div className="p-6 rounded-xl bg-blue-900/20 border border-blue-500/20 mb-8">
                  <h4 className="text-xl font-semibold mb-2">📘 Pro Tip</h4>
                  <p className="text-gray-400">
                    Start with a small token distribution to your most engaged followers and gradually
                    expand your holder base as your Clout Score™ grows.
                  </p>
                </div>

                {/* Page Navigation */}
                <div className="flex justify-between items-center pt-8 border-t border-gray-800">
                  <Link
                    href="#introduction"
                    className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-200"
                  >
                    <span>←</span>
                    <div>
                      <div className="text-sm text-gray-400">Previous</div>
                      <div>Introduction</div>
                    </div>
                  </Link>
                  <Link
                    href="#quickstart"
                    className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-200"
                  >
                    <div className="text-right">
                      <div className="text-sm text-gray-400">Next</div>
                      <div>Quick Start Guide</div>
                    </div>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-16 mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <div className="p-8 rounded-xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20">
            <FAQ />
          </div>
        </motion.div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <div className="p-8 rounded-xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20">
            <Newsletter />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DocsPage;
