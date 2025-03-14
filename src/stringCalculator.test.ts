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

  test("returns the sum for multiple numbers", () => {
    const num = Array.from({ length: 5 }, () =>
      faker.number.int({ min: 0, max: 999999 })
    );
    expect(add(num.join(","))).toBe(num.reduce((sum, num) => sum + num, 0));
  });

  test("handles new line as a delimiter along with commas", () => {
    expect(add("1\n2,3")).toBe(6);
  });

  test("supports custom delimiter defined at the beginning", () => {
    expect(add("//;\n1;2")).toBe(3);
  });
});
