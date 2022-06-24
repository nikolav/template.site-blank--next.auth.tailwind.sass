import { render, screen } from "@testing-library/react";
//
import Index from "../pages/index";
import { SessionProvider } from "next-auth/react";

//
const MockIndex = () => {
  return (
    <SessionProvider session={null}>
      <Index />
    </SessionProvider>
  );
};
////
////
describe("loads", () => {
  it("inits", () => {});
  it("renders welcome heading", () => {
    render(<MockIndex />);

    const heading = screen.getByRole("heading", {
      name: /welcome/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
