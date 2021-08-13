import { convertToMetricCurve } from "./convertToMetricCurve"

const KSI_TO_MPA = 6.89476

/**
 * Method to convert data to metric format
 * @param data
 */
export function convertToMetricData(data) {
  let metricData = {...data};
  if (data.hasOwnProperty('engCurve')) {
    metricData.engCurve = convertToMetricCurve(data.engCurve);
  }
  metricData.Fy = data.Fy * KSI_TO_MPA;
  metricData.Fu = data.Fu * KSI_TO_MPA;

  return metricData;
}