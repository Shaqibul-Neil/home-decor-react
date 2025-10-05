import { createBrowserRouter } from "react-router";
import RootLayout from "../RootLayout/RootLayout";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import Wishlist from "../Pages/Wishlist";
import ErrorPage from "../Pages/ErrorPage";
import Cart from "../Pages/Cart";
import ProductDetails from "../Pages/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <ErrorPage />,
    hydrateFallbackElement: <p>Loading....</p>,
    children: [
      {
        index: true,
        Component: Home,
      },
      { path: "/products", Component: Products },
      { path: "/product/:id", Component: ProductDetails },
      { path: "/wishlist", Component: Wishlist },
      { path: "/cart", Component: Cart },
    ],
  },
]);

export default router;
