import { describe, expect, test, it } from "@jest/globals";
import Sum from "..";

describe("testing sum function", () => {
  it("adds 1 and 2 gives 3", () => {
    expect(Sum(1, 2)).toBe(3);
  });

  it("test negative numbers", () => {
    expect(Sum(-2, -3)).toBe(-5);
  });
});
