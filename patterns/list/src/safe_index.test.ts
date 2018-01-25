import safeIndex from "./safe_index";

it("returns a valid index for out-of-bounds indices with safeIndex", () => {
  const arrayLength = 3;
  const i = safeIndex(arrayLength);

  expect(i(-4)).toEqual(2);

  expect(i(-3)).toEqual(0);
  expect(i(-2)).toEqual(1);
  expect(i(-1)).toEqual(2);

  expect(i(0)).toEqual(0);
  expect(i(1)).toEqual(1);
  expect(i(2)).toEqual(2);

  expect(i(3)).toEqual(0);
  expect(i(4)).toEqual(1);
  expect(i(5)).toEqual(2);

  expect(i(6)).toEqual(0);
});
