import React from "react";
import { createBrowserRouter } from "react-router-dom";
import ProductList from "../pages/ProductList/ProductList";

const router = createBrowserRouter([
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/productList",
        element: <ProductList />,
      },
      {
        path: "/productDetail",
        element: <ProductDetail />,
      }
]);

export default router;