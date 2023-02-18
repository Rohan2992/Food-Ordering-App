//jshint esversion: 6

import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import About from "./components/About";
import Profile from "./components/Profile";
// import Profile from "./components/ProfileClass";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";

const AppLayout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

const createRoute = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/about",
        element: <About />,
        children: [{ path: "profile", element: <Profile /> }]
        // children: [{ path: "profile", element: <Profile name="rohan" /> }]
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={createRoute} />);
