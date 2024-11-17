import { test, expect } from "jest";

test("1 + 1 は 2 です", () => {
  const result = 2;
  expect(1 + 1).toStrictEqual(result);
});
