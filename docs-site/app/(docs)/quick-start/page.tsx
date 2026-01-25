'use client';

import { CodeBlock } from '@/components/CodeBlock';

export default function QuickStartPage() {
  return (
    <article className="prose">
      <h1>Quick Start Guide</h1>

      <p>Get up and running with WealthTrack Pro in under 10 minutes.</p>

      <h2>Step 1: Download Your Files</h2>

      <p>After purchase, you&apos;ll receive an email with download links:</p>

      <CodeBlock
        language="bash"
        code={`# Files included in your purchase
WealthTrack_Pro_Starter.xlsx    # Starter tier
WealthTrack_Pro_Pro.xlsx        # Pro tier
WealthTrack_Pro_Complete.xlsx   # Complete tier`}
      />

      <p>Download the file that matches your purchase tier.</p>

      <h2>Step 2: Choose Your Platform</h2>

      <h3>Option A: Google Sheets (Recommended)</h3>

      <p>Google Sheets offers automatic cloud backup and access from any device.</p>

      <ol>
        <li>Go to <a href="https://drive.google.com" target="_blank" rel="noopener noreferrer">drive.google.com</a></li>
        <li>Click <strong>New &gt; File Upload</strong></li>
        <li>Select your downloaded <code>.xlsx</code> file</li>
        <li>Once uploaded, double-click to open</li>
        <li>Click <strong>Open with Google Sheets</strong></li>
        <li>Go to <strong>File &gt; Make a copy</strong> to create your working version</li>
      </ol>

      <CodeBlock
        language="text"
        code={`✓ Cloud backup
✓ Access anywhere
✓ Real-time sync
✓ Free to use`}
      />

      <h3>Option B: Microsoft Excel</h3>

      <ol>
        <li>Locate the downloaded file</li>
        <li>Double-click to open in Excel</li>
        <li>If prompted, click <strong>Enable Editing</strong></li>
        <li>Save to your preferred location</li>
      </ol>

      <h2>Step 3: Initial Setup</h2>

      <h3>Configure Your Settings</h3>

      <p>Navigate to the <strong>Settings</strong> sheet and fill in your information:</p>

      <CodeBlock
        language="javascript"
        code={`// Required settings
const settings = {
  // Personal Info
  name: "Your Name",
  currency: "USD",

  // Tax Configuration
  filingStatus: "single", // or "married_joint", "married_separate"
  state: "California",
  estimatedTaxRate: 0.32, // Your marginal tax rate

  // Display Preferences
  dateFormat: "MM/DD/YYYY",
  showCents: false
};`}
      />

      <h3>Set Your Baseline Net Worth</h3>

      <p>Go to the <strong>Net Worth</strong> sheet and add your accounts:</p>

      <table>
        <thead>
          <tr>
            <th>Account Name</th>
            <th>Type</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Chase Checking</td>
            <td>Cash</td>
            <td>$15,000</td>
          </tr>
          <tr>
            <td>Ally Savings</td>
            <td>Cash</td>
            <td>$50,000</td>
          </tr>
          <tr>
            <td>Fidelity 401k</td>
            <td>Investment</td>
            <td>$125,000</td>
          </tr>
          <tr>
            <td>Vanguard IRA</td>
            <td>Investment</td>
            <td>$45,000</td>
          </tr>
          <tr>
            <td>Primary Home</td>
            <td>Real Estate</td>
            <td>$450,000</td>
          </tr>
          <tr>
            <td>Mortgage</td>
            <td>Liability</td>
            <td>-$320,000</td>
          </tr>
        </tbody>
      </table>

      <p><strong>Your net worth will calculate automatically!</strong></p>

      <h2>Step 4: Add Your Credit Cards</h2>

      <p>Navigate to the <strong>Credit Cards</strong> sheet. For each card, enter:</p>

      <CodeBlock
        language="yaml"
        code={`# Example card entry
- name: Chase Sapphire Reserve
  issuer: Chase
  annual_fee: 550
  next_fee_date: 2025-06-01

  # Sign-up bonus tracking
  signup_bonus: 60000
  bonus_type: points
  spend_requirement: 4000
  spend_deadline: 2025-03-15
  current_spend: 2500

  # Status
  status: active
  action: keep`}
      />

      <h2>Step 5: Track Your First Month</h2>

      <h3>Adding Income</h3>

      <p>Go to the <strong>Income</strong> sheet and log your earnings:</p>

      <CodeBlock
        language="python"
        code={`# Income entry format
date = "2025-01-15"
source = "Acme Corp"           # Client name
type = "consulting"            # consulting, retainer, project, other
amount = 12500
invoice_number = "INV-2025-001"
status = "paid"                # pending, paid`}
      />

      <h3>Adding Expenses</h3>

      <p>Navigate to the <strong>Expenses</strong> sheet:</p>

      <CodeBlock
        language="python"
        code={`# Expense entry format
date = "2025-01-10"
vendor = "Adobe"
category = "software"          # See categories below
amount = 54.99
tax_deductible = True
notes = "Creative Cloud subscription"`}
      />

      <h3>Expense Categories</h3>

      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Examples</th>
            <th>Tax Deductible</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>software</td>
            <td>SaaS, tools</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>travel</td>
            <td>Flights, hotels</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>meals</td>
            <td>Client meals (50%)</td>
            <td>Partial</td>
          </tr>
          <tr>
            <td>office</td>
            <td>Supplies, equipment</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>professional</td>
            <td>Legal, accounting</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>education</td>
            <td>Courses, books</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>marketing</td>
            <td>Ads, website</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>personal</td>
            <td>Non-business</td>
            <td>No</td>
          </tr>
        </tbody>
      </table>

      <h2>Step 6: Review Your Dashboard</h2>

      <p>Return to the <strong>Dashboard</strong> sheet to see your financial overview:</p>

      <CodeBlock
        language="text"
        code={`┌────────────────────────────────────────────────────┐
│                    DASHBOARD                        │
├────────────────────────────────────────────────────┤
│                                                     │
│  NET WORTH           $365,000    ▲ +2.3% MTD       │
│                                                     │
│  MONTHLY INCOME      $12,500                       │
│  MONTHLY EXPENSES    $4,200                        │
│  SAVINGS RATE        66%                           │
│                                                     │
│  ─────────────────────────────────────────────     │
│                                                     │
│  CREDIT CARDS                                      │
│  ├─ Active cards: 5                                │
│  ├─ Pending bonuses: 2                             │
│  └─ Action needed: Cancel Amex Gold (Feb 15)      │
│                                                     │
│  QUARTERLY TAXES                                   │
│  └─ Q1 estimate: $8,400 (due Apr 15)              │
│                                                     │
└────────────────────────────────────────────────────┘`}
      />

      <h2>Keyboard Shortcuts</h2>

      <h3>Google Sheets</h3>

      <table>
        <thead>
          <tr>
            <th>Action</th>
            <th>Shortcut</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Navigate sheets</td>
            <td><code>Ctrl + Shift + Page Up/Down</code></td>
          </tr>
          <tr>
            <td>Insert row</td>
            <td><code>Ctrl + Shift + +</code></td>
          </tr>
          <tr>
            <td>Delete row</td>
            <td><code>Ctrl + -</code></td>
          </tr>
          <tr>
            <td>Find</td>
            <td><code>Ctrl + F</code></td>
          </tr>
          <tr>
            <td>Go to cell</td>
            <td><code>Ctrl + G</code></td>
          </tr>
        </tbody>
      </table>

      <h2>Next Steps</h2>

      <ol>
        <li><strong>Week 1</strong>: Enter all accounts and current balances</li>
        <li><strong>Week 2</strong>: Add credit cards and track spending</li>
        <li><strong>Week 3</strong>: Categorize last month&apos;s expenses</li>
        <li><strong>Week 4</strong>: Review dashboard and set goals</li>
      </ol>

      <hr />

      <p>
        <strong>Pro Tip</strong>: Update your balances weekly for the most accurate net worth tracking. Monthly updates work too, but weekly gives you better trend data.
      </p>
    </article>
  );
}
