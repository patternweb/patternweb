type Bounds = {
  minX: number;
  maxX: number;
  minY: number;
  maxY: number;
  offsetX?: number;
  offsetY?: number;
};

/**
 * Calculates the bounds of a set of points
 * @param points
 */
const bounds = (points: number[][]): Bounds => {
  const b: Bounds = points.reduce(
    (o, v) => {
      if (v[0] < o.minX) o.minX = v[0];
      if (v[0] > o.maxX) o.maxX = v[0];
      if (v[1] < o.minY) o.minY = v[1];
      if (v[1] > o.maxY) o.maxY = v[1];
      return o;
    },
    {
      minX: Infinity,
      maxX: -Infinity,
      minY: Infinity,
      maxY: -Infinity
    }
  );

  b.offsetX = b.minX + (b.maxX - b.minX) / 2;
  b.offsetY = b.minY + (b.maxY - b.minY) / 2;

  return b;
};

export default bounds;
