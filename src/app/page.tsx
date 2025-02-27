'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PasscodeEntry from '@/components/auth/PasscodeEntry';
import ClientWrapper from '@/components/ClientWrapper';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/Hero';
import CoreFeatures from '@/components/sections/CoreFeatures';
import Markets from '@/components/sections/Markets';

export default function Home() {
  const [hasAccess, setHasAccess] = useState<boolean | null>(null);
  const [isEntering, setIsEntering] = useState(false);

  useEffect(() => {
    // Check access token immediately on mount
    const access = localStorage.getItem('cloutverse_access') === 'granted';
    setHasAccess(access);
  }, []);

  const handleAccessGranted = () => {
    setIsEntering(true);
    setTimeout(() => {
      localStorage.setItem('cloutverse_access', 'granted');
      setHasAccess(true);
    }, 1000);
  };

  // Show nothing while checking access status
  if (hasAccess === null) {
    return null;
  }

  if (!hasAccess) {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key="passcode"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <PasscodeEntry onAccessGranted={handleAccessGranted} />
        </motion.div>
      </AnimatePresence>
    );
  }

  return (
    <motion.div 
      className="relative min-h-screen bg-black"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Background gradient */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900 via-black to-black opacity-50 pointer-events-none" />
      {/* Background grid pattern */}
      <div className="fixed inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      
      <motion.div 
        className="relative z-10"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Navbar />
        <ClientWrapper>
          <Hero />
          <CoreFeatures />
          <Markets />
        </ClientWrapper>
      </motion.div>
    </motion.div>
  );
}
