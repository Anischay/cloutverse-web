'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const APIPage = () => {
  const [selectedTab, setSelectedTab] = useState('rest');
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');

  const codeExamples = {
    javascript: `// Initialize Cloutverse SDK
const cloutverse = new Cloutverse({
  apiKey: 'your_api_key',
  environment: 'mainnet'
});

// Get Clout Score
const score = await cloutverse.getCloutScore('user_id');

// Create Personal Token
const token = await cloutverse.createToken({
  name: 'My Token',
  symbol: 'MTK',
  supply: 1000000
});

// Get Market Data
const market = await cloutverse.getMarketData('token_id');`,

    python: `# Initialize Cloutverse SDK
cloutverse = Cloutverse(
    api_key='your_api_key',
    environment='mainnet'
)

# Get Clout Score
score = cloutverse.get_clout_score('user_id')

# Create Personal Token
token = cloutverse.create_token(
    name='My Token',
    symbol='MTK',
    supply=1000000
)

# Get Market Data
market = cloutverse.get_market_data('token_id')`,

    rust: `// Initialize Cloutverse SDK
let cloutverse = Cloutverse::new(
    "your_api_key",
    Environment::Mainnet,
);

// Get Clout Score
let score = cloutverse.get_clout_score("user_id").await?;

// Create Personal Token
let token = cloutverse.create_token(TokenParams {
    name: "My Token",
    symbol: "MTK",
    supply: 1000000,
})?;

// Get Market Data
let market = cloutverse.get_market_data("token_id").await?;`
  };

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
            API & SDK
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Build powerful applications on top of the Cloutverse platform
          </p>
        </motion.div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {[
            { title: "API Reference", icon: "📚", link: "#reference" },
            { title: "SDK Downloads", icon: "⚡", link: "#sdk" },
            { title: "Example Projects", icon: "💡", link: "#examples" },
            { title: "Support", icon: "🤝", link: "#support" }
          ].map((item, index) => (
            <motion.a
              key={item.title}
              href={item.link}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
            </motion.a>
          ))}
        </div>

        {/* API/SDK Tabs */}
        <div className="flex space-x-4 mb-8">
          {['rest', 'graphql', 'websocket'].map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`px-4 py-2 rounded-lg capitalize ${
                selectedTab === tab
                  ? 'bg-purple-500/20 text-purple-400'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Code Examples */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-16"
        >
          <div className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20">
            {/* Language Selection */}
            <div className="flex space-x-4 mb-6">
              {['javascript', 'python', 'rust'].map((lang) => (
                <button
                  key={lang}
                  onClick={() => setSelectedLanguage(lang)}
                  className={`px-4 py-2 rounded-lg capitalize ${
                    selectedLanguage === lang
                      ? 'bg-purple-500/20 text-purple-400'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>

            {/* Code Block */}
            <div className="bg-black/50 rounded-lg p-6 overflow-x-auto">
              <pre className="text-gray-300">
                <code>{codeExamples[selectedLanguage]}</code>
              </pre>
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "RESTful API",
              description: "Full-featured REST API with comprehensive documentation",
              features: ["HTTPS endpoints", "JSON responses", "Rate limiting", "Authentication"]
            },
            {
              title: "GraphQL API",
              description: "Flexible queries and real-time subscriptions",
              features: ["Custom queries", "Type safety", "Nested resolvers", "Mutations"]
            },
            {
              title: "WebSocket API",
              description: "Real-time market data and updates",
              features: ["Live price feeds", "Order book updates", "Trade notifications", "Custom events"]
            }
          ].map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20"
            >
              <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
              <p className="text-gray-400 mb-4">{section.description}</p>
              <ul className="space-y-2">
                {section.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-purple-400">•</span>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* SDK Versions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-6">Available SDKs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                language: "JavaScript",
                version: "v2.1.0",
                install: "npm install @cloutverse/sdk",
                features: ["Node.js & Browser support", "TypeScript definitions", "Promise-based API"]
              },
              {
                language: "Python",
                version: "v2.0.1",
                install: "pip install cloutverse-sdk",
                features: ["Async support", "Type hints", "Context managers"]
              },
              {
                language: "Rust",
                version: "v1.2.0",
                install: "cargo add cloutverse",
                features: ["Async/await", "Strong typing", "Zero-cost abstractions"]
              },
              {
                language: "Go",
                version: "v1.1.0",
                install: "go get github.com/cloutverse/sdk",
                features: ["Goroutine-safe", "Context support", "Interface-based design"]
              }
            ].map((sdk, index) => (
              <motion.div
                key={sdk.language}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">{sdk.language}</h3>
                  <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-sm">
                    {sdk.version}
                  </span>
                </div>
                <div className="bg-black/30 p-3 rounded-lg mb-4 font-mono text-sm">
                  {sdk.install}
                </div>
                <ul className="space-y-2">
                  {sdk.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <span className="text-purple-400">•</span>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Support Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center p-8 rounded-xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20"
        >
          <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
          <p className="text-gray-400 mb-6">
            Join our developer community for support, discussions, and collaboration
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-6 py-2 rounded-lg bg-purple-500/20 text-purple-400 hover:bg-purple-500/30 transition-all duration-200">
              Join Discord
            </button>
            <button className="px-6 py-2 rounded-lg bg-purple-500/20 text-purple-400 hover:bg-purple-500/30 transition-all duration-200">
              Read Docs
            </button>
            <button className="px-6 py-2 rounded-lg bg-purple-500/20 text-purple-400 hover:bg-purple-500/30 transition-all duration-200">
              GitHub
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default APIPage;
