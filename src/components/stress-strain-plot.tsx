import * as React from 'react';
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"


function StressStrainPlot({ couponData, onClick: handleOnClick} ) {

  return (
    <LineChart
      width={600}
      height={400}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20,
      }}
      onClick={handleOnClick}
    >
      <CartesianGrid />
      <XAxis
        type="number"
        name="Strain"
        dataKey="epsilon"
        label={{
          value: "Strain",
          position: "bottom"
        }}
        minTickGap={0.05}
        interval="preserveEnd"
        domain={[0, 0.25]}
      />
      <YAxis
        name="Stress"
        label={{
          value: "Stress (ksi)",
          position: "left",
          angle: -90
        }}
        scale="linear"
        allowDecimals={false}
        domain={[0, 250]} />
        <Line
          data={couponData.engCurve.map(pt => {
            return { epsilon: pt[0], sigma: pt[1] }
          })}
          dataKey="sigma"
          dot={false}
        />
    </LineChart>
  );
}

export default StressStrainPlot;