'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

interface SearchResult {
  title: string;
  href: string;
  section: string;
  content: string;
}

const searchData: SearchResult[] = [
  { title: 'Introduction', href: '/docs', section: 'Getting Started', content: 'Overview of WealthTrack Pro financial tracker' },
  { title: 'Quick Start', href: '/docs/quick-start', section: 'Getting Started', content: 'Get up and running in 10 minutes setup guide' },
  { title: 'Net Worth Dashboard', href: '/docs/features/net-worth', section: 'Features', content: 'Track assets liabilities real-time net worth' },
  { title: 'Credit Card Optimizer', href: '/docs/features/credit-cards', section: 'Features', content: 'Track bonuses annual fees sign-up rewards' },
  { title: 'Tax Optimization', href: '/docs/features/taxes', section: 'Features', content: 'Quarterly estimates deductions S-Corp salary' },
  { title: 'Travel Points', href: '/docs/features/travel-points', section: 'Features', content: 'Miles points transfer partners redemption' },
  { title: 'Settings', href: '/docs/configuration/settings', section: 'Configuration', content: 'Configure preferences currency tax rate' },
  { title: 'Customization', href: '/docs/configuration/customization', section: 'Configuration', content: 'Customize categories formulas layout' },
  { title: 'Sheet Structure', href: '/docs/reference/structure', section: 'Reference', content: 'Dashboard Net Worth Credit Cards sheets' },
  { title: 'Formulas', href: '/docs/reference/formulas', section: 'Reference', content: 'Excel Google Sheets formulas calculations' },
  { title: 'Troubleshooting', href: '/docs/reference/troubleshooting', section: 'Reference', content: 'Fix errors common problems solutions' },
];

export function Search() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
      return;
    }

    const lowerQuery = query.toLowerCase();
    const filtered = searchData.filter(
      item =>
        item.title.toLowerCase().includes(lowerQuery) ||
        item.content.toLowerCase().includes(lowerQuery) ||
        item.section.toLowerCase().includes(lowerQuery)
    );
    setResults(filtered);
  }, [query]);

  const handleSelect = (href: string) => {
    router.push(href);
    setIsOpen(false);
    setQuery('');
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-3 py-1.5 text-sm text-[var(--muted-foreground)] bg-[var(--muted)] rounded-md hover:bg-[var(--border)] transition-colors"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <span>Search docs...</span>
        <kbd className="hidden sm:inline-flex items-center px-1.5 py-0.5 text-xs bg-[var(--background)] rounded border border-[var(--border)]">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh]">
          <div
            className="fixed inset-0 bg-black/50"
            onClick={() => setIsOpen(false)}
          />
          <div className="relative w-full max-w-lg bg-[var(--background)] rounded-xl shadow-2xl border border-[var(--border)] overflow-hidden">
            <div className="flex items-center px-4 border-b border-[var(--border)]">
              <svg className="w-5 h-5 text-[var(--muted-foreground)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search documentation..."
                className="flex-1 px-3 py-4 bg-transparent outline-none text-[var(--foreground)] placeholder-[var(--muted-foreground)]"
              />
              <kbd className="px-2 py-1 text-xs text-[var(--muted-foreground)] bg-[var(--muted)] rounded">
                ESC
              </kbd>
            </div>

            {results.length > 0 && (
              <ul className="max-h-80 overflow-y-auto p-2">
                {results.map((result) => (
                  <li key={result.href}>
                    <button
                      onClick={() => handleSelect(result.href)}
                      className="w-full text-left px-4 py-3 rounded-lg hover:bg-[var(--muted)] transition-colors"
                    >
                      <div className="text-xs text-[var(--primary)] font-medium mb-1">
                        {result.section}
                      </div>
                      <div className="font-medium text-[var(--foreground)]">
                        {result.title}
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            )}

            {query && results.length === 0 && (
              <div className="p-8 text-center text-[var(--muted-foreground)]">
                No results found for &ldquo;{query}&rdquo;
              </div>
            )}

            {!query && (
              <div className="p-4 text-sm text-[var(--muted-foreground)]">
                <p className="mb-2">Quick links:</p>
                <div className="flex flex-wrap gap-2">
                  {['Quick Start', 'Net Worth', 'Credit Cards', 'Taxes'].map((term) => (
                    <button
                      key={term}
                      onClick={() => setQuery(term)}
                      className="px-2 py-1 bg-[var(--muted)] rounded hover:bg-[var(--border)] transition-colors"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
