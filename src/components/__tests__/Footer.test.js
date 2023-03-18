import { render } from "@testing-library/react";
import Footer from "../Footer";

test("Testing the Footer on page load", () => {
  const footer = render(<Footer />);

  const desc = footer.getByTestId("description");

  expect(desc.innerHTML).toBe(
    "Designed And Developed by Dummy Name for support Contact at dummy@gmail.com"
  );
});
