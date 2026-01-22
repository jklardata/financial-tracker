'use client';

import { CodeBlock } from '@/components/CodeBlock';

export default function TroubleshootingPage() {
  return (
    <article className="prose">
      <h1>Troubleshooting</h1>
      <p>Common issues and how to fix them.</p>

      <h2>Formulas showing errors?</h2>
      <CodeBlock
        language="text"
        code={`Problem: #REF! or #VALUE! errors
Solution: Don't delete rows with formulas.
          Use the designated input areas only.`}
      />

      <h2>Dashboard not updating?</h2>
      <CodeBlock
        language="text"
        code={`Problem: Dashboard shows old data
Solution:
  - Google Sheets: Refresh the page (F5)
  - Excel: Press Ctrl + Alt + F9 to force recalculate`}
      />

      <h2>Can&apos;t edit cells?</h2>
      <CodeBlock
        language="text"
        code={`Problem: "Protected cell" warning
Solution: Some cells are locked to prevent
          accidental formula changes. Edit
          only the white/unshaded cells.`}
      />

      <h2>File won&apos;t open?</h2>
      <ul>
        <li>Ensure you have Excel 2016+ or use Google Sheets</li>
        <li>Try re-downloading the file</li>
        <li>Check that the file extension is .xlsx</li>
      </ul>

      <h2>Still having issues?</h2>
      <p>Contact support at <strong>support@wealthtrackpro.com</strong></p>
    </article>
  );
}
