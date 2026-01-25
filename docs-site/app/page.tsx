import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-4 py-16">
      <div className="text-center max-w-3xl mx-auto">
        <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl mx-auto mb-8" />

        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
          WealthTrack Pro Documentation
        </h1>

        <p className="text-xl text-[var(--muted-foreground)] mb-8 max-w-xl mx-auto">
          Everything you need to know about setting up and using WealthTrack Pro
          to optimize your finances.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/intro"
            className="px-8 py-3 bg-[var(--primary)] text-[var(--primary-foreground)] rounded-lg font-semibold hover:opacity-90 transition"
          >
            Read the Docs
          </Link>
          <Link
            href="/quick-start"
            className="px-8 py-3 bg-[var(--muted)] text-[var(--foreground)] rounded-lg font-semibold hover:bg-[var(--border)] transition"
          >
            Quick Start
          </Link>
        </div>

        <div className="mt-16 grid sm:grid-cols-3 gap-8 text-left">
          <div className="p-6 rounded-xl border border-[var(--border)]">
            <h3 className="font-semibold mb-2">Getting Started</h3>
            <p className="text-sm text-[var(--muted-foreground)]">
              Installation, setup, and initial configuration.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-[var(--border)]">
            <h3 className="font-semibold mb-2">Features</h3>
            <p className="text-sm text-[var(--muted-foreground)]">
              Deep dive into net worth, credit cards, taxes, and more.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-[var(--border)]">
            <h3 className="font-semibold mb-2">Reference</h3>
            <p className="text-sm text-[var(--muted-foreground)]">
              Formulas, sheet structure, and troubleshooting.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 max-w-md mx-auto">
          <div className="p-8 rounded-2xl border border-[var(--border)] bg-[var(--muted)]/30">
            <h2 className="text-2xl font-bold mb-2">Try WealthTrack</h2>
            <p className="text-[var(--muted-foreground)] mb-6">
              Start tracking your net worth and credit cards today.
            </p>
            <a
              href="https://app-eight-tau-65.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full px-6 py-3 bg-[var(--primary)] text-[var(--primary-foreground)] rounded-lg font-semibold hover:opacity-90 transition text-center"
            >
              Launch App
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
