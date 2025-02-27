'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import DataVisualization from './advanced/DataVisualization';
import DemoModal from './modals/DemoModal';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen pt-20 pb-20 flex items-center" ref={containerRef}>
      {/* Fine Grid Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f10_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f10_1px,transparent_1px)] bg-[size:14px_24px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#8B5CF640,transparent)]" />
      </div>

      {/* Floating Orbs */}
      <motion.div 
        className="absolute inset-0"
        style={{ y }}
      >
        <div className="relative w-full h-full">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 blur-sm"
              initial={{ 
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: Math.random() * 0.5 + 0.5,
              }}
              animate={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: Math.random() * 0.5 + 0.5,
              }}
              transition={{
                duration: Math.random() * 10 + 20,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear"
              }}
              style={{
                width: Math.random() * 100 + 50,
                height: Math.random() * 100 + 50,
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="z-10"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              The Future of<br />
              Reputation Finance
            </h1>
            <p className="text-gray-300 text-lg mb-6">
              Transform your digital reputation into tangible value. With Cloutverse, 
              your online influence becomes a tradable asset, backed by advanced 
              blockchain technology and AI-driven analytics.
            </p>
            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsDemoOpen(true)}
                className="px-6 py-2.5 bg-violet-600 rounded-lg font-medium hover:bg-violet-500 transition-colors"
              >
                Watch Demo
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2.5 border border-violet-600/50 rounded-lg font-medium hover:bg-violet-600/10 transition-colors"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
          
          {/* Advanced Data Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-full aspect-square max-h-[600px] rounded-2xl bg-black/20 backdrop-blur-sm border border-white/10 shadow-2xl"
          >
            <div className="absolute inset-0">
              <DataVisualization />
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Demo Modal */}
      <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </section>
  );
};

export default Hero;
