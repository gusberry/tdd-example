import initStore from "../store";

jest.mock("../reducers/counter", () => "counter_reducer");
jest.mock("redux", () => ({
  createStore: jest.fn(),
}));

beforeEach(() => {
  require("redux").createStore.mockClear();
});

it("should be a function", () => {
  expect(typeof initStore).toBe("function");
});

it("should call createStore after initialized", () => {
  initStore();

  expect(require("redux").createStore).toHaveBeenCalled();
});

it("should call createStore after initialized with a proper reducer", () => {
  initStore();

  expect(require("redux").createStore).toHaveBeenCalledWith(
    "counter_reducer",
    undefined
  );
});

it("should call createStore after initialized with initial state if provided", () => {
  initStore("test");

  expect(require("redux").createStore).toHaveBeenCalledWith(
    "counter_reducer",
    "test"
  );
});
