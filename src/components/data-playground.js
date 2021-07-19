import * as React from 'react';
import { useState } from "react"
import MaterialSpacePlot from "./material-space-plot"
import StressStrainPlot from "./stress-strain-plot"
import { convertToMetricData } from "../utils/convertToMetricData"
import SpaceTooltip from "./space-tooltip"
import { Tooltip } from "recharts"
import CurveTooltip from "./curve-tooltip"

function DataPlayground({ dataSet, isMetric}) {

  const [chartMode, setChartMode] = useState(0);
  const [couponClicked, setCouponClicked] = useState(null);

  const handleOnClickScatter = (dataPt) => {
    setCouponClicked(dataPt.index);
    setChartMode(1);
  }

  const handleOnClickLine = () => {
    setCouponClicked(null);
    setChartMode(0);
  }

  return (
    <div className="relative">
      {chartMode === 0 ?
        <MaterialSpacePlot
          dataSet={isMetric ? dataSet.map(item => convertToMetricData(item)) : dataSet}
          onClick={handleOnClickScatter}
          xLabel={`Yield stress, Fy ${isMetric ? "(MPa)" : "(ksi)"}`}
          yLabel="Strain, eu"
          xDomain={isMetric ? [0, 1800] : ([0, 250])}
          yDomain={[0, 0.3]}
          toolTip={<Tooltip cursor={false} content={SpaceTooltip} isMetric={isMetric}/>}
        /> :
        <StressStrainPlot
          dataSet={isMetric ? dataSet.map(item => convertToMetricData(item)) : dataSet}
          couponKey={couponClicked}
          onClick={handleOnClickLine}
          xLabel="Strain"
          yLabel={`Stress ${isMetric ? "(MPa)" : "(ksi)"}`}
          xDomain={[0, 0.25]}
          yDomain={isMetric ? [0, 1800] : [0, 250]}
          toolTip={<Tooltip content={CurveTooltip} isMetric={isMetric} />}
        />
      }
    </div>
  );
}

export default DataPlayground;