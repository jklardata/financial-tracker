'use client';

import { CodeBlock } from '@/components/CodeBlock';

export default function StructurePage() {
  return (
    <article className="prose">
      <h1>Sheet Structure</h1>
      <p>Overview of all sheets in the WealthTrack Pro template.</p>

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

      <h2>Sheet Descriptions</h2>
      <table>
        <thead><tr><th>Sheet</th><th>Purpose</th></tr></thead>
        <tbody>
          <tr><td>Dashboard</td><td>High-level overview of all metrics</td></tr>
          <tr><td>Net Worth</td><td>Track all assets and liabilities</td></tr>
          <tr><td>Credit Cards</td><td>Manage cards, bonuses, and annual fees</td></tr>
          <tr><td>Travel Points</td><td>Track miles, points, and valuations</td></tr>
          <tr><td>Income</td><td>Log revenue by client or source</td></tr>
          <tr><td>Expenses</td><td>Categorize and track spending</td></tr>
          <tr><td>Taxes</td><td>Quarterly estimates and deductions</td></tr>
          <tr><td>Investments</td><td>Portfolio allocation and tracking</td></tr>
          <tr><td>Settings</td><td>Configure preferences and tax rates</td></tr>
        </tbody>
      </table>
    </article>
  );
}
