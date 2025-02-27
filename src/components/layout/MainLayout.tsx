'use client';

import { ReactNode, useEffect, useState } from 'react';
import Navbar from './Navbar';

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          const isDemoMode = document.documentElement.classList.contains('demo-mode');
          setShowNavbar(!isDemoMode);
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {showNavbar && <Navbar />}
      {children}
    </>
  );
}
