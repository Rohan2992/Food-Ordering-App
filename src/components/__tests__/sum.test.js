import { sum } from "../sum";

test("Check the sum of two numbers", () => {
  expect(sum(3, 5)).toBe(8);
  expect(sum(1, 4)).toBe(5);
  expect(sum(2, 6)).toBe(8);
  expect(sum(3, 7)).toBe(10);
  expect(sum(4, 9)).toBe(13);
});

test("Check the sum", () => {
  expect(sum(3, 5)).toBe(8);
  expect(sum(1, 4)).toBe(5);
});
