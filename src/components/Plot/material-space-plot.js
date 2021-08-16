import * as React from 'react';
import { CartesianGrid, Legend, ResponsiveContainer, Scatter, XAxis, YAxis } from "recharts"
import { ScatterChart } from "recharts/src/chart/ScatterChart"
import chroma from "chroma-js"
import { nanoid } from "nanoid"

function MaterialSpacePlot({ dataSet, onClick: handleOnClick, xLabel, yLabel, xDomain, yDomain, toolTip}) {


  const steelTypes = Array.from(new Set(dataSet.map(item => item.steelType)));
  const dataBySteelType = steelTypes.reduce(
    (accum, cur) => {
      return {...accum, [cur]: dataSet.filter(item => item.steelType === cur)}
    }, {});

  return (
    <>
    <ResponsiveContainer width="100%" aspect={2}>
      <ScatterChart
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
          dataKey="Fy"
          name="Fy"
          label={{
            value: xLabel,
            position: "bottom",
            fontSize: "1.25em",
            fill: "rgba(107, 114, 128)",
          }}
          domain={xDomain} />
        <YAxis
          type="number"
          dataKey="eu"
          name="eu"
          label={{
            value: yLabel,
            position: "center",
            dx: -30,
            angle: -90,
            fontSize: "1.25em",
            fill: "rgba(107, 114, 128)",
          }}
          domain={yDomain}
        />
        {toolTip}
        {Object.keys(dataBySteelType).map((steel, index) =>
          <Scatter
            name={steel}
            data={dataBySteelType[steel]}
            fill={chroma.scale("RdYlBu").colors(steelTypes.length*2)[index*2]}
            fillOpacity={0.75}
            onClick={handleOnClick}
            key={nanoid()}
            isAnimationActive={true}
          />
        )}
        <Legend verticalAlign="top" height={48}/>
      </ScatterChart>
    </ResponsiveContainer>
    </>
  );
}

export default MaterialSpacePlot;