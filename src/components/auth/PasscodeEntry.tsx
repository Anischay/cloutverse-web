'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface PasscodeEntryProps {
  onAccessGranted: () => void;
}

const mysticalHints = [
  "Only the worthy may enter the sacred Cloutverse",
  "Where reputation becomes digital gold",
  "The key lies in the prophecy of Cloutverse 2025",
  "Your reputation is your power",
  "Where influence meets blockchain",
  "The gateway to your digital legacy"
];

const PasscodeEntry = ({ onAccessGranted }: PasscodeEntryProps) => {
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentHint, setCurrentHint] = useState(0);
  const [ritualStep, setRitualStep] = useState(0);
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHint((prev) => (prev + 1) % mysticalHints.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const words = [
    'REPUTATION', 'INFLUENCE', 'BLOCKCHAIN', 'FUTURE', 'DIGITAL',
    'LEGACY', 'POWER', 'CLOUTVERSE', 'SACRED', 'GATEWAY',
    'DESTINY', 'MYSTIC', 'EVOLVE', 'TRANSFORM', 'ASCEND'
  ];

  const RainDrop = ({ delay }: { delay: number }) => {
    const [text, setText] = useState('');
  
    useEffect(() => {
      const interval = setInterval(() => {
        const word = words[Math.floor(Math.random() * words.length)];
        setText(word);
      }, 2000);
      return () => clearInterval(interval);
    }, []);

    return (
      <motion.div
        className="absolute text-violet-500/30 font-mono text-sm"
        initial={{ y: -100, x: Math.random() * window.innerWidth }}
        animate={{ 
          y: window.innerHeight + 100,
          opacity: [0.3, 0.7, 0.3]
        }}
        transition={{ 
          duration: 10,
          delay,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {text}
      </motion.div>
    );
  };

  const DigitalRain = () => (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {[...Array(30)].map((_, i) => (
        <RainDrop key={i} delay={i * 0.3} />
      ))}
    </div>
  );

  const handleSubmit = () => {
    setLoading(true);
    if (passcode === 'CLOUTVERSE2025') {
      setError(false);
      setRitualStep(1);
      setTimeout(() => {
        setRitualStep(2);
        setTimeout(() => {
          setRitualStep(3);
          setTimeout(() => {
            setRitualStep(4);
            setTimeout(() => {
              setUnlocked(true);
              setTimeout(() => {
                localStorage.setItem('cloutverse_access', 'granted');
                onAccessGranted();
              }, 2000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    } else {
      setError(true);
      setLoading(false);
    }
  };

  const ritualMessages = [
    "Initiating gateway sequence...",
    "Verifying digital signature...",
    "Aligning blockchain nodes...",
    unlocked ? (
      <motion.div
        key="unlock-message"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ 
          scale: [0.8, 1.2, 1],
          opacity: 1,
        }}
        transition={{ 
          duration: 0.8,
          times: [0, 0.5, 1],
          ease: "easeOut"
        }}
        className="flex flex-col items-center space-y-4"
      >
        <motion.div
          className="text-2xl font-bold relative"
          animate={{
            textShadow: [
              "0 0 20px rgba(139, 92, 246, 0.3)",
              "0 0 40px rgba(139, 92, 246, 0.5)",
              "0 0 20px rgba(139, 92, 246, 0.3)",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="bg-gradient-to-r from-violet-400 via-fuchsia-500 to-violet-600 bg-clip-text text-transparent">
            Gateway Unlocked
          </span>
          {/* Glowing lines */}
          <motion.div
            className="absolute -inset-1 border border-violet-500/30 rounded"
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [0.98, 1.02, 0.98],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute -inset-2 border border-violet-500/20 rounded"
            animate={{
              opacity: [0.2, 0.4, 0.2],
              scale: [0.96, 1.04, 0.96],
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="relative"
        >
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ 
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            className="text-2xl"
          >
            🔓
          </motion.div>
          {/* Ripple effects */}
          <motion.div
            className="absolute inset-0 rounded-full bg-violet-500/20"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ 
              scale: [1, 2],
              opacity: [0.5, 0]
            }}
            transition={{ 
              duration: 1,
              repeat: Infinity,
              repeatDelay: 0.2
            }}
          />
          <motion.div
            className="absolute inset-0 rounded-full bg-violet-500/10"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ 
              scale: [1, 2.5],
              opacity: [0.3, 0]
            }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              repeatDelay: 0.3
            }}
          />
        </motion.div>
      </motion.div>
    ) : "Accessing Cloutverse mainframe..."
  ];

  return (
    <div className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
      {loading && <DigitalRain />}
      {/* Cyberpunk Grid Background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(139, 92, 246, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Animated Background Effects */}
      <div className="absolute inset-0">
        {/* Scanning Lines */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'repeating-linear-gradient(0deg, transparent, rgba(139, 92, 246, 0.1) 2px, transparent 4px)',
            backgroundSize: '100% 4px',
          }}
          animate={{ y: [0, 4] }}
          transition={{ duration: 0.2, repeat: Infinity, ease: "linear" }}
        />

        {/* Glowing Orbs */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute w-32 h-32 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, transparent 70%)',
              left: `${(i * 25)}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: ['-20px', '20px'],
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Sacred Circles */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {[600, 400, 200].map((size, i) => (
            <motion.div
              key={`circle-${i}`}
              className="absolute border border-violet-500/20 rounded-full"
              style={{
                width: size,
                height: size,
                left: -size/2,
                top: -size/2,
              }}
              animate={{
                rotate: (i % 2 === 0 ? 360 : -360),
                scale: [1, 1.05, 1],
              }}
              transition={{
                rotate: { duration: 20 + i * 10, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, repeatType: "reverse" },
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} className="relative z-10 flex flex-col items-center justify-center space-y-8 p-8">
        <div className="text-center space-y-4">
          <motion.div
            className="text-5xl font-bold text-white mb-6 font-serif tracking-wider"
            animate={{
              textShadow: [
                "0 0 20px rgba(139, 92, 246, 0.3)",
                "0 0 40px rgba(139, 92, 246, 0.5)",
                "0 0 20px rgba(139, 92, 246, 0.3)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            CLOUTVERSE
          </motion.div>

          <motion.div 
            className="text-2xl text-violet-400 font-serif tracking-wider"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            The Sacred Gateway
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentHint}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-violet-300/70 italic"
            >
              {mysticalHints[currentHint]}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Input Container */}
        <div className="relative w-full max-w-md group">
          {/* Scanning Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/10 to-transparent pointer-events-none"
            animate={{ y: ['-100%', '100%'] }}
            transition={{ duration: 2, repeat: Infinity }}
          />

          {/* Holographic Frame */}
          <motion.div
            className="absolute -inset-px rounded-lg"
            style={{
              background: 'linear-gradient(45deg, transparent, rgba(139, 92, 246, 0.3), transparent)',
            }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />

          <input
            type="password"
            value={passcode}
            onChange={(e) => setPasscode(e.target.value.toUpperCase())}
            className={`w-full bg-black/50 backdrop-blur-sm border-2 ${
              error ? 'border-red-500' : 'border-violet-500/30'
            } rounded-lg px-4 py-3 text-white text-center tracking-[0.5em] 
            focus:outline-none focus:border-violet-500 transition-all duration-300
            group-hover:border-violet-500/50`}
            placeholder="• • • • • • • • • • • •"
          />

          {/* Corner Accents */}
          {['tl', 'tr', 'bl', 'br'].map((corner) => (
            <motion.div
              key={corner}
              className={`absolute w-2 h-2 bg-violet-500/50
                ${corner[0] === 't' ? 'top-0' : 'bottom-0'}
                ${corner[1] === 'l' ? 'left-0' : 'right-0'}`}
              animate={{
                opacity: [0.3, 1, 0.3],
                boxShadow: [
                  '0 0 10px rgba(139, 92, 246, 0.3)',
                  '0 0 20px rgba(139, 92, 246, 0.5)',
                  '0 0 10px rgba(139, 92, 246, 0.3)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          ))}
        </div>

        {/* Submit Button or Loading State */}
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div
              key={ritualStep}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-white text-lg font-medium tracking-wider"
            >
              <span className="bg-violet-900/30 px-6 py-3 rounded-lg shadow-lg backdrop-blur-sm">
                {ritualStep === 1 && "Channeling the power of reputation..."}
                {ritualStep === 2 && "Consulting the blockchain oracle..."}
                {ritualStep === 3 && "Verifying digital influence..."}
                {ritualStep === 4 && (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ 
                      scale: [0.8, 1.2, 1],
                      opacity: 1,
                    }}
                    transition={{ 
                      duration: 0.8,
                      times: [0, 0.5, 1],
                      ease: "easeOut"
                    }}
                    className="flex flex-col items-center space-y-4"
                  >
                    <motion.div
                      className="text-2xl font-bold relative"
                      animate={{
                        textShadow: [
                          "0 0 20px rgba(139, 92, 246, 0.3)",
                          "0 0 40px rgba(139, 92, 246, 0.5)",
                          "0 0 20px rgba(139, 92, 246, 0.3)",
                        ],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <span className="bg-gradient-to-r from-violet-400 via-fuchsia-500 to-violet-600 bg-clip-text text-transparent">
                        Gateway Unlocked
                      </span>
                      {/* Glowing lines */}
                      <motion.div
                        className="absolute -inset-1 border border-violet-500/30 rounded"
                        animate={{
                          opacity: [0.3, 0.6, 0.3],
                          scale: [0.98, 1.02, 0.98],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <motion.div
                        className="absolute -inset-2 border border-violet-500/20 rounded"
                        animate={{
                          opacity: [0.2, 0.4, 0.2],
                          scale: [0.96, 1.04, 0.96],
                        }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 }}
                      className="relative"
                    >
                      <motion.div
                        initial={{ y: 0 }}
                        animate={{ y: [0, -10, 0] }}
                        transition={{ 
                          duration: 1,
                          repeat: Infinity,
                          repeatType: "reverse",
                          ease: "easeInOut"
                        }}
                        className="text-2xl"
                      >
                        🔓
                      </motion.div>
                      {/* Ripple effects */}
                      <motion.div
                        className="absolute inset-0 rounded-full bg-violet-500/20"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ 
                          scale: [1, 2],
                          opacity: [0.5, 0]
                        }}
                        transition={{ 
                          duration: 1,
                          repeat: Infinity,
                          repeatDelay: 0.2
                        }}
                      />
                      <motion.div
                        className="absolute inset-0 rounded-full bg-violet-500/10"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ 
                          scale: [1, 2.5],
                          opacity: [0.3, 0]
                        }}
                        transition={{ 
                          duration: 1.5,
                          repeat: Infinity,
                          repeatDelay: 0.3
                        }}
                      />
                    </motion.div>
                  </motion.div>
                )}
              </span>
            </motion.div>
          ) : (
            <motion.button
              type="submit"
              disabled={loading || !passcode}
              className="bg-violet-500/20 hover:bg-violet-500/30 text-white px-8 py-3 rounded-lg 
                       border border-violet-500/30 hover:border-violet-500/50 transition-all duration-300
                       disabled:opacity-50 disabled:cursor-not-allowed tracking-widest
                       backdrop-blur-sm relative overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-violet-500/10 to-transparent"
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <span className="relative z-10">ENTER THE VERSE</span>
            </motion.button>
          )}
        </AnimatePresence>

        {/* Error Message */}
        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute bottom-4 left-0 right-0 text-center text-red-500 text-sm"
            >
              The sacred code rejects your offering
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </div>
  );
};

export default PasscodeEntry;
