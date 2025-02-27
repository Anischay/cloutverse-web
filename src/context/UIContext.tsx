'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface UIContextType {
  showNavbar: boolean;
  setShowNavbar: (show: boolean) => void;
}

const UIContext = createContext<UIContextType | undefined>(undefined);

export function UIProvider({ children }: { children: ReactNode }) {
  const [showNavbar, setShowNavbar] = useState(true);

  return (
    <UIContext.Provider value={{ showNavbar, setShowNavbar }}>
      {children}
    </UIContext.Provider>
  );
}

export function useUI() {
  const context = useContext(UIContext);
  if (context === undefined) {
    throw new Error('useUI must be used within a UIProvider');
  }
  return context;
}
