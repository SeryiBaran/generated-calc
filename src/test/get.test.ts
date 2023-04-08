import { expect, test } from "vitest";
import { generateCalcCode } from "../utils";

test("Generate code", () => {
  const result = generateCalcCode(0, 4, ["+", "-", "/", "*"]);
  expect(result).toMatchSnapshot();
});
