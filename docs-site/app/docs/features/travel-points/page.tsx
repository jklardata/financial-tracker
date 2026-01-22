'use client';

import { CodeBlock } from '@/components/CodeBlock';

export default function TravelPointsPage() {
  return (
    <article className="prose">
      <h1>Travel Points Tracker</h1>

      <p>
        Track airline miles, hotel points, and transfer partners. Calculate optimal redemption values and never let points expire.
      </p>

      <h2>Point Valuations</h2>

      <p>Default point values (customizable):</p>

      <table>
        <thead>
          <tr>
            <th>Program</th>
            <th>Value (cents)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Chase Ultimate Rewards</td><td>2.0</td></tr>
          <tr><td>Amex Membership Rewards</td><td>2.0</td></tr>
          <tr><td>Capital One Miles</td><td>1.5</td></tr>
          <tr><td>United Miles</td><td>1.3</td></tr>
          <tr><td>Delta SkyMiles</td><td>1.2</td></tr>
          <tr><td>Marriott Bonvoy</td><td>0.8</td></tr>
          <tr><td>Hilton Honors</td><td>0.5</td></tr>
        </tbody>
      </table>

      <h2>Transfer Partners</h2>

      <p>Track optimal transfer ratios:</p>

      <CodeBlock
        language="json"
        code={`{
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
}`}
      />
    </article>
  );
}
