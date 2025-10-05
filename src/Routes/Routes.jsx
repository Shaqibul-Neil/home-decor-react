import { createBrowserRouter } from "react-router";
import RootLayout from "../RootLayout/RootLayout";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import Wishlist from "../Pages/Wishlist";
import ErrorPage from "../Pages/ErrorPage";
import Cart from "../Pages/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <ErrorPage />,
    children: [
      { index: true, Component: Home },
      { path: "/products", Component: Products },
      { path: "/wishlist", Component: Wishlist },
      { path: "/cart", Component: Cart },
    ],
  },
]);

export default router;
