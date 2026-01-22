'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItem {
  title: string;
  href: string;
  items?: NavItem[];
}

const navigation: NavItem[] = [
  {
    title: 'Getting Started',
    href: '/docs',
    items: [
      { title: 'Introduction', href: '/docs' },
      { title: 'Quick Start', href: '/docs/quick-start' },
    ],
  },
  {
    title: 'Features',
    href: '/docs/features',
    items: [
      { title: 'Net Worth Dashboard', href: '/docs/features/net-worth' },
      { title: 'Credit Card Optimizer', href: '/docs/features/credit-cards' },
      { title: 'Tax Optimization', href: '/docs/features/taxes' },
      { title: 'Travel Points', href: '/docs/features/travel-points' },
    ],
  },
  {
    title: 'Configuration',
    href: '/docs/configuration',
    items: [
      { title: 'Settings', href: '/docs/configuration/settings' },
      { title: 'Customization', href: '/docs/configuration/customization' },
    ],
  },
  {
    title: 'Reference',
    href: '/docs/reference',
    items: [
      { title: 'Sheet Structure', href: '/docs/reference/structure' },
      { title: 'Formulas', href: '/docs/reference/formulas' },
      { title: 'Troubleshooting', href: '/docs/reference/troubleshooting' },
    ],
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 flex-shrink-0 border-r border-[var(--border)] bg-[var(--background)] h-[calc(100vh-4rem)] overflow-y-auto sticky top-16">
      <nav className="p-4 space-y-6">
        {navigation.map((section) => (
          <div key={section.title}>
            <h3 className="font-semibold text-sm text-[var(--muted-foreground)] uppercase tracking-wider mb-2">
              {section.title}
            </h3>
            {section.items && (
              <ul className="space-y-1">
                {section.items.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
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
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
}
