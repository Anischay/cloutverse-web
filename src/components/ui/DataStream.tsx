'use client';

import { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface Particle {
  x: number;
  y: number;
  speed: number;
  size: number;
  color: string;
}

const DataStream = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const controls = useAnimation();

  const createParticle = (): Particle => ({
    x: Math.random() * window.innerWidth,
    y: -10,
    speed: 1 + Math.random() * 3,
    size: 1 + Math.random() * 2,
    color: `hsla(${220 + Math.random() * 40}, 100%, 70%, ${0.3 + Math.random() * 0.4})`
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Initialize particles
    for (let i = 0; i < 100; i++) {
      particles.current.push(createParticle());
    }

    let animationFrameId: number;

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.current.forEach((particle, index) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        // Update particle position
        particle.y += particle.speed;

        // Reset particle when it goes off screen
        if (particle.y > canvas.height) {
          particles.current[index] = createParticle();
        }

        // Add connections between nearby particles
        particles.current.forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(147, 51, 234, ${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <motion.canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
  );
};

export default DataStream;
