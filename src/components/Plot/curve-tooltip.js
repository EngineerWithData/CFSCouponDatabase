import * as React from 'react'
import { nanoid } from "nanoid"

function CurveTooltip({ active, payload, isMetric }) {

  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-100 opacity-90 rounded p-2">
        <ul>
          <li key={nanoid(8)}>{`Name: ${payload[0].name}`}</li>
          <li key={nanoid(8)}>{`Strain: ${payload[0].payload.epsilon.toFixed(2)}`}</li>
          <li key={nanoid(8)}>{`Stress: ${payload[0].payload.sigma.toFixed(1)} 
            ${isMetric ? "(MPa)" : "(ksi)"}`}</li>
          <li key={nanoid(10)} className="font-semibold">Click anywhere to go back</li>
        </ul>
      </div>
    );
  }

  return null;
}

export default CurveTooltip;
