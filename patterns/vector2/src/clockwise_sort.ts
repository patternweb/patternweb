import { Point } from ".";
import bounds from "./bounds";

/**
 * sorts points around a centrepoint in clockwise order
 * @param input
 * @param centrePoint
 */
const clockwiseSort = (input: number[][], centrePoint: Point) => {
  if (!Array.isArray(input) || input.length === 0) return input;

  const b = bounds(input);
  const arr = [];

  for (let i = 0; i < input.length; i++) {
    arr[i] = [input[i][0] - b.offsetX, input[i][1] - b.offsetY, ...input[i]];
  }

  const base = Math.atan2(centrePoint[1], centrePoint[0]);

  return arr
    .sort(function(a, b) {
      return (
        Math.atan2(b[1], b[0]) -
        Math.atan2(a[1], a[0]) +
        (Math.atan2(b[1], b[0]) > base ? -2 * Math.PI : 0) +
        (Math.atan2(a[1], a[0]) > base ? 2 * Math.PI : 0)
      );
    })
    .map(points => points.slice(2));
};

export default clockwiseSort;
