import { render, screen } from "@testing-library/react";
//
import Index from "../pages/index";

describe("loads", () => {
  it("inits", () => {});
  it("renders welcome heading", () => {
    render(<Index />);

    const heading = screen.getByRole("heading", {
      name: /welcome/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
