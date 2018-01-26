import pointOnLine from "./point_on_line";

it("finds point on line", () => {
  expect(pointOnLine(5, [0, 0], [10,10])).toEqual([5, 5]);
});
