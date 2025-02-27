import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import '@/styles/portal.css';

interface PortalFrameProps {
  children: ReactNode;
  className?: string;
  glowIntensity?: 'low' | 'medium' | 'high';
  isInteractive?: boolean;
}

export const PortalFrame = ({
  children,
  className = '',
  glowIntensity = 'medium',
  isInteractive = true,
}: PortalFrameProps) => {
  const glowStyles = {
    low: 'opacity-30',
    medium: 'opacity-50',
    high: 'opacity-70',
  };

  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {/* Cosmic Background */}
      <div className="absolute inset-0 cosmic-dots opacity-20" />
      
      {/* Portal Ring */}
      <div className={`absolute inset-0 portal-ring ${glowStyles[glowIntensity]}`}>
        <div className="absolute inset-0 portal-gradient rounded-lg" />
      </div>

      {/* Content Container */}
      <motion.div
        className={`
          relative z-10 portal-card rounded-lg p-6
          ${isInteractive ? 'cursor-pointer hover:scale-[1.02] transition-transform' : ''}
        `}
        whileHover={isInteractive ? { y: -5 } : {}}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        {/* Energy Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`
                absolute w-2 h-2 rounded-full bg-purple-500 energy-particle
                opacity-30 pointer-events-none
              `}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </div>

        {/* Main Content */}
        <div className="relative z-20">
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PortalFrame;
