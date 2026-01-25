'use client';

import { CodeBlock } from '@/components/CodeBlock';

export default function TaxesPage() {
  return (
    <article className="prose">
      <h1>Tax Optimization Engine</h1>

      <p>
        Calculate quarterly estimated taxes, track deductions, and optimize your S-corp salary.
      </p>

      <h2>Quarterly Estimates</h2>

      <p>The Tax sheet calculates quarterly estimated taxes based on:</p>

      <CodeBlock
        language="python"
        code={`def calculate_quarterly_tax(income, deductions, tax_rate):
    taxable_income = income - deductions
    quarterly_tax = (taxable_income * tax_rate) / 4
    return quarterly_tax`}
      />

      <h2>Deduction Categories</h2>

      <p>Track deductions across categories:</p>

      <ul>
        <li>Home office expenses</li>
        <li>Business travel</li>
        <li>Software and subscriptions</li>
        <li>Professional development</li>
        <li>Health insurance (self-employed)</li>
        <li>Retirement contributions</li>
        <li>Vehicle expenses (mileage or actual)</li>
      </ul>

      <h2>S-Corp Salary Optimization</h2>

      <p>For S-Corp owners, the Complete tier includes:</p>

      <CodeBlock
        language="text"
        code={`Optimal Salary Calculator
─────────────────────────
Business Revenue:     $250,000
Reasonable Salary:    $85,000
Distributions:        $165,000
Self-Employment Saved: $12,648`}
      />
    </article>
  );
}
