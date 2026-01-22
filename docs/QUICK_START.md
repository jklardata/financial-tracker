# Quick Start Guide

Get up and running with WealthTrack Pro in under 10 minutes.

## Step 1: Download Your Files

After purchase, you'll receive an email with download links:

```bash
# Files included in your purchase
WealthTrack_Pro_Starter.xlsx    # Starter tier
WealthTrack_Pro_Pro.xlsx        # Pro tier
WealthTrack_Pro_Complete.xlsx   # Complete tier
```

Download the file that matches your purchase tier.

## Step 2: Choose Your Platform

### Option A: Google Sheets (Recommended)

Google Sheets offers automatic cloud backup and access from any device.

1. Go to [drive.google.com](https://drive.google.com)
2. Click **New > File Upload**
3. Select your downloaded `.xlsx` file
4. Once uploaded, double-click to open
5. Click **Open with Google Sheets**
6. Go to **File > Make a copy** to create your working version

```
✓ Cloud backup
✓ Access anywhere
✓ Real-time sync
✓ Free to use
```

### Option B: Microsoft Excel

1. Locate the downloaded file
2. Double-click to open in Excel
3. If prompted, click **Enable Editing**
4. Save to your preferred location

```
✓ Works offline
✓ Faster performance
✓ No Google account needed
✗ Manual backups required
```

## Step 3: Initial Setup

### Configure Your Settings

Navigate to the **Settings** sheet and fill in your information:

```javascript
// Required settings
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
};
```

### Set Your Baseline Net Worth

Go to the **Net Worth** sheet and add your accounts:

| Account Name | Type | Balance |
|--------------|------|---------|
| Chase Checking | Cash | $15,000 |
| Ally Savings | Cash | $50,000 |
| Fidelity 401k | Investment | $125,000 |
| Vanguard IRA | Investment | $45,000 |
| Primary Home | Real Estate | $450,000 |
| Mortgage | Liability | -$320,000 |

**Your net worth will calculate automatically!**

## Step 4: Add Your Credit Cards

Navigate to the **Credit Cards** sheet. For each card, enter:

```yaml
# Example card entry
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
  action: keep
```

## Step 5: Track Your First Month

### Adding Income

Go to the **Income** sheet and log your earnings:

```python
# Income entry format
date = "2025-01-15"
source = "Acme Corp"           # Client name
type = "consulting"            # consulting, retainer, project, other
amount = 12500
invoice_number = "INV-2025-001"
status = "paid"                # pending, paid
```

### Adding Expenses

Navigate to the **Expenses** sheet:

```python
# Expense entry format
date = "2025-01-10"
vendor = "Adobe"
category = "software"          # See categories below
amount = 54.99
tax_deductible = True
notes = "Creative Cloud subscription"
```

### Expense Categories

| Category | Examples | Tax Deductible |
|----------|----------|----------------|
| software | SaaS, tools | Yes |
| travel | Flights, hotels | Yes |
| meals | Client meals (50%) | Partial |
| office | Supplies, equipment | Yes |
| professional | Legal, accounting | Yes |
| education | Courses, books | Yes |
| marketing | Ads, website | Yes |
| personal | Non-business | No |

## Step 6: Review Your Dashboard

Return to the **Dashboard** sheet to see your financial overview:

```
┌────────────────────────────────────────────────────┐
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
└────────────────────────────────────────────────────┘
```

## Common Tasks

### Update Account Balances

```
1. Go to Net Worth sheet
2. Find the account row
3. Update the "Current Balance" column
4. The date updates automatically
```

### Log a New Credit Card

```
1. Go to Credit Cards sheet
2. Add a new row at the bottom
3. Fill in all required fields
4. Dashboard updates automatically
```

### Record Quarterly Tax Payment

```
1. Go to Taxes sheet
2. Find the "Payments" section
3. Enter date and amount
4. Remaining balance recalculates
```

### Check Point Balances

```
1. Go to Travel Points sheet
2. Update current balances monthly
3. Review "Action Items" for expiring points
```

## Keyboard Shortcuts

### Google Sheets

| Action | Shortcut |
|--------|----------|
| Navigate sheets | `Ctrl + Shift + Page Up/Down` |
| Insert row | `Ctrl + Shift + +` |
| Delete row | `Ctrl + -` |
| Find | `Ctrl + F` |
| Go to cell | `Ctrl + G` |

### Excel

| Action | Shortcut |
|--------|----------|
| Navigate sheets | `Ctrl + Page Up/Down` |
| Insert row | `Ctrl + +` |
| Delete row | `Ctrl + -` |
| Find | `Ctrl + F` |
| Go to cell | `Ctrl + G` |

## Troubleshooting

### Formulas showing errors?

```
Problem: #REF! or #VALUE! errors
Solution: Don't delete rows with formulas.
          Use the designated input areas only.
```

### Dashboard not updating?

```
Problem: Dashboard shows old data
Solution:
  - Google Sheets: Refresh the page (F5)
  - Excel: Press Ctrl + Alt + F9 to force recalculate
```

### Can't edit cells?

```
Problem: "Protected cell" warning
Solution: Some cells are locked to prevent
          accidental formula changes. Edit
          only the white/unshaded cells.
```

## Next Steps

1. **Week 1**: Enter all accounts and current balances
2. **Week 2**: Add credit cards and track spending
3. **Week 3**: Categorize last month's expenses
4. **Week 4**: Review dashboard and set goals

## Getting Help

- **Video Tutorials**: youtube.com/@wealthtrackpro
- **Email Support**: support@wealthtrackpro.com
- **FAQ**: See the FAQ section on our website

---

**Pro Tip**: Update your balances weekly for the most accurate net worth tracking. Monthly updates work too, but weekly gives you better trend data.

Happy tracking! 🎯
