/**
 * Method to convert 2D array into curve ready to be plotted by re-charts
 * @param arr
 */
export function getCurve(arr) {
  return arr.map(pt => {
      return { epsilon: pt[0], sigma: pt[1] }
  });
}