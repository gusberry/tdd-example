import counter from "../counter";

it("should be a function", () => {
  expect(typeof counter).toBe("function");
});

it("should not brake if first argument is missing", () => {
  expect(() => counter()).not.toThrow();
});

it("should not brake if second argument is missing", () => {
  expect(() => counter()).not.toThrow();
});

it("should not brake if second argument is missing 'type' key", () => {
  expect(() => counter(undefined, {})).not.toThrow();
});

it("should return a default value", () => {
  expect(counter()).toBe(0);
});

it("should return a value provided as a first argument", () => {
  expect(counter(3)).toBe(3);
});

it("should increase value provided as a first argument by 1 if second argument has a type of 'INCREASE'", () => {
  expect(counter(3, { type: "INCREASE" })).toBe(4);
});

it("should decrease value provided as a first argument by 1 if second argument has a type of 'DECREASE'", () => {
  expect(counter(3, { type: "DECREASE" })).toBe(2);
});
