import * as React from 'react';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { getCurve } from "../../utils/getCurve"

function StressStrainPlot({ dataSet, couponKey, onClick: handleOnClick, xLabel, yLabel, xDomain, yDomain, toolTip} ) {

  const couponData = dataSet.find(item => item.index === couponKey);

  return (
    <ResponsiveContainer width="100%" aspect={2}>
      <LineChart
        margin={{
          top: 50,
          right: 50,
          bottom: 50,
          left: 50,
        }}
        onClick={handleOnClick}
      >
        <CartesianGrid />
        <XAxis
          type="number"
          name="Strain"
          dataKey="epsilon"
          label={{
            value: xLabel,
            position: "bottom",
            fontSize: "1.25em",
            fill: "rgba(107, 114, 128)"
          }}
          minTickGap={0.05}
          interval="preserveEnd"
          domain={xDomain}
          allowDataOverflow={true}
        />
        <YAxis
          name="Stress"
          label={{
            value: yLabel,
            position: "left",
            angle: -90,
            fontSize: "1.25em",
            fill: "rgba(107, 114, 128)"
          }}
          scale="linear"
          allowDecimals={false}
          domain={yDomain}
          allowDataOverflow={true}
        />
          <Line
            name={couponData.name}
            data={getCurve(couponData.engCurve)}
            dataKey="sigma"
            dot={false}
            strokeWidth={4}
            stroke="rgba(55, 48, 163)"
            isAnimationActive={true}
          />
        {toolTip}
        <Legend verticalAlign="top" height={48}/>
      </LineChart>
    </ResponsiveContainer>
  );
}

export default StressStrainPlot;