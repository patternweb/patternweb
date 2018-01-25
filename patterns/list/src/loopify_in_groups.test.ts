import loopifyInGroups, { loopifyInPairs } from "./loopify_in_groups";

describe("loopify in groups", () => {
  // it.skip('loopifys single items', () => {
  //   const array = [1,2,3]
  //   const result = [1,2,3,1]
  //   expect(loopifyInGroups(1)(array)).toEqual(result)
  // })

  it("loopifys in pairs", () => {
    const array = ["a", "b", "c"];
    const result = [["a", "b"], ["b", "c"], ["c", "a"]];
    expect(loopifyInPairs(array)).toEqual(result);
    expect(loopifyInGroups(2)(array)).toEqual(result);
  });

  it("loopifys complex arrays in pairs", () => {
    const array = [["a"], "b", [["c"]]];
    const result = [[["a"], "b"], ["b", [["c"]]], [[["c"]], ["a"]]];
    expect(loopifyInPairs(array)).toEqual(result);
    expect(loopifyInGroups(2)(array)).toEqual(result);
  });

  it("loopifys in groups without offset", () => {
    const array = ["a", "b", "c", "d"];
    const result = [
      ["a", "b", "c"],
      ["b", "c", "d"],
      ["c", "d", "a"],
      ["d", "a", "b"]
    ];
    expect(loopifyInGroups(3)(array)).toEqual(result);
  });

  it("loopifys in groups with offset", () => {
    const array = ["a", "b", "c", "d", "e", "f"];
    let result = [["a", "b", "c"], ["c", "d", "e"], ["e", "f", "a"]];
    expect(loopifyInGroups(3, 1)(array)).toEqual(result);

    result = [["a", "b", "c"], ["d", "e", "f"]];
    expect(loopifyInGroups(3, 2)(array)).toEqual(result);

    result = [["a", "b", "c"], ["e", "f", "a"]];
    expect(loopifyInGroups(3, 3)(array)).toEqual(result);
  });
});
