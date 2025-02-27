'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import IntroAnimation from '@/components/demo/IntroAnimation';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    // Check if user has access
    const hasAccess = localStorage.getItem('cloutverse_access') === 'granted';
    if (!hasAccess) {
      router.push('/');
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-black text-white">
      <IntroAnimation />
    </div>
  );
}
