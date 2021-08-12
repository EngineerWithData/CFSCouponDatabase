import * as React from 'react';
import { useState } from "react"
import MaterialSpacePlot from "./material-space-plot"
import StressStrainPlot from "./stress-strain-plot"
import { convertToMetricData } from "../../utils/convertToMetricData"
import SpaceTooltip from "./space-tooltip"
import { Tooltip } from "recharts"
import CurveTooltip from "./curve-tooltip"
import CFSRCLink from "./cfsrc-link"
import VersionTag from "./version-tag"

function DataPlayground({ className, dataSet, isMetric}) {

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
    <div className={`${className} w-screen relative mb-6`} id="playground">
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
          toolTip={<Tooltip content={CurveTooltip} isMetric={isMetric} />}
        />
      }
      <CFSRCLink className="absolute bottom-5 right-12"/>
      <VersionTag className="absolute top-26 right-14"/>
      <div className={`-mt-6 text-gray-400 px-14`}>
        Note: yield stress is determined by 0.2% offset
      </div>
    </div>
  )
}

export default DataPlayground