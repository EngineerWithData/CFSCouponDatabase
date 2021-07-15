import * as React from 'react'
import { nanoid } from "nanoid"

function CustomTooltip({ active, payload, label }) {

  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-100 opacity-90">
        <ul>
          <li key={nanoid()}>{`Steel type : ${payload[0].payload.steelType}`}</li>
          <li key={nanoid()}>{`${payload[0].name} : ${payload[0].value.toFixed(1)} ksi`}</li>
          <li key={nanoid()}>{`${payload[1].name} : ${payload[1].value.toFixed(2)}`}</li>
          <li key={nanoid()}>{`Source: ${payload[0].payload.dataSrc}`}</li>
        </ul>
      </div>
    );
  }

  return null;
}

export default CustomTooltip;
