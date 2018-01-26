import { Point, _getXY } from ".";

/**
 * Calculates the angle (in radians) of a line drawn between two points
 * @param start
 * @param end
 */
const angle = (start: Point, end: Point): number => {
  const [x, y] = _getXY(start, end);
  return Math.atan2(y, x);
};

export default angle;
