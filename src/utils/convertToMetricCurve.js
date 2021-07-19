/**
 * Function to convert xyCurve to metric unit
 * Specifically, change yData's unit from ksi to MPa
 * @param xyCurve
 */
const KSI_TO_MPA = 6.89476

export function convertToMetricCurve(xyCurve) {
  return xyCurve.map(item => {
    let metricItem = [...item];
    metricItem[1] *= KSI_TO_MPA
    return metricItem;
  })

}