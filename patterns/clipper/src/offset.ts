import * as ClipperLib from 'clipper-fpoint';
import { pointsToClipperPolygon, xyToArr } from './index';

export type JoinType = "jtMiter" | "jtRound" | "jtSquare";

export type EndType =
  "etClosedPolygon"
  | "etClosedLine"
  | "etOpenSquare"
  | "etOpenRound"
  | "etOpenButt";

/**
 * Offsets the points of a polygon to enlarge or shrink it.
 * @param joinType
 * @param endType
 * @param miterLimit
 * @param roundPrecision
 * @param delta amount to offset by, a negative value will contract the shape
 * @param paths
 */
export default function offset(
  joinType:JoinType = 'jtMiter',
  endType:EndType = 'etClosedPolygon',
  miterLimit:number = Infinity,
  roundPrecision:number = 0,
  delta:number,
  paths:number[][]
):number[][] {
  const polygon = pointsToClipperPolygon(paths);
  const clipperOffset = new ClipperLib.ClipperOffset(
    miterLimit,
    roundPrecision
  );
  const offsetPaths = new ClipperLib.Paths();
  clipperOffset.AddPaths(
    [polygon],
    ClipperLib.JoinType[joinType],
    ClipperLib.EndType[endType]
  );
  clipperOffset.Execute(offsetPaths, delta);
  return clipperOffset.m_destPoly.map(xyToArr);
}
