import clockwiseSort from "./clockwise_sort";

it("can clockwise sort", () => {
  const subject = [[-10, 10], [-10, -10], [10, 10], [10, -10]].sort(
    () => Math.random() - 0.5
  );
  const result = [[10, -10], [-10, -10], [-10, 10], [10, 10]];
  expect(clockwiseSort(subject, [0, 0])).toEqual(result);
});
