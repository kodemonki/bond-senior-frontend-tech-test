import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";


test("loads and displays greeting", async () => {
  
  render(<div>Some Component</div>);

  expect(screen.getByText("Some Component")).toBeDefined();
});
