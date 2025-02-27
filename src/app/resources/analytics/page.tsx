'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const ResourceAnalyticsPage = () => {
  const [selectedMetric, setSelectedMetric] = useState('reputation');

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
            Analytics Dashboard
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive insights into your reputation assets and market performance
          </p>
        </motion.div>

        {/* Metrics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { label: "Clout Score™", value: "785", change: "+12" },
            { label: "Token Price", value: "$1.24", change: "+5.2%" },
            { label: "Holders", value: "1,234", change: "+45" },
            { label: "Market Cap", value: "$620K", change: "+8.4%" }
          ].map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20"
            >
              <div className="text-gray-400 mb-2">{metric.label}</div>
              <div className="text-2xl font-bold mb-2">{metric.value}</div>
              <div className="text-green-400">{metric.change}</div>
            </motion.div>
          ))}
        </div>

        {/* Main Dashboard */}
        <div className="grid grid-cols-12 gap-8 mb-8">
          {/* Sidebar Controls */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="col-span-12 md:col-span-3 space-y-6"
          >
            <div className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20">
              <h3 className="text-xl font-semibold mb-4">Metrics</h3>
              <div className="space-y-2">
                {[
                  { id: 'reputation', label: 'Reputation Growth' },
                  { id: 'token', label: 'Token Performance' },
                  { id: 'community', label: 'Community Engagement' },
                  { id: 'market', label: 'Market Activity' }
                ].map((metric) => (
                  <button
                    key={metric.id}
                    onClick={() => setSelectedMetric(metric.id)}
                    className={`w-full px-4 py-2 rounded-lg text-left ${
                      selectedMetric === metric.id
                        ? 'bg-purple-500/20 text-purple-400'
                        : 'text-gray-400 hover:text-white hover:bg-purple-500/10'
                    }`}
                  >
                    {metric.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20">
              <h3 className="text-xl font-semibold mb-4">Filters</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-400 mb-2">Time Range</label>
                  <select className="w-full px-4 py-2 rounded-lg bg-black/50 border border-purple-500/20">
                    <option>Last 24 hours</option>
                    <option>Last 7 days</option>
                    <option>Last 30 days</option>
                    <option>Last 90 days</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-400 mb-2">Data Source</label>
                  <select className="w-full px-4 py-2 rounded-lg bg-black/50 border border-purple-500/20">
                    <option>All Sources</option>
                    <option>Social Media</option>
                    <option>Trading Activity</option>
                    <option>Community Events</option>
                  </select>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Main Charts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="col-span-12 md:col-span-9 space-y-6"
          >
            {/* Primary Chart */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20">
              <h3 className="text-xl font-semibold mb-4">Performance Overview</h3>
              <div className="h-80 rounded-lg bg-black/30 border border-purple-500/10 flex items-center justify-center">
                <p className="text-gray-400">Interactive Chart Component</p>
              </div>
            </div>

            {/* Secondary Charts */}
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20">
                <h3 className="text-xl font-semibold mb-4">Holder Distribution</h3>
                <div className="h-48 rounded-lg bg-black/30 border border-purple-500/10 flex items-center justify-center">
                  <p className="text-gray-400">Pie Chart Component</p>
                </div>
              </div>
              <div className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20">
                <h3 className="text-xl font-semibold mb-4">Trading Volume</h3>
                <div className="h-48 rounded-lg bg-black/30 border border-purple-500/10 flex items-center justify-center">
                  <p className="text-gray-400">Bar Chart Component</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Detailed Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Recent Activity */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20">
            <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
            <div className="space-y-4">
              {[
                { action: "New Holder", details: "John D. acquired 500 tokens", time: "5m ago" },
                { action: "Price Change", details: "Token price increased by 2.5%", time: "15m ago" },
                { action: "Score Update", details: "Clout Score™ increased by 5 points", time: "1h ago" }
              ].map((activity, index) => (
                <div
                  key={index}
                  className="flex items-start justify-between p-3 rounded-lg bg-black/30"
                >
                  <div>
                    <div className="font-semibold">{activity.action}</div>
                    <div className="text-gray-400 text-sm">{activity.details}</div>
                  </div>
                  <div className="text-gray-500 text-sm">{activity.time}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Insights */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20">
            <h3 className="text-xl font-semibold mb-4">AI Insights</h3>
            <div className="space-y-4">
              {[
                {
                  title: "Growth Trend",
                  insight: "Your token shows strong organic growth with increasing holder retention",
                  action: "Consider launching a community rewards program"
                },
                {
                  title: "Market Sentiment",
                  insight: "Positive sentiment across social channels indicates growing interest",
                  action: "Leverage momentum with increased content creation"
                }
              ].map((insight, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-black/30"
                >
                  <div className="font-semibold mb-2">{insight.title}</div>
                  <p className="text-gray-400 text-sm mb-2">{insight.insight}</p>
                  <p className="text-purple-400 text-sm">Recommendation: {insight.action}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ResourceAnalyticsPage;
