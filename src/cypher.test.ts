import  onShift  from "./cypher";

describe("bar", () => {
  it("should shift right", () => {
    const str = "abcdefghijklmnopqrstuvwxyz";
    const shift = 3;
    expect(onShift(str, shift)).toBe("defghijklmnopqrstuvwxyzbc");
  });
  it("should shift left", () => {
    const str = "abcdefghijklmnopqrstuvwxyz";
    const shift = -3;
    expect(onShift(str, shift)).toBe("xyzabcdefghijklmnopqrstuvw");
  });
});
