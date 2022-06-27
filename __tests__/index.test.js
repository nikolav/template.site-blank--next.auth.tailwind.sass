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
//
// beforeEach(() => {
//   initialize();
// });
// afterEach(() => {
//   cleanup();
// });
// beforeAll(() => {
//   init();
// });
// afterAll(() => {
//   clean();
// });
////
////
describe("loads", () => {
  // run it.only.. to run 1 test
  it("boots", () => {});
  it("renders welcome heading", () => {
    render(<MockIndex />);

    const heading = screen.getByRole("heading", {
      name: /welcome/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
