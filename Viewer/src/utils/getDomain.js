/**
 * Function to get the maximum x data and maximum y data
 * Used for helping set graph domain
 * @param arr
 * @returns {{x: number, y: number}}
 */
export function getDomain(arr) {

  // Multiplier to enlarge domain a little bit
  // So that data don't stay too close to graph bounds
  const X_MULTI = 1.25;
  const Y_MULTI = 1.25;
  const X_INTERVAL = 0.01;
  const Y_INTERVAL = 10;

  const xData = arr.map(pt => pt[0]);
  const yData = arr.map(pt => pt[1]);

  return {
    x: Math.round(X_MULTI * Math.max(...xData) / X_INTERVAL) * X_INTERVAL,
    y: Math.round(Y_MULTI * Math.max(...yData) / Y_INTERVAL) * Y_INTERVAL
  }

}