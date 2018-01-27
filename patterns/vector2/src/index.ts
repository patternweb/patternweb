export type Point = [number, number];

export const _getXY = (start, end) => [end[0] - start[0], end[1] - start[1]];

export { default as angle } from "./angle";
export { default as bounds } from "./bounds";
export { default as centroid } from "./centroid";
export { default as clockwiseSort } from "./clockwise_sort";
export { default as distance } from "./distance";
export { default as mirrorX } from "./mirror_x";
export { default as mirrorY } from "./mirror_y";
export { default as pointOnLine } from "./point_on_line";
export { default as rad2deg } from "./rad2deg";
export { default as rotateAroundPoint } from "./rotate_around_point";
