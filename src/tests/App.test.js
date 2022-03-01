import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Worldle header", () => {
  render(<App />);
  const linkElement = screen.getByText(/Worldle/i);
  expect(linkElement).toBeInTheDocument();
});
