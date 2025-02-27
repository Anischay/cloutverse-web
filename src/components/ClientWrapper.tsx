'use client';

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

export default function ClientWrapper() {
  return (
    <>
      <Hero />
      <CoreFeatures />
      <LiveMetrics />
      <CallToAction />
    </>
  );
}
