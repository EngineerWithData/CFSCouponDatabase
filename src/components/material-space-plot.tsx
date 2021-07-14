import * as React from 'react';
import { CartesianGrid, Scatter, Tooltip, XAxis, YAxis } from "recharts"
import { ScatterChart } from "recharts/src/chart/ScatterChart"

function MaterialSpacePlot({ dataSet, onClick: handleOnClick}) {

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
      <Tooltip cursor={false} />
      <Scatter
        name="Steel space"
        data={dataSet}
        onClick={handleOnClick}
      />
    </ScatterChart>
  );
}

export default MaterialSpacePlot;