import App from "./App";
import { cleanup, render } from "@testing-library/react";

afterEach(cleanup);

describe("App", () => {
  it("renders", () => {
    render(<App />);
  });
});
