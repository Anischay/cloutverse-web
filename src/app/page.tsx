'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import PasscodeEntry from '@/components/auth/PasscodeEntry';
import ClientWrapper from '@/components/ClientWrapper';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/Hero';
import CoreFeatures from '@/components/sections/CoreFeatures';
import Markets from '@/components/sections/Markets';

export default function Home() {
  const [hasAccess, setHasAccess] = useState(false);
  const [isEntering, setIsEntering] = useState(false);

  useEffect(() => {
    localStorage.removeItem('cloutverse_access');
    const access = localStorage.getItem('cloutverse_access') === 'granted';
    setHasAccess(access);
  }, []);

  const handleAccessGranted = () => {
    setIsEntering(true);
    setTimeout(() => {
      setHasAccess(true);
    }, 1000);
  };

  if (!hasAccess) {
    return <PasscodeEntry onAccessGranted={handleAccessGranted} />;
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
