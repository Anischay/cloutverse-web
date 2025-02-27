'use client';

import { useEffect, useRef } from 'react';

interface PortalSoundProps {
  play: boolean;
}

const PortalSound = ({ play }: PortalSoundProps) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (play && audioRef.current) {
      audioRef.current.volume = 0.5; // Set to 50% volume
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(err => console.log('Audio playback failed:', err));
    }
  }, [play]);

  return (
    <audio
      ref={audioRef}
      src="/sounds/portal-open.mp3"
      preload="auto"
    />
  );
};

export default PortalSound;
