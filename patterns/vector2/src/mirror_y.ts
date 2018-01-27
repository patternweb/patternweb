function mirrorY(points) {
  return [...points, ...points.map(([x, y]) => [-x, y]).reverse()];
}

export default mirrorY;
