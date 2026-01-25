'use client';

import { CodeBlock } from '@/components/CodeBlock';

export default function FormulasPage() {
  return (
    <article className="prose">
      <h1>Formulas Reference</h1>
      <p>Key formulas used in WealthTrack Pro.</p>

      <h2>Net Worth Calculation</h2>
      <CodeBlock
        language="text"
        code={`=SUM(Assets) - SUM(Liabilities)`}
      />

      <h2>Monthly Change</h2>
      <CodeBlock
        language="text"
        code={`=(CurrentMonth - PreviousMonth) / PreviousMonth * 100`}
      />

      <h2>Quarterly Tax Estimate</h2>
      <CodeBlock
        language="text"
        code={`=(TaxableIncome * TaxRate) / 4`}
      />

      <h2>Point Valuation</h2>
      <CodeBlock
        language="text"
        code={`=PointBalance * (CentsPerPoint / 100)`}
      />
    </article>
  );
}
