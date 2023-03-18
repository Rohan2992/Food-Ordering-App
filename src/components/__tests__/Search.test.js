import "@testing-library/jest-dom";
import { render, waitFor, fireEvent } from "@testing-library/react";
import Body from "../Body";
import { StaticRouter } from "react-router-dom/server";
import { RESTAURANT_DATA } from "../../mocks/Data";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTAURANT_DATA);
    }
  });
});

/**
 *
 *
 * testing the shimmer
 *  test("Shimmer should be visible on page load", () => {
 * const body = render(
 *  <StaticRouter>
 *    <Body />
 *  </StaticRouter>);
 *  const shimmer = body.getByTestId("shimmer");
 *  expect(shimmer.children.length).toBe(10);
 *  });
 */

test("restaurant list should be visible on page load", async () => {
  const body = render(
    <StaticRouter>
      <Body />
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId("restaurant-list")));
  const restaurantList = body.getByTestId("restaurant-list");
  expect(restaurantList.children.length).toBe(15);

  //   expect(body.toBeInTheDocument());
});

test("search button is working properly", async () => {
  const body = render(
    <StaticRouter>
      <Body />
    </StaticRouter>
  );

  await waitFor(() => expect(body.getAllByTestId("search-btn")));

  const searchInput = body.getByTestId("search-input");
  fireEvent.change(searchInput, { target: { value: "food" } });

  const searchBtn = body.getByTestId("search-btn");
  fireEvent.click(searchBtn);

  const restaurantList = body.getByTestId("restaurant-list");
  //   console.log(restaurantList.length);
  expect(restaurantList.children.length).toBe(2);
});
