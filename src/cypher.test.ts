import  onShift  from "./cypher";

describe("bar", () => {
  const str = "abcdefghijklmnopqrstuvwxyz";
  it("should shift right", () => {
    const shift = 3;
    expect(onShift(str, shift)).toBe("defghijklmnopqrstuvwxyzbc");
  });
  it("should shift left", () => {
    const shift = -3;
    expect(onShift(str, shift)).toBe("xyzabcdefghijklmnopqrstuvw");
  });
});
