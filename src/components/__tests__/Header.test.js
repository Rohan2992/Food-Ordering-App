import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";

test("logo is loading properly on page loading", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  // console.log(header);

  const logo = header.getByTestId("logo");

  expect(logo.src).toBe("http://localhost/DummyLogo.png");
});

test("cart contains 0 items on page loading", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const cartItems = header.getByTestId("cartItems");

  expect(cartItems.innerHTML).toBe("Cart - 0");

  // console.log(cartItems);
});

test("default status should be online on page loading", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const onlineStatus = header.getByTestId("online-status");

  // console.log(onlineStatus.innerHTML);

  expect(onlineStatus.innerHTML).toBe("✅");

  // console.log(cartItems);
});
