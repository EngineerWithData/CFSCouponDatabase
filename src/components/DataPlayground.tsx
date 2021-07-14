import * as React from 'react';
import { useState } from "react"
import MaterialSpacePlot from "./material-space-plot"
import StressStrainPlot from "./stress-strain-plot"

function DataPlayground({ dataSet }) {

  const [chartMode, setChartMode] = useState(0);
  const [couponClicked, setCouponClicked] = useState(null);

  const handleOnClickScatter = (dataPt) => {
    setCouponClicked(dataPt);
    setChartMode(1);
  }

  const handleOnClickLine = () => {
    setCouponClicked(null);
    setChartMode(0);
  }

  return (
    <React.Fragment>
      {chartMode == 0 ?
        <MaterialSpacePlot dataSet={dataSet} onClick={handleOnClickScatter}/> :
        <StressStrainPlot couponData={couponClicked} onClick={handleOnClickLine}/>}
    </React.Fragment>
  );
}

export default DataPlayground;