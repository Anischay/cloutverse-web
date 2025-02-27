'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface Transaction {
  id: string;
  type: 'buy' | 'sell';
  amount: number;
  price: number;
  timestamp: Date;
}

interface MarketData {
  price: number;
  volume: number;
  change: number;
}

const MarketSimulation = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [marketData, setMarketData] = useState<MarketData>({
    price: 1000,
    volume: 50000,
    change: 5.2
  });

  // Generate random transactions
  useEffect(() => {
    const interval = setInterval(() => {
      const newTransaction: Transaction = {
        id: Math.random().toString(36).substr(2, 9),
        type: Math.random() > 0.5 ? 'buy' : 'sell',
        amount: Math.floor(Math.random() * 1000) + 100,
        price: marketData.price * (1 + (Math.random() - 0.5) * 0.02),
        timestamp: new Date()
      };

      setTransactions(prev => [newTransaction, ...prev].slice(0, 10));
      
      // Update market data
      setMarketData(prev => ({
        price: newTransaction.price,
        volume: prev.volume + newTransaction.amount,
        change: ((newTransaction.price - 1000) / 1000) * 100
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, [marketData.price]);

  return (
    <div className="p-8 glassmorphism-dark rounded-xl">
      {/* Market Overview */}
      <div className="grid grid-cols-3 gap-8 mb-8">
        <motion.div
          className="p-6 glassmorphism rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="text-sm text-gray-400 mb-2">Current Price</div>
          <div className="text-2xl font-bold bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
            ${marketData.price.toFixed(2)}
          </div>
          <div className={`text-sm ${marketData.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
            {marketData.change >= 0 ? '↑' : '↓'} {Math.abs(marketData.change).toFixed(2)}%
          </div>
        </motion.div>

        <motion.div
          className="p-6 glassmorphism rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="text-sm text-gray-400 mb-2">24h Volume</div>
          <div className="text-2xl font-bold bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
            ${marketData.volume.toLocaleString()}
          </div>
          <div className="text-sm text-gray-400">+{(marketData.volume * 0.1).toFixed(0)} trades</div>
        </motion.div>

        <motion.div
          className="p-6 glassmorphism rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="text-sm text-gray-400 mb-2">Market Cap</div>
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-500 to-violet-500 bg-clip-text text-transparent">
            $25.6M
          </div>
          <div className="text-sm text-green-500">↑ 8.3%</div>
        </motion.div>
      </div>

      {/* Live Transactions */}
      <div className="mb-8">
        <h3 className="text-lg font-bold mb-4">Live Transactions</h3>
        <div className="space-y-2">
          <AnimatePresence>
            {transactions.map((tx) => (
              <motion.div
                key={tx.id}
                className="p-4 glassmorphism rounded-lg flex justify-between items-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-2 h-2 rounded-full ${
                    tx.type === 'buy' ? 'bg-green-500' : 'bg-red-500'
                  }`} />
                  <div>
                    <div className="font-medium">
                      {tx.type === 'buy' ? 'Buy' : 'Sell'} {tx.amount.toLocaleString()} tokens
                    </div>
                    <div className="text-sm text-gray-400">
                      {tx.timestamp.toLocaleTimeString()}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium">${tx.price.toFixed(2)}</div>
                  <div className="text-sm text-gray-400">
                    ${(tx.amount * tx.price).toLocaleString()}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Market Depth */}
      <div>
        <h3 className="text-lg font-bold mb-4">Market Depth</h3>
        <div className="relative h-32">
          <svg className="w-full h-full">
            <defs>
              <linearGradient id="buy-gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgb(34, 197, 94)" stopOpacity="0.2" />
                <stop offset="100%" stopColor="rgb(34, 197, 94)" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="sell-gradient" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="rgb(239, 68, 68)" stopOpacity="0.2" />
                <stop offset="100%" stopColor="rgb(239, 68, 68)" stopOpacity="0" />
              </linearGradient>
            </defs>
            {/* Buy Side */}
            <path
              d="M 0 128 L 100 90 L 200 70 L 300 60 L 400 128"
              fill="url(#buy-gradient)"
              stroke="rgb(34, 197, 94)"
              strokeWidth="2"
            />
            {/* Sell Side */}
            <path
              d="M 400 0 L 300 40 L 200 50 L 100 70 L 0 0"
              fill="url(#sell-gradient)"
              stroke="rgb(239, 68, 68)"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default MarketSimulation;
