'use client';

import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

const Hero = dynamic(() => import('./Hero'), { 
  ssr: false,
  loading: () => <div>Loading...</div>
});

const CoreFeatures = dynamic(() => import('./sections/CoreFeatures'), {
  ssr: false,
  loading: () => <div>Loading...</div>
});

const LiveMetrics = dynamic(() => import('./sections/LiveMetrics'), {
  ssr: false,
  loading: () => <div>Loading...</div>
});

const CallToAction = dynamic(() => import('./sections/CallToAction'), {
  ssr: false,
  loading: () => <div>Loading...</div>
});

interface ClientWrapperProps {
  children: ReactNode;
}

export default function ClientWrapper({ children }: ClientWrapperProps) {
  return (
    <>
      <Hero />
      <CoreFeatures />
      <LiveMetrics />
      <CallToAction />
      {children}
    </>
  );
}
