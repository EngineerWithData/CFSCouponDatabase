import * as React from 'react';
import { CartesianGrid, Scatter, Tooltip, XAxis, YAxis } from "recharts"
import { ScatterChart } from "recharts/src/chart/ScatterChart"
import chroma from "chroma-js"
import CustomTooltip from "./custom-tooltip"

function MaterialSpacePlot({ dataSet, onClick: handleOnClick}) {

  const steelTypes = Array.from(new Set(dataSet.map(item => item.steelType)));
  const dataBySteelType = steelTypes.reduce(
    (accum, cur: string) => {
      return {...accum, [cur]: dataSet.filter(item => item.steelType === cur)}
    }, {});

  return (
    <ScatterChart
      width={600}
      height={400}
      margin={{
        top: 30,
        right: 30,
        bottom: 30,
        left: 30,
      }}
    >
      <CartesianGrid />
      <XAxis
        type="number"
        dataKey="Fy"
        name="Fy"
        label={{ value: "Yield stress, Fy (ksi)", position: "bottom" }}
        domain={[0, 300]} />
      <YAxis
        type="number"
        dataKey="eu"
        name="eu"
        label={{
          value: "Strain, eu",
          position: "left",
          angle: -90,
          dy: -80
        }}
        domain={[0, 0.3]}
      />
      <Tooltip cursor={false} content={CustomTooltip}/>
      {Object.keys(dataBySteelType).map((item, index) =>
        <Scatter
          name={item}
          data={dataBySteelType[item]}
          fill={chroma.scale("RdYlBu").colors(steelTypes.length)[index]}
          onClick={handleOnClick}
        />
      )}
    </ScatterChart>
  );
}

export default MaterialSpacePlot;