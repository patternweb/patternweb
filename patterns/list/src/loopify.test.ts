import loopify from "./loopify";

it("loopifys simple arrays", () => {
  const array = ["a", "b", "c"];
  const result = ["a", "b", "c", "a"];
  expect(loopify(array)).toEqual(result);
});

it("loopifys complex arrays", () => {
  const array = [["a"], ["b"], ["c"]];
  const result = [["a"], ["b"], ["c"], ["a"]];
  expect(loopify(array)).toEqual(result);
});
