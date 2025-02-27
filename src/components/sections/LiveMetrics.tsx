'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function LiveMetrics() {
  // Simulated live data
  const [metrics, setMetrics] = useState({
    tvl: 2.5,
    transactions: 1234,
    activeUsers: 98765,
    avgReputationScore: 85
  });

  // Simulate live updates
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        tvl: prev.tvl + (Math.random() * 0.1 - 0.05),
        transactions: prev.transactions + Math.floor(Math.random() * 10),
        activeUsers: prev.activeUsers + Math.floor(Math.random() * 5),
        avgReputationScore: Math.min(100, prev.avgReputationScore + (Math.random() * 0.4 - 0.2))
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
            Live Platform Metrics
          </h2>
          <p className="text-xl text-gray-400">
            Real-time insights into the Cloutverse ecosystem
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              label: "Total Value Locked",
              value: `$${metrics.tvl.toFixed(2)}B`,
              change: "+12.5%",
              positive: true
            },
            {
              label: "24h Transactions",
              value: metrics.transactions.toLocaleString(),
              change: "+8.3%",
              positive: true
            },
            {
              label: "Active Users",
              value: metrics.activeUsers.toLocaleString(),
              change: "+15.7%",
              positive: true
            },
            {
              label: "Avg Reputation Score",
              value: metrics.avgReputationScore.toFixed(1),
              change: "+5.2%",
              positive: true
            }
          ].map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20"
            >
              <div className="text-sm text-gray-400 mb-2">{metric.label}</div>
              <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {metric.value}
              </div>
              <div className={`text-sm ${metric.positive ? 'text-green-400' : 'text-red-400'}`}>
                {metric.change} (24h)
              </div>
              
              {/* Animated bar */}
              <div className="mt-4 h-1 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8">Recent Activity</h3>
          <div className="space-y-4">
            {[
              {
                type: "Token Creation",
                user: "0x1234...5678",
                value: "$50,000",
                time: "2 mins ago"
              },
              {
                type: "Insurance Claim",
                user: "0x8765...4321",
                value: "$15,000",
                time: "5 mins ago"
              },
              {
                type: "Reputation Transfer",
                user: "0x4321...8765",
                value: "85 points",
                time: "8 mins ago"
              }
            ].map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-300"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-purple-400">{activity.type}</span>
                    <span className="text-gray-400 mx-2">by</span>
                    <span className="text-blue-400">{activity.user}</span>
                  </div>
                  <div>
                    <span className="text-pink-400 mr-4">{activity.value}</span>
                    <span className="text-gray-500">{activity.time}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
