import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import CartContextProvider from "./pages/Cart/CartItem/cart-Context.jsx";
import { CartProvider } from "./pages/Cart/CartItemV2/CartItemV2.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <CartContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </CartContextProvider>
    </CartProvider>
  </React.StrictMode>
);
