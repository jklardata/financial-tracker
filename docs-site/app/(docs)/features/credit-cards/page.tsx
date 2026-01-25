'use client';

import { CodeBlock } from '@/components/CodeBlock';

export default function CreditCardsPage() {
  return (
    <article className="prose">
      <h1>Credit Card Optimizer</h1>

      <p>
        Track sign-up bonuses, spending requirements, and annual fees. Never miss a bonus deadline or overpay for cards again.
      </p>

      <h2>Tracking Your Cards</h2>

      <p>For each credit card, track:</p>

      <CodeBlock
        language="typescript"
        code={`interface CreditCard {
  name: string;
  issuer: string;
  annualFee: number;
  nextFeeDate: Date;
  signupBonus: number;
  spendRequirement: number;
  spendDeadline: Date;
  currentSpend: number;
  keepOrCancel: 'keep' | 'cancel' | 'downgrade';
}`}
      />

      <h2>Bonus Tracking</h2>

      <p>The optimizer alerts you when:</p>

      <ul>
        <li>Sign-up bonus deadlines approach</li>
        <li>You&apos;re behind on minimum spend</li>
        <li>Annual fee renewal is coming</li>
        <li>A card should be cancelled or downgraded</li>
      </ul>

      <h2>Example: Adding a New Card</h2>

      <CodeBlock
        language="text"
        code={`Card Name:        Chase Sapphire Preferred
Annual Fee:       $95
Sign-up Bonus:    60,000 points
Spend Required:   $4,000
Spend Deadline:   2025-04-15`}
      />

      <h2>Decision Framework</h2>

      <table>
        <thead>
          <tr>
            <th>Scenario</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Card value &gt; annual fee</td>
            <td>Keep</td>
          </tr>
          <tr>
            <td>Card has no-fee downgrade</td>
            <td>Downgrade</td>
          </tr>
          <tr>
            <td>Card value &lt; annual fee</td>
            <td>Cancel</td>
          </tr>
        </tbody>
      </table>
    </article>
  );
}
