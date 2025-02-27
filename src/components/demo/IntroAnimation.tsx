'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface FeatureCard {
  title: string;
  description: string;
  icon: string;
  color: string;
}

const features: FeatureCard[] = [
  {
    title: "AI-Powered Analytics",
    description: "Real-time reputation tracking and market insights",
    icon: "📊",
    color: "#8A2BE2"
  },
  {
    title: "Decentralized Markets",
    description: "Trade reputation assets on secure blockchain networks",
    icon: "⚡",
    color: "#00CED1"
  },
  {
    title: "Community Governance",
    description: "Shape the future of reputation finance",
    icon: "🏛️",
    color: "#FF1493"
  },
  {
    title: "Smart Contracts",
    description: "Automated reputation-based agreements and rewards",
    icon: "📜",
    color: "#FFA500"
  }
];

const financialSymbols = [
  { symbol: '₿', color: '#F7931A' }, // Bitcoin
  { symbol: 'Ξ', color: '#627EEA' }, // Ethereum
  { symbol: '$', color: '#85bb65' }, // Dollar
  { symbol: '📈', color: '#00ff00' }, // Chart up
  { symbol: '💎', color: '#0092ff' }, // Diamond hands
  { symbol: '🔗', color: '#2a5ada' }, // Blockchain
  { symbol: '📊', color: '#ff6b6b' }, // Analytics
  { symbol: '🌐', color: '#00d1b2' }, // Global
];

const IntroAnimation = () => {
  const [selectedFeature, setSelectedFeature] = useState<FeatureCard | null>(null);
  const [step, setStep] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 1000, height: 800 });

  useEffect(() => {
    setMounted(true);
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    });

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % features.length);
      setRotation(prev => prev - 90);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Financial Background */}
      <div className="absolute inset-0 overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-900/20 via-black to-black" />
        
        {/* Financial Symbols */}
        {[...Array(20)].map((_, i) => {
          const symbol = financialSymbols[i % financialSymbols.length];
          const startX = Math.random() * dimensions.width;
          const startY = Math.random() * dimensions.height;
          
          return (
            <motion.div
              key={i}
              className="absolute text-2xl font-bold"
              initial={{ 
                x: startX,
                y: startY,
                opacity: 0,
                scale: 0.5
              }}
              animate={{
                x: [
                  startX,
                  startX + Math.random() * 100 - 50,
                  startX
                ],
                y: [
                  startY,
                  startY + Math.random() * 100 - 50,
                  startY
                ],
                opacity: [0, 1, 0],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: Math.random() * 5 + 10,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                color: symbol.color,
                textShadow: `0 0 10px ${symbol.color}40`
              }}
            >
              {symbol.symbol}
            </motion.div>
          );
        })}

        {/* Grid Lines */}
        <div className="absolute inset-0" style={{ opacity: 0.1 }}>
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"
              style={{ top: `${(i + 1) * 5}%` }}
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scaleX: [0.9, 1.1, 0.9],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Central Portal */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{ rotate: rotation }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {/* Rotating Rings */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border-2 border-violet-500/30"
            style={{
              width: `${320 + i * 60}px`,
              height: `${320 + i * 60}px`,
              left: `${-160 - i * 30}px`,
              top: `${-160 - i * 30}px`,
            }}
            animate={{
              rotate: 360,
              scale: [1, 1.02, 1],
            }}
            transition={{
              rotate: {
                duration: 20 + i * 5,
                repeat: Infinity,
                ease: "linear",
              },
              scale: {
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }
            }}
          />
        ))}

        {/* Feature Cards */}
        {features.map((feature, index) => {
          // Calculate diagonal pairs (0-180, 90-270)
          const isFirstPair = index < 2;
          const baseAngle = isFirstPair ? 0 : 90; // First pair at 0/180, second at 90/270
          const pairOffset = index % 2 === 0 ? 0 : 180; // Add 180 for opposite card
          const finalAngle = baseAngle + pairOffset - (rotation); // Subtract rotation to keep pairs aligned
          const radian = (finalAngle * Math.PI) / 180;
          const radius = 220;
          const x = Math.cos(radian) * radius;
          const y = Math.sin(radian) * radius;
          const isActive = index === step;

          return (
            <motion.div
              key={feature.title}
              className="absolute"
              style={{
                transform: `translate(${x}px, ${y}px)`,
                zIndex: isActive ? 20 : 10,
              }}
              initial={{ opacity: 1, scale: 0.8 }}
              animate={{ 
                opacity: isActive ? 1 : 0.5,
                scale: isActive ? 1 : 0.8,
                rotate: -rotation // Keep cards upright
              }}
              transition={{
                duration: 0.8,
                ease: "easeInOut"
              }}
            >
              <motion.div
                className="w-40 p-4 rounded-xl backdrop-blur-md transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  backgroundColor: `${feature.color}15`,
                  border: `1px solid ${feature.color}30`,
                }}
                animate={{
                  boxShadow: isActive 
                    ? [
                        `0 0 20px ${feature.color}20`,
                        `0 0 30px ${feature.color}40`,
                        `0 0 20px ${feature.color}20`
                      ]
                    : `0 0 20px ${feature.color}10`
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <div className="text-2xl mb-2">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-1 text-white">{feature.title}</h3>
                <p className="text-sm text-gray-300">{feature.description}</p>
              </motion.div>
            </motion.div>
          );
        })}

        {/* Central Icon */}
        <motion.div
          className="relative z-30 w-24 h-24 rounded-full bg-violet-600 flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: [1, 1.1, 1],
            boxShadow: [
              "0 0 20px rgba(139, 92, 246, 0.3)",
              "0 0 40px rgba(139, 92, 246, 0.5)",
              "0 0 20px rgba(139, 92, 246, 0.3)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <span className="text-4xl">⚡</span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default IntroAnimation;
