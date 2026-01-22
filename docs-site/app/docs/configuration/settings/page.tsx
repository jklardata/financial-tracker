'use client';

import { CodeBlock } from '@/components/CodeBlock';

export default function SettingsPage() {
  return (
    <article className="prose">
      <h1>Settings</h1>

      <p>Customize your tracker in the Settings sheet.</p>

      <h2>Configuration Options</h2>

      <CodeBlock
        language="yaml"
        code={`# User Preferences
currency: USD
date_format: MM/DD/YYYY
fiscal_year_start: January

# Tax Settings
filing_status: single  # single, married_joint, married_separate
state: California
estimated_tax_rate: 0.32

# Display Settings
show_cents: false
dark_mode: false`}
      />

      <h2>Available Options</h2>

      <table>
        <thead>
          <tr>
            <th>Setting</th>
            <th>Options</th>
            <th>Default</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Currency</td><td>USD, EUR, GBP, etc.</td><td>USD</td></tr>
          <tr><td>Date Format</td><td>MM/DD/YYYY, DD/MM/YYYY, YYYY-MM-DD</td><td>MM/DD/YYYY</td></tr>
          <tr><td>Filing Status</td><td>single, married_joint, married_separate</td><td>single</td></tr>
          <tr><td>Show Cents</td><td>true, false</td><td>false</td></tr>
        </tbody>
      </table>
    </article>
  );
}
