function mirrorX(points) {
  return [...points, ...points.map(([x, y]) => [x, -y]).reverse()];
}

export default mirrorX;
