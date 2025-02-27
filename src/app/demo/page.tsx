'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import NeonDoor from '@/components/transitions/NeonDoor';
import IntroAnimation from '@/components/demo/IntroAnimation';
import ScenarioModeling from '@/components/advanced/ScenarioModeling';
import AnalyticsDashboard from '@/components/demo/AnalyticsDashboard';
import MarketSimulation from '@/components/demo/MarketSimulation';

const DemoPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showDoor, setShowDoor] = useState(true);
  const [doorOpen, setDoorOpen] = useState(false);

  useEffect(() => {
    // Start door opening animation after a short delay
    setTimeout(() => setDoorOpen(true), 500);
  }, []);

  const steps = [
    {
      title: "Welcome to Cloutverse",
      description: "Experience the future of reputation finance",
      component: <IntroAnimation />
    },
    {
      title: "Explore Scenarios",
      description: "Discover potential outcomes in the reputation economy",
      component: <ScenarioModeling />
    },
    {
      title: "Market Insights",
      description: "Real-time analytics and market performance",
      component: <AnalyticsDashboard />
    },
    {
      title: "Trade Simulation",
      description: "Experience reputation trading in a simulated environment",
      component: <MarketSimulation />
    }
  ];

  const handleNext = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length);
  };

  const handlePrev = () => {
    setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900 via-black to-black opacity-50 pointer-events-none" />
      <div className="fixed inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10">
        {/* Title and Description */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute top-8 left-0 right-0 text-center z-20"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            {steps[currentStep].title}
          </h1>
          <p className="text-xl text-gray-400">
            {steps[currentStep].description}
          </p>
        </motion.div>

        {/* Door Transition */}
        <AnimatePresence mode="wait">
          {showDoor && (
            <NeonDoor isOpen={doorOpen} onOpenComplete={() => setShowDoor(false)} />
          )}
        </AnimatePresence>

        {/* Main Content */}
        <AnimatePresence mode="wait">
          {!showDoor && (
            <motion.div
              key={currentStep}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="min-h-screen"
            >
              {steps[currentStep].component}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation Buttons */}
        {!showDoor && (
          <div className="fixed bottom-8 left-0 right-0 flex justify-center space-x-4 z-20">
            <motion.button
              onClick={handlePrev}
              className="px-6 py-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Previous
            </motion.button>
            <motion.button
              onClick={handleNext}
              className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90 transition-opacity"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Next
            </motion.button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DemoPage;
