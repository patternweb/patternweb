import * as ClipperLib from 'clipper-fpoint';
import offset from './offset';

export function pointsToClipperPolygon(paths) {
  return new ClipperLib.Paths().concat(
    new ClipperLib.Path().concat(
      paths.map( ([x, y]) => new ClipperLib.FPoint(x, y))
    )
  )
}

export const xyToArr = ({X, Y}) => ([X, Y]);
export const arrToXY = ([X, Y]) => ({X, Y});

export default {
  offset
}
