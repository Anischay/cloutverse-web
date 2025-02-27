'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const PersonalTokenPage = () => {
  const [step, setStep] = useState(1);
  const [tokenDetails, setTokenDetails] = useState({
    name: '',
    symbol: '',
    supply: '',
    distribution: {
      public: 40,
      reserve: 30,
      team: 20,
      community: 10
    }
  });

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
            Launch Your Personal Token
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Transform your digital influence into a tradable asset backed by your Clout Score™
          </p>
        </motion.div>

        {/* Token Creation Process */}
        <div className="max-w-4xl mx-auto mb-16">
          {/* Progress Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex justify-between mb-12 relative"
          >
            {[
              "Verify Score",
              "Token Details",
              "Distribution",
              "Review"
            ].map((label, index) => (
              <div key={label} className="flex flex-col items-center relative z-10">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  step > index + 1 ? 'bg-green-500' :
                  step === index + 1 ? 'bg-gradient-to-r from-pink-500 to-purple-500' :
                  'bg-gray-700'
                }`}>
                  {step > index + 1 ? '✓' : index + 1}
                </div>
                <div className="text-sm mt-2 text-gray-400">{label}</div>
              </div>
            ))}
            {/* Progress Line */}
            <div className="absolute top-5 left-0 right-0 h-[2px] bg-gray-700 -z-10">
              <div
                className="h-full bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300"
                style={{ width: `${((step - 1) / 3) * 100}%` }}
              />
            </div>
          </motion.div>

          {/* Step Content */}
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-xl p-8 border border-purple-500/20"
          >
            {step === 1 && (
              <div className="text-center">
                <div className="text-6xl mb-6">📊</div>
                <h2 className="text-2xl font-bold mb-4">Verify Your Clout Score™</h2>
                <p className="text-gray-400 mb-8">
                  Your personal token will be backed by your verified Clout Score™, ensuring trust and value
                </p>
                <div className="bg-black/50 rounded-xl p-6 mb-8">
                  <div className="text-4xl font-bold mb-2">785</div>
                  <div className="text-gray-400">Your Current Clout Score™</div>
                </div>
                <button
                  onClick={() => setStep(2)}
                  className="px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                >
                  Continue with Score
                </button>
              </div>
            )}

            {step === 2 && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Token Details</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-gray-400 mb-2">Token Name</label>
                    <input
                      type="text"
                      placeholder="e.g., John Smith Token"
                      className="w-full bg-black/50 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
                      value={tokenDetails.name}
                      onChange={(e) => setTokenDetails({...tokenDetails, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-2">Token Symbol</label>
                    <input
                      type="text"
                      placeholder="e.g., JST"
                      className="w-full bg-black/50 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
                      value={tokenDetails.symbol}
                      onChange={(e) => setTokenDetails({...tokenDetails, symbol: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-2">Initial Supply</label>
                    <input
                      type="number"
                      placeholder="e.g., 1,000,000"
                      className="w-full bg-black/50 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
                      value={tokenDetails.supply}
                      onChange={(e) => setTokenDetails({...tokenDetails, supply: e.target.value})}
                    />
                  </div>
                  <button
                    onClick={() => setStep(3)}
                    className="w-full px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                  >
                    Next Step
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Token Distribution</h2>
                <div className="space-y-6">
                  {Object.entries(tokenDetails.distribution).map(([key, value]) => (
                    <div key={key}>
                      <label className="block text-gray-400 mb-2 capitalize">{key} Allocation (%)</label>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={value}
                        onChange={(e) => setTokenDetails({
                          ...tokenDetails,
                          distribution: {
                            ...tokenDetails.distribution,
                            [key]: parseInt(e.target.value)
                          }
                        })}
                        className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                      />
                      <div className="text-right text-gray-400">{value}%</div>
                    </div>
                  ))}
                  <button
                    onClick={() => setStep(4)}
                    className="w-full px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                  >
                    Review Token
                  </button>
                </div>
              </div>
            )}

            {step === 4 && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Review Your Token</h2>
                <div className="space-y-6">
                  <div className="bg-black/50 rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-4">Token Information</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Name:</span>
                        <span>{tokenDetails.name || 'Not set'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Symbol:</span>
                        <span>{tokenDetails.symbol || 'Not set'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Initial Supply:</span>
                        <span>{tokenDetails.supply || 'Not set'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Clout Score™ Backing:</span>
                        <span>785</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-black/50 rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-4">Distribution</h3>
                    <div className="space-y-3">
                      {Object.entries(tokenDetails.distribution).map(([key, value]) => (
                        <div key={key} className="flex justify-between">
                          <span className="text-gray-400 capitalize">{key}:</span>
                          <span>{value}%</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={async () => {
                      try {
                        // Validate token details
                        if (!tokenDetails.name || !tokenDetails.symbol || !tokenDetails.supply) {
                          alert('Please fill in all token details');
                          return;
                        }

                        // Show loading state
                        const btn = document.activeElement;
                        if (btn) {
                          btn.textContent = 'Creating Token...';
                          btn.disabled = true;
                        }

                        // Simulate blockchain interaction
                        await new Promise(resolve => setTimeout(resolve, 2000));

                        // Success notification
                        alert(`🎉 Congratulations! ${tokenDetails.name} (${tokenDetails.symbol}) has been successfully created!`);
                        
                        // Redirect to dashboard
                        window.location.href = '/platform/dashboard';
                      } catch (error) {
                        alert('Failed to create token. Please try again.');
                        
                        // Reset button
                        const btn = document.activeElement;
                        if (btn) {
                          btn.textContent = 'Launch Token';
                          btn.disabled = false;
                        }
                      }
                    }}
                    className="w-full px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Launch Token
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Benefits of Personal Tokens</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Monetize Influence",
                description: "Convert your digital reputation into a tradable asset",
                icon: "💰"
              },
              {
                title: "Engage Community",
                description: "Create exclusive benefits for token holders",
                icon: "🤝"
              },
              {
                title: "Grow Value",
                description: "Token value increases with your Clout Score™",
                icon: "📈"
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PersonalTokenPage;
