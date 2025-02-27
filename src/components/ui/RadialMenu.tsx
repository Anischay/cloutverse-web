'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface MenuItem {
  label: string;
  icon: string;
  onClick: () => void;
}

interface RadialMenuProps {
  items: MenuItem[];
  isOpen: boolean;
  onClose: () => void;
}

const RadialMenu = ({ items, isOpen, onClose }: RadialMenuProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          className="fixed inset-0 z-50 pointer-events-none"
          style={{
            perspective: '1000px'
          }}
        >
          <div className="relative w-full h-full">
            {items.map((item, index) => {
              const angle = (index / items.length) * Math.PI * 2;
              const radius = 150;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <motion.div
                  key={item.label}
                  className="absolute pointer-events-auto"
                  style={{
                    left: `calc(${mousePosition.x}px + ${x}px)`,
                    top: `calc(${mousePosition.y}px + ${y}px)`,
                    transform: 'translate(-50%, -50%)'
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: 1,
                    opacity: 1,
                    transition: {
                      delay: index * 0.05,
                    },
                  }}
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.2 }
                  }}
                >
                  <div
                    className="relative group cursor-pointer"
                    onClick={item.onClick}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative bg-black/50 backdrop-blur-xl border border-white/10 rounded-xl p-4 flex items-center gap-3">
                      <span className="text-2xl">{item.icon}</span>
                      <span className="text-white font-medium">{item.label}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RadialMenu;
