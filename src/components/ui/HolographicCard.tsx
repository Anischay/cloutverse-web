'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface HolographicCardProps {
  children: React.ReactNode;
  className?: string;
}

const HolographicCard = ({ children, className = '' }: HolographicCardProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      setMousePosition({ x, y });
    };

    const card = cardRef.current;
    if (card) {
      card.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (card) {
        card.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  const calcRotation = () => {
    if (!cardRef.current) return { x: 0, y: 0 };

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((mousePosition.x - centerX) / centerX) * 10;
    const rotateX = ((centerY - mousePosition.y) / centerY) * 10;

    return { x: rotateX, y: rotateY };
  };

  const rotation = calcRotation();

  return (
    <motion.div
      ref={cardRef}
      className={`relative group cursor-pointer ${className}`}
      animate={{
        rotateX: rotation.x,
        rotateY: rotation.y,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
    >
      {/* Holographic overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.15) 0%, transparent 50%)`,
        }}
      />

      {/* Rainbow border effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-xl opacity-0 group-hover:opacity-75 blur transition duration-300" />

      {/* Content container */}
      <div className="relative bg-black/50 backdrop-blur-xl border border-white/10 rounded-xl p-6">
        {/* Scanline effect */}
        <div className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none">
          <div className="absolute inset-0 scanline" />
        </div>

        {/* Actual content */}
        {children}
      </div>

      {/* Glare effect */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `linear-gradient(105deg, transparent 40%, rgba(255, 255, 255, 0.2) 45%, rgba(255, 255, 255, 0.3) 50%, rgba(255, 255, 255, 0.2) 55%, transparent 60%)`,
        }}
      />
    </motion.div>
  );
};

export default HolographicCard;
