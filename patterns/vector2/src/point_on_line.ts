import { Point, _getXY } from ".";

/**
 * Returns a point at an absolute distance between two points.
 */
function pointOnLine(distance: number, start: Point, end: Point):Point {
  const [x, y] = _getXY(start, end);
  const hypot = Math.hypot(x, y);
  return [start[0] + x / hypot * distance, start[1] + y / hypot * distance];
};

export default pointOnLine;
