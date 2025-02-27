'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface NeonDoorProps {
  isOpen: boolean;
  onTransitionComplete: () => void;
}

const NeonDoor = ({ isOpen, onTransitionComplete }: NeonDoorProps) => {
  const [doorState, setDoorState] = useState<'closed' | 'opening' | 'portal' | 'entering'>('closed');
  const router = useRouter();

  useEffect(() => {
    if (isOpen && doorState === 'closed') {
      setDoorState('opening');
      setTimeout(() => {
        setDoorState('portal');
        setTimeout(() => {
          setDoorState('entering');
          setTimeout(() => {
            onTransitionComplete();
          }, 4000); // Extended entering state
        }, 3000); // Extended portal state
      }, 2500); // Extended opening state
    }
  }, [isOpen, doorState, onTransitionComplete]);

  return (
    <AnimatePresence>
      {(doorState !== 'entering') && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center perspective-1000"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 2 } }}
        >
          {/* Background Overlay */}
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: doorState === 'portal' ? 0.95 : 0.9,
              background: doorState === 'portal' 
                ? 'radial-gradient(circle at center, rgba(147, 51, 234, 0.3) 0%, rgba(0, 0, 0, 0.95) 100%)'
                : 'radial-gradient(circle at center, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 1) 100%)'
            }}
            transition={{ duration: 2 }}
          />

          {/* Cosmic Background with Enhanced Effects */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(150)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                initial={{ 
                  opacity: Math.random() * 0.7 + 0.3,
                  scale: Math.random() * 0.5 + 0.5,
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                }}
                animate={doorState === 'portal' ? {
                  x: window.innerWidth / 2,
                  y: window.innerHeight / 2,
                  scale: 0,
                  opacity: 0,
                } : {}}
                transition={{ 
                  duration: Math.random() * 3 + 2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>

          {/* Door Frame - Two Panels */}
          <motion.div
            className="relative w-[400px] h-[450px] flex"
            animate={
              doorState === 'portal' 
                ? {
                    width: '600px',
                    height: '600px',
                    gap: '0px',
                  }
                : doorState === 'opening'
                ? { 
                    gap: '400px',
                }
                : {
                    gap: '0px',
                }
            }
            transition={{ 
              duration: 2.5,
              ease: [0.4, 0, 0.2, 1],
            }}
          >
            {/* Left Door Panel */}
            <motion.div
              className="relative w-1/2 h-full"
              animate={
                doorState === 'portal' 
                  ? {
                      x: '-50%',
                      opacity: 0,
                    }
                  : doorState === 'opening'
                  ? { 
                      transform: [
                        'perspective(1000px) rotateY(0deg)',
                        'perspective(1000px) rotateY(-110deg)',
                      ],
                    }
                  : {
                      transform: 'perspective(1000px) rotateY(0deg)',
                  }
              }
              transition={{ 
                duration: 2,
                ease: "easeInOut",
              }}
            >
              <motion.div
                className="absolute inset-0 rounded-l-xl overflow-hidden"
                style={{
                  background: 'linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0.7))',
                  border: '2px solid rgba(147, 51, 234, 0.5)',
                  boxShadow: `
                    0 0 20px rgba(147, 51, 234, 0.3),
                    0 0 40px rgba(147, 51, 234, 0.2),
                    inset 0 0 20px rgba(147, 51, 234, 0.2)
                  `
                }}
              >
                <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
                {/* Door Handle Left */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 w-2 h-16 rounded-full bg-violet-500/50" />
              </motion.div>
            </motion.div>

            {/* Right Door Panel */}
            <motion.div
              className="relative w-1/2 h-full"
              animate={
                doorState === 'portal' 
                  ? {
                      x: '50%',
                      opacity: 0,
                    }
                  : doorState === 'opening'
                  ? { 
                      transform: [
                        'perspective(1000px) rotateY(0deg)',
                        'perspective(1000px) rotateY(110deg)',
                      ],
                    }
                  : {
                      transform: 'perspective(1000px) rotateY(0deg)',
                  }
              }
              transition={{ 
                duration: 2,
                ease: "easeInOut",
              }}
            >
              <motion.div
                className="absolute inset-0 rounded-r-xl overflow-hidden"
                style={{
                  background: 'linear-gradient(to left, rgba(0,0,0,0.9), rgba(0,0,0,0.7))',
                  border: '2px solid rgba(147, 51, 234, 0.5)',
                  boxShadow: `
                    0 0 20px rgba(147, 51, 234, 0.3),
                    0 0 40px rgba(147, 51, 234, 0.2),
                    inset 0 0 20px rgba(147, 51, 234, 0.2)
                  `
                }}
              >
                <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
                {/* Door Handle Right */}
                <div className="absolute left-4 top-1/2 -translate-y-1/2 w-2 h-16 rounded-full bg-violet-500/50" />
              </motion.div>
            </motion.div>

            {/* Portal Effects (shown when door is fully open) */}
            {doorState === 'portal' && (
              <motion.div
                className="absolute inset-0 rounded-full overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                {/* Portal content */}
                {/* Central Portal Effect */}
                <motion.div
                  className="absolute w-full h-full"
                  animate={{
                    rotate: 360,
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity, repeatType: "reverse" }
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 blur-xl" />
                </motion.div>

                {/* Energy Rings */}
                {[...Array(15)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute inset-0"
                    style={{
                      border: `${1 + i * 0.5}px solid rgba(147, 51, 234, ${0.4 - i * 0.02})`,
                      borderRadius: '50%',
                    }}
                    animate={{
                      rotate: [i * 24, 360 + i * 24],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      rotate: { duration: 10 + i, repeat: Infinity, ease: "linear" },
                      scale: { duration: 2, repeat: Infinity, repeatType: "reverse" }
                    }}
                  />
                ))}
              </motion.div>
            )}

            {/* Enhanced Portal Text */}
            {doorState === 'portal' && (
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <motion.h2 
                  className="text-4xl font-bold text-white mb-4"
                  animate={{
                    textShadow: [
                      '0 0 20px rgba(147, 51, 234, 0.8)',
                      '0 0 40px rgba(147, 51, 234, 0.8)',
                      '0 0 20px rgba(147, 51, 234, 0.8)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Entering Cloutverse
                </motion.h2>
                <motion.p
                  className="text-violet-300 text-lg mt-2"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Initializing digital realm...
                </motion.p>
                <motion.div
                  className="flex gap-2 justify-center mt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-3 h-3 rounded-full bg-violet-500"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        delay: i * 0.3
                      }}
                    />
                  ))}
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NeonDoor;
