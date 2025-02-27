'use client';

import { useEffect, useCallback } from 'react';

interface PortalSoundGeneratorProps {
  play: boolean;
}

const PortalSoundGenerator = ({ play }: PortalSoundGeneratorProps) => {
  const generatePortalSound = useCallback(() => {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    
    // Create oscillator for the main "whoosh" sound
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    // Create filter for sci-fi effect
    const filter = audioContext.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 1000;
    filter.Q.value = 10;
    
    // Connect nodes
    oscillator.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    // Set initial values
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    
    // Start sound
    oscillator.start();
    
    // Create the portal opening effect
    oscillator.frequency.exponentialRampToValueAtTime(2000, audioContext.currentTime + 0.5);
    gainNode.gain.linearRampToValueAtTime(0.3, audioContext.currentTime + 0.1);
    gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + 1.5);
    filter.frequency.exponentialRampToValueAtTime(3000, audioContext.currentTime + 1);
    
    // Stop and clean up
    setTimeout(() => {
      oscillator.stop();
      oscillator.disconnect();
      gainNode.disconnect();
      filter.disconnect();
      audioContext.close();
    }, 2000);
  }, []);

  useEffect(() => {
    if (play) {
      generatePortalSound();
    }
  }, [play, generatePortalSound]);

  return null;
};

export default PortalSoundGenerator;
