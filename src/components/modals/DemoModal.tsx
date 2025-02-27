'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import IntroAnimation from '../demo/IntroAnimation';
import ScenarioModeling from '../advanced/ScenarioModeling';
import AnalyticsDashboard from '../demo/AnalyticsDashboard';
import MarketSimulation from '../demo/MarketSimulation';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DemoModal = ({ isOpen, onClose }: DemoModalProps) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.documentElement.classList.add('demo-mode');
    } else {
      document.documentElement.classList.remove('demo-mode');
    }
    
    return () => {
      document.documentElement.classList.remove('demo-mode');
    };
  }, [isOpen]);

  const steps = [
    {
      title: "Welcome to Cloutverse",
      description: "Discover the future of reputation finance",
      component: <IntroAnimation />
    },
    {
      title: "Scenario Modeling",
      description: "Explore different reputation growth paths",
      component: <ScenarioModeling />
    },
    {
      title: "Real-time Analytics",
      description: "Monitor your reputation metrics",
      component: <AnalyticsDashboard />
    },
    {
      title: "Market Simulation",
      description: "Experience live reputation trading",
      component: <MarketSimulation />
    }
  ];

  const nextStep = () => setStep((prev) => Math.min(prev + 1, steps.length - 1));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 0));

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[9999]">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ type: "spring", duration: 0.5 }}
        className="w-full h-full"
      >
        <div className="h-full flex flex-col">
          <div className="flex-1 overflow-y-auto">
            {steps[step].component}
          </div>

          <div className="bg-black/50 backdrop-blur-sm border-t border-white/10 p-4">
            <div className="container mx-auto flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button
                  onClick={prevStep}
                  className={`px-4 py-2 rounded-lg transition ${
                    step === 0
                      ? 'opacity-50 cursor-not-allowed'
                      : 'hover:bg-white/10'
                  }`}
                  disabled={step === 0}
                >
                  Previous
                </button>
                <div className="text-sm text-gray-400">
                  Step {step + 1} of {steps.length}
                </div>
                <button
                  onClick={nextStep}
                  className={`px-4 py-2 rounded-lg transition ${
                    step === steps.length - 1
                      ? 'opacity-50 cursor-not-allowed'
                      : 'hover:bg-white/10'
                  }`}
                  disabled={step === steps.length - 1}
                >
                  Next
                </button>
              </div>
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-lg hover:bg-white/10 transition"
              >
                Exit Demo
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default DemoModal;
