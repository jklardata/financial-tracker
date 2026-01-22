'use client';

import { CodeBlock } from '@/components/CodeBlock';

export default function NetWorthPage() {
  return (
    <article className="prose">
      <h1>Net Worth Dashboard</h1>

      <p>
        Track your complete financial picture with real-time net worth calculations across all your accounts.
      </p>

      <h2>Adding Accounts</h2>

      <p>Navigate to the <strong>Net Worth</strong> sheet and add your accounts:</p>

      <CodeBlock
        language="javascript"
        code={`// Example account structure
{
  "account_name": "Chase Checking",
  "type": "cash",
  "institution": "Chase",
  "balance": 15000,
  "last_updated": "2025-01-15"
}`}
      />

      <h2>Supported Account Types</h2>

      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Examples</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Cash</td>
            <td>Checking, Savings, Money Market</td>
          </tr>
          <tr>
            <td>Investments</td>
            <td>Brokerage, 401k, IRA, HSA</td>
          </tr>
          <tr>
            <td>Real Estate</td>
            <td>Primary residence, Rental properties</td>
          </tr>
          <tr>
            <td>Crypto</td>
            <td>Bitcoin, Ethereum, etc.</td>
          </tr>
          <tr>
            <td>Other Assets</td>
            <td>Vehicles, Collectibles</td>
          </tr>
          <tr>
            <td>Liabilities</td>
            <td>Mortgage, Student loans, Credit cards</td>
          </tr>
        </tbody>
      </table>

      <h2>Automatic Calculations</h2>

      <p>The sheet automatically calculates:</p>

      <ul>
        <li>Total assets and liabilities</li>
        <li>Net worth change (daily, monthly, yearly)</li>
        <li>Asset allocation percentages</li>
        <li>Liquid vs. illiquid breakdown</li>
      </ul>

      <h2>Best Practices</h2>

      <ol>
        <li><strong>Update weekly</strong> - More frequent updates give better trend data</li>
        <li><strong>Be consistent</strong> - Update on the same day each week</li>
        <li><strong>Include everything</strong> - Even small accounts add up</li>
        <li><strong>Track liabilities</strong> - They&apos;re just as important as assets</li>
      </ol>
    </article>
  );
}
