'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigation = [
  {
    title: 'Getting Started',
    items: [
      { title: 'Introduction', href: '/intro' },
      { title: 'Quick Start', href: '/quick-start' },
    ],
  },
  {
    title: 'Features',
    items: [
      { title: 'Net Worth Dashboard', href: '/features/net-worth' },
      { title: 'Credit Card Optimizer', href: '/features/credit-cards' },
      { title: 'Tax Optimization', href: '/features/taxes' },
      { title: 'Travel Points', href: '/features/travel-points' },
    ],
  },
  {
    title: 'Configuration',
    items: [
      { title: 'Settings', href: '/configuration/settings' },
      { title: 'Customization', href: '/configuration/customization' },
    ],
  },
  {
    title: 'Reference',
    items: [
      { title: 'Sheet Structure', href: '/reference/structure' },
      { title: 'Formulas', href: '/reference/formulas' },
      { title: 'Troubleshooting', href: '/reference/troubleshooting' },
    ],
  },
];

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 z-50 p-4 bg-[var(--primary)] text-[var(--primary-foreground)] rounded-full shadow-lg"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsOpen(false)}
          />
          <nav className="fixed inset-y-0 left-0 w-72 bg-[var(--background)] z-50 overflow-y-auto p-6 shadow-xl">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg" />
              <span className="font-bold text-lg">WealthTrack Pro</span>
            </div>

            <div className="space-y-6">
              {navigation.map((section) => (
                <div key={section.title}>
                  <h3 className="font-semibold text-sm text-[var(--muted-foreground)] uppercase tracking-wider mb-2">
                    {section.title}
                  </h3>
                  <ul className="space-y-1">
                    {section.items.map((item) => {
                      const isActive = pathname === item.href;
                      return (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className={`block px-3 py-2 rounded-md text-sm transition-colors ${
                              isActive
                                ? 'bg-[var(--primary)] text-[var(--primary-foreground)] font-medium'
                                : 'text-[var(--foreground)] hover:bg-[var(--muted)]'
                            }`}
                          >
                            {item.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </nav>
        </>
      )}
    </div>
  );
}
