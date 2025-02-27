import { ReactNode } from 'react';

export default function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
}
