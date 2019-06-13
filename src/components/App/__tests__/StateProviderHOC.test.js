import React from "react";
import StateProviderHOC from "../StateProviderHOC";
import { shallow } from "enzyme";

function ChildComponent() {
  return "child_component";
}

function Provider() {
  return "provider";
}

it("should return Component", () => {
  const Comp = StateProviderHOC();

  expect(typeof Comp).toBe("function");
});

it("renders correct components", () => {
  const HOC = StateProviderHOC(ChildComponent);
  const wrapper = shallow(<HOC Provider={Provider} />);

  expect(
    wrapper.contains(
      <Provider>
        <ChildComponent />
      </Provider>
    )
  ).toBe(true);
});

it("passes store prop to Provider", () => {
  const storeProp = "test_store_prop";
  const HOC = StateProviderHOC(ChildComponent);
  const wrapper = shallow(<HOC Provider={Provider} store={storeProp} />);

  expect(wrapper.find(Provider).prop("store")).toBe(storeProp);
});
