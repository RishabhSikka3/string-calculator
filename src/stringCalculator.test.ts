import { add } from "./stringCalculator";
import { faker } from "@faker-js/faker";

describe("test suite for the string calculator", () => {
  test("returns 0 for empty string", () => {
    expect(add("")).toBe(0);
  });

  test("returns the number for a single number", () => {
    const num = faker.number.int({ min: 0, max: 999999 });
    expect(add(num.toString())).toBe(num);
  });
});
