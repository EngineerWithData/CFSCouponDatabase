import * as React from 'react'
import { nanoid } from "nanoid"

function SpaceTooltip({ active, payload, isMetric }) {

  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-100 opacity-90 rounded p-2">
        <ul>
          <li key={nanoid(10)}>{`Steel type : ${payload[0].payload.steelType}`}</li>
          <li key={nanoid(10)}>{
            `${payload[0].name} : ${payload[0].value.toFixed(1)} 
            ${isMetric ? "MPa" : "ksi"}`}
          </li>
          <li key={nanoid()}>{`${payload[1].name} : ${payload[1].value.toFixed(2)}`}</li>
          <li key={nanoid(10)}>{`Source: ${payload[0].payload.dataSrc}`}</li>
          <li key={nanoid(10)} className="font-semibold">Click for stress-strain curve</li>
        </ul>
      </div>
    );
  }

  return null;
}

export default SpaceTooltip;
