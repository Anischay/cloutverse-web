'use client';

import { ReactNode } from 'react';
import Navbar from './Navbar';
import { motion, AnimatePresence } from 'framer-motion';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="pt-20" // Add padding for navbar
        >
          {children}
        </motion.main>
      </AnimatePresence>

      {/* Footer */}
      <footer className="relative z-10 bg-black/40 backdrop-blur-lg mt-20">
        <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
              Cloutverse
            </h3>
            <p className="text-gray-400">
              Transforming reputation into a tradable, insurable, and monetizable asset.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Clout Score</li>
              <li>Reputation ETFs</li>
              <li>Insurance</li>
              <li>Analytics</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Documentation</li>
              <li>Blog</li>
              <li>Case Studies</li>
              <li>FAQs</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Twitter</li>
              <li>Discord</li>
              <li>Telegram</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 py-6 text-center text-gray-400">
            {new Date().getFullYear()} Cloutverse. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
