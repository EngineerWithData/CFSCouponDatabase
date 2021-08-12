import * as React from 'react';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { getCurve } from "../../utils/getCurve"
import { getDomain } from "../../utils/getDomain"

function StressStrainPlot({ dataSet, couponKey, onClick: handleOnClick, xLabel, yLabel, toolTip} ) {

  const couponData = dataSet.find(item => item.index === couponKey);
  const curve = getCurve(couponData.engCurve);
  const graphDomain = getDomain(couponData.engCurve);

  return (
    <>
    <ResponsiveContainer width="100%" aspect={2}>
      <LineChart
        margin={{
          top: 50,
          right: 50,
          bottom: 50,
          left: 50,
        }}
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
          domain={[0, graphDomain.x]}
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
          domain={[0, graphDomain.y]}
          allowDataOverflow={true}
        />
          <Line
            name={couponData.name}
            data={curve}
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
      <button
        className={`
        absolute left-24 sm:left-32 top-16 sm:top-28
        inline-flex items-center hover:bg-gray-700
        text-sm md:text-base
        px-2 py-1 rounded-full bg-gray-400 text-white`}
        onClick={handleOnClick}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="hidden md:inline mr-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
        <span>Go back</span>
      </button>
    </>
  );
}

export default StressStrainPlot;