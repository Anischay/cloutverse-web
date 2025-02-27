'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const AnalyticsDashboard = () => {
  const [activeMetric, setActiveMetric] = useState('reputation');
  const [timeframe, setTimeframe] = useState('1M');

  const metrics = {
    reputation: {
      current: 856,
      change: +12.5,
      unit: 'points',
      description: 'Your overall reputation score out of 1000',
      history: [650, 720, 680, 750, 790, 810, 856],
      factors: [
        { name: 'Social Impact', value: 92, trend: 'rising', details: 'High community engagement and positive sentiment', unit: '%' },
        { name: 'Content Quality', value: 88, trend: 'stable', details: 'Consistent high-quality contributions', unit: '%' },
        { name: 'Network Growth', value: 76, trend: 'rising', details: 'Growing connections with key influencers', unit: '%' },
        { name: 'Engagement', value: 94, trend: 'rising', details: 'Strong interaction with community initiatives', unit: '%' }
      ],
      insights: [
        { type: 'success', message: 'Your reputation score is in the top 5% of all users' },
        { type: 'info', message: 'Recent community contributions boosted score by 8%' },
        { type: 'tip', message: 'Participate in governance to further increase impact' }
      ]
    },
    market: {
      current: 25600,
      change: +8.3,
      unit: 'USDC',
      description: 'Total value of your reputation tokens',
      history: [18000, 20000, 19500, 22000, 23500, 24800, 25600],
      factors: [
        { name: 'Trading Volume', value: 85, trend: 'rising', details: 'Daily trading volume: 125K USDC', unit: '%' },
        { name: 'Buy Pressure', value: 78, trend: 'rising', details: 'Net buy orders: +15K USDC/day', unit: '%' },
        { name: 'Holder Diversity', value: 92, trend: 'stable', details: '2,500+ unique token holders', unit: '%' },
        { name: 'Market Cap', value: 88, trend: 'rising', details: 'Total market cap: 2.5M USDC', unit: '%' }
      ],
      insights: [
        { type: 'success', message: 'Market cap reached new ATH this month' },
        { type: 'info', message: 'Institutional holding increased by 15%' },
        { type: 'tip', message: 'Consider staking to earn additional rewards' }
      ]
    },
    network: {
      current: 12500,
      change: +15.7,
      unit: 'nodes',
      description: 'Active nodes in your reputation network',
      history: [8000, 9200, 9800, 10500, 11200, 11800, 12500],
      factors: [
        { name: 'Node Count', value: 95, trend: 'rising', details: '12,500 active validator nodes', unit: '%' },
        { name: 'Trust Score', value: 89, trend: 'stable', details: '99.9% network uptime', unit: '%' },
        { name: 'Activity', value: 82, trend: 'rising', details: '50K+ daily transactions', unit: '%' },
        { name: 'Growth Rate', value: 91, trend: 'rising', details: '+1,200 new nodes this month', unit: '%' }
      ],
      insights: [
        { type: 'success', message: 'Network reached 12,500 active nodes' },
        { type: 'info', message: 'Protocol upgrade increased efficiency by 25%' },
        { type: 'tip', message: 'Run a validator node to earn more rewards' }
      ]
    }
  };

  const timeframes = ['1D', '1W', '1M', '3M', '1Y', 'ALL'];

  const getGradient = (type: string) => {
    switch(type) {
      case 'reputation':
        return 'from-violet-500 to-fuchsia-500';
      case 'market':
        return 'from-fuchsia-500 to-cyan-500';
      case 'network':
        return 'from-cyan-500 to-violet-500';
      default:
        return 'from-violet-500 to-fuchsia-500';
    }
  };

  const getTrendIcon = (trend: string) => {
    switch(trend) {
      case 'rising':
        return '↗';
      case 'falling':
        return '↘';
      default:
        return '→';
    }
  };

  const getInsightColor = (type: string) => {
    switch(type) {
      case 'success':
        return 'text-emerald-400';
      case 'info':
        return 'text-blue-400';
      case 'tip':
        return 'text-amber-400';
      default:
        return 'text-gray-400';
    }
  };

  return (
    <div className="h-screen overflow-y-auto">
      <div className="w-full bg-gradient-to-br from-gray-900 to-black text-white p-6 rounded-xl">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Panel - Metrics Overview */}
          <div className="lg:w-2/3 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                Analytics Dashboard
              </h2>
              <div className="flex gap-2">
                {timeframes.map((t) => (
                  <button
                    key={t}
                    onClick={() => setTimeframe(t)}
                    className={`px-3 py-1 rounded-full text-sm ${
                      timeframe === t
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {Object.entries(metrics).map(([key, data]) => (
                <motion.div
                  key={key}
                  whileHover={{ scale: 1.02 }}
                  className={`p-4 rounded-xl cursor-pointer ${
                    activeMetric === key
                      ? 'bg-blue-600 bg-opacity-20 border border-blue-500'
                      : 'bg-gray-800 hover:bg-gray-700'
                  }`}
                  onClick={() => setActiveMetric(key)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400 capitalize">{key}</span>
                    <span className={`text-sm ${data.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                      {data.change >= 0 ? '+' : ''}{data.change}%
                    </span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold">{data.current.toLocaleString()}</span>
                    <span className="text-sm text-gray-400">{data.unit}</span>
                  </div>
                  <p className="text-sm text-gray-400 mt-1">{data.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Factor Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-6">
              {metrics[activeMetric as keyof typeof metrics].factors.map((factor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-800 p-4 rounded-xl"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">{factor.name}</span>
                    <span className={`text-sm px-2 py-1 rounded-full ${
                      factor.trend === 'rising' ? 'bg-green-900 text-green-400' :
                      factor.trend === 'falling' ? 'bg-red-900 text-red-400' :
                      'bg-gray-700 text-gray-400'
                    }`}>
                      {factor.value}{factor.unit} {getTrendIcon(factor.trend)}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400">{factor.details}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Panel - Insights */}
          <div className="lg:w-1/3 bg-gray-800 bg-opacity-50 p-6 rounded-xl h-fit">
            <h3 className="text-xl font-semibold mb-4">Key Insights</h3>
            <div className="space-y-4">
              {metrics[activeMetric as keyof typeof metrics].insights.map((insight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-4 rounded-xl ${
                    insight.type === 'success' ? 'bg-green-900 bg-opacity-20 border border-green-700' :
                    insight.type === 'info' ? 'bg-blue-900 bg-opacity-20 border border-blue-700' :
                    'bg-purple-900 bg-opacity-20 border border-purple-700'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span className={`text-2xl ${
                      insight.type === 'success' ? 'text-green-400' :
                      insight.type === 'info' ? 'text-blue-400' :
                      'text-purple-400'
                    }`}>
                      {insight.type === 'success' ? '🎯' :
                       insight.type === 'info' ? 'ℹ️' : '💡'}
                    </span>
                    <p className="text-sm">{insight.message}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
