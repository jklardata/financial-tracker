'use client';

import { CodeBlock } from '@/components/CodeBlock';

export default function DocsPage() {
  return (
    <article className="prose">
      <h1>WealthTrack Pro</h1>

      <p>
        The ultimate financial tracking spreadsheet for independent consultants and travel hackers who optimize everything.
      </p>

      <h2>Overview</h2>

      <p>
        WealthTrack Pro is a comprehensive Google Sheets/Excel template designed specifically for consultants, freelancers, and financially-savvy individuals who want complete visibility into their finances.
      </p>

      <h3>Key Features</h3>

      <ul>
        <li><strong>Net Worth Dashboard</strong> - Real-time tracking across all accounts</li>
        <li><strong>Credit Card Optimizer</strong> - Track bonuses, annual fees, and optimal card usage</li>
        <li><strong>Tax Optimization Engine</strong> - Quarterly estimates and deduction tracking</li>
        <li><strong>Travel Points Tracker</strong> - Monitor miles, points, and redemption values</li>
        <li><strong>Income & Expense Tracking</strong> - Categorized spending with profit margins</li>
        <li><strong>Investment Portfolio View</strong> - Asset allocation and rebalancing alerts</li>
      </ul>

      <h2>System Requirements</h2>

      <table>
        <thead>
          <tr>
            <th>Platform</th>
            <th>Version</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Google Sheets</td>
            <td>Any modern browser</td>
          </tr>
          <tr>
            <td>Microsoft Excel</td>
            <td>2016 or later</td>
          </tr>
          <tr>
            <td>macOS Numbers</td>
            <td>Not supported</td>
          </tr>
        </tbody>
      </table>

      <h2>Installation</h2>

      <h3>Google Sheets (Recommended)</h3>

      <ol>
        <li>Purchase and download from Gumroad</li>
        <li>Open the <code>.xlsx</code> file in Google Drive</li>
        <li>Click <strong>File &gt; Save as Google Sheets</strong></li>
        <li>Make a copy for your personal use</li>
      </ol>

      <h3>Microsoft Excel</h3>

      <ol>
        <li>Download the <code>.xlsx</code> file</li>
        <li>Open in Excel 2016 or later</li>
        <li>Enable macros if prompted</li>
        <li>Save to your preferred location</li>
      </ol>

      <h2>Sheet Structure</h2>

      <CodeBlock
        language="text"
        filename="WealthTrack_Pro.xlsx"
        code={`WealthTrack_Pro.xlsx
├── Dashboard          # Main overview with key metrics
├── Net Worth          # Asset and liability tracking
├── Credit Cards       # Card management and optimization
├── Travel Points      # Miles and points tracker
├── Income             # Revenue by client/source
├── Expenses           # Categorized spending
├── Taxes              # Quarterly estimates and deductions
├── Investments        # Portfolio allocation
└── Settings           # Configuration and preferences`}
      />

      <h2>Dashboard Overview</h2>

      <p>
        The Dashboard sheet provides a bird&apos;s-eye view of your financial health:
      </p>

      <CodeBlock
        language="text"
        code={`┌─────────────────────────────────────────────────────────┐
│  NET WORTH        CARD REWARDS       TAX SAVED          │
│  $847,293         $18,420            $34,800            │
│  +12.4% YTD       This Year          Estimated          │
├─────────────────────────────────────────────────────────┤
│  Monthly Cash Flow    │    Net Worth Trend              │
│  ████████████ $12.4K  │    📈 [Chart]                   │
│  ████████ -$8.2K      │                                 │
├─────────────────────────────────────────────────────────┤
│  Upcoming             │    Credit Card Actions          │
│  • Q4 taxes due       │    • Cancel Card X (save $95)   │
│  • Amex bonus deadline│    • Hit spend on Card Y        │
└─────────────────────────────────────────────────────────┘`}
      />

      <h2>Data Privacy</h2>

      <p>Your data never leaves your device:</p>

      <ul>
        <li>No cloud sync (unless you use Google Sheets)</li>
        <li>No external API calls</li>
        <li>No tracking or analytics</li>
        <li>100% offline capable (Excel version)</li>
      </ul>

      <h2>Next Steps</h2>

      <p>
        Ready to get started? Head over to the <a href="/docs/quick-start">Quick Start Guide</a> to set up your tracker in under 10 minutes.
      </p>
    </article>
  );
}
