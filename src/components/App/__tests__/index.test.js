import React from "react";
import { shallow } from "enzyme";

import App from "../index";

jest.mock("../App", () => "MockApp");
jest.mock("../StateProviderHOC", () => jest.fn());

beforeEach(() => {});

describe("App index", () => {
  it("calls StateProviderHOC", () => {
    expect(require("../StateProviderHOC")).toHaveBeenCalled();
  });

  it("calls StateProviderHOC with a proper argument", () => {
    expect(require("../StateProviderHOC")).toHaveBeenCalledWith("MockApp");
  });
});
