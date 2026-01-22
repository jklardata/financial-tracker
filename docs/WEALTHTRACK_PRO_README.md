# WealthTrack Pro

The ultimate financial tracking spreadsheet for independent consultants and travel hackers who optimize everything.

## Overview

WealthTrack Pro is a comprehensive Google Sheets/Excel template designed specifically for consultants, freelancers, and financially-savvy individuals who want complete visibility into their finances.

### Key Features

- **Net Worth Dashboard** - Real-time tracking across all accounts
- **Credit Card Optimizer** - Track bonuses, annual fees, and optimal card usage
- **Tax Optimization Engine** - Quarterly estimates and deduction tracking
- **Travel Points Tracker** - Monitor miles, points, and redemption values
- **Income & Expense Tracking** - Categorized spending with profit margins
- **Investment Portfolio View** - Asset allocation and rebalancing alerts

## System Requirements

| Platform | Version |
|----------|---------|
| Google Sheets | Any modern browser |
| Microsoft Excel | 2016 or later |
| macOS Numbers | Not supported |

## Installation

### Google Sheets (Recommended)

1. Purchase and download from Gumroad
2. Open the `.xlsx` file in Google Drive
3. Click **File > Save as Google Sheets**
4. Make a copy for your personal use

### Microsoft Excel

1. Download the `.xlsx` file
2. Open in Excel 2016 or later
3. Enable macros if prompted
4. Save to your preferred location

## Sheet Structure

```
WealthTrack_Pro.xlsx
├── Dashboard          # Main overview with key metrics
├── Net Worth          # Asset and liability tracking
├── Credit Cards       # Card management and optimization
├── Travel Points      # Miles and points tracker
├── Income             # Revenue by client/source
├── Expenses           # Categorized spending
├── Taxes              # Quarterly estimates and deductions
├── Investments        # Portfolio allocation
└── Settings           # Configuration and preferences
```

## Dashboard Overview

The Dashboard sheet provides a bird's-eye view of your financial health:

```
┌─────────────────────────────────────────────────────────┐
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
└─────────────────────────────────────────────────────────┘
```

## Net Worth Tracking

### Adding Accounts

Navigate to the **Net Worth** sheet and add your accounts:

```javascript
// Example account structure
{
  "account_name": "Chase Checking",
  "type": "cash",
  "institution": "Chase",
  "balance": 15000,
  "last_updated": "2025-01-15"
}
```

### Supported Account Types

| Type | Examples |
|------|----------|
| Cash | Checking, Savings, Money Market |
| Investments | Brokerage, 401k, IRA, HSA |
| Real Estate | Primary residence, Rental properties |
| Crypto | Bitcoin, Ethereum, etc. |
| Other Assets | Vehicles, Collectibles |
| Liabilities | Mortgage, Student loans, Credit cards |

### Automatic Calculations

The sheet automatically calculates:

- Total assets and liabilities
- Net worth change (daily, monthly, yearly)
- Asset allocation percentages
- Liquid vs. illiquid breakdown

## Credit Card Optimizer

### Tracking Your Cards

For each credit card, track:

```typescript
interface CreditCard {
  name: string;
  issuer: string;
  annualFee: number;
  nextFeeDate: Date;
  signupBonus: number;
  spendRequirement: number;
  spendDeadline: Date;
  currentSpend: number;
  keepOrCancel: 'keep' | 'cancel' | 'downgrade';
}
```

### Bonus Tracking

The optimizer alerts you when:

- Sign-up bonus deadlines approach
- You're behind on minimum spend
- Annual fee renewal is coming
- A card should be cancelled or downgraded

### Example: Adding a New Card

```
Card Name:        Chase Sapphire Preferred
Annual Fee:       $95
Sign-up Bonus:    60,000 points
Spend Required:   $4,000
Spend Deadline:   2025-04-15
```

## Tax Optimization

### Quarterly Estimates

The Tax sheet calculates quarterly estimated taxes based on:

```python
def calculate_quarterly_tax(income, deductions, tax_rate):
    taxable_income = income - deductions
    quarterly_tax = (taxable_income * tax_rate) / 4
    return quarterly_tax
```

### Deduction Categories

Track deductions across categories:

- Home office expenses
- Business travel
- Software and subscriptions
- Professional development
- Health insurance (self-employed)
- Retirement contributions
- Vehicle expenses (mileage or actual)

### S-Corp Salary Optimization

For S-Corp owners, the Complete tier includes:

```
Optimal Salary Calculator
─────────────────────────
Business Revenue:     $250,000
Reasonable Salary:    $85,000
Distributions:        $165,000
Self-Employment Saved: $12,648
```

## Travel Points Tracker

### Point Valuations

Default point values (customizable):

| Program | Value (cents) |
|---------|---------------|
| Chase Ultimate Rewards | 2.0 |
| Amex Membership Rewards | 2.0 |
| Capital One Miles | 1.5 |
| United Miles | 1.3 |
| Delta SkyMiles | 1.2 |
| Marriott Bonvoy | 0.8 |
| Hilton Honors | 0.5 |

### Transfer Partners

Track optimal transfer ratios:

```json
{
  "chase_ur": {
    "united": "1:1",
    "hyatt": "1:1",
    "southwest": "1:1"
  },
  "amex_mr": {
    "delta": "1:1",
    "hilton": "1:2",
    "marriott": "1:1"
  }
}
```

## Configuration

### Settings Sheet

Customize your tracker in the Settings sheet:

```yaml
# User Preferences
currency: USD
date_format: MM/DD/YYYY
fiscal_year_start: January

# Tax Settings
filing_status: single  # single, married_joint, married_separate
state: California
estimated_tax_rate: 0.32

# Display Settings
show_cents: false
dark_mode: false
```

## Data Privacy

Your data never leaves your device:

- No cloud sync (unless you use Google Sheets)
- No external API calls
- No tracking or analytics
- 100% offline capable (Excel version)

## Support

- **Email**: support@wealthtrackpro.com
- **Documentation**: docs.wealthtrackpro.com
- **Updates**: Included free for life

## License

Personal use only. Do not redistribute or resell.

© 2025 WealthTrack Pro. All rights reserved.
