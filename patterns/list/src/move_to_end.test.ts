import moveToEnd from "./move_to_end";

it("moves to end", () => {
  const array = ["a", "b", "c"];
  expect(moveToEnd(0, array)).toEqual(["a", "b", "c"]);
  expect(moveToEnd(1, array)).toEqual(["b", "c", "a"]);
  expect(moveToEnd(2, array)).toEqual(["c", "a", "b"]);
  expect(moveToEnd(3, array)).toEqual(["a", "b", "c"]);
  expect(moveToEnd(4, array)).toEqual(["b", "c", "a"]);
  expect(moveToEnd(5, array)).toEqual(["c", "a", "b"]);
  expect(moveToEnd(-1, array)).toEqual(["c", "a", "b"]);
  // doesn't affect original array
  expect(array).toEqual(["a", "b", "c"]);
});
