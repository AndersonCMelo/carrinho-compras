import React from "react";

import { ProductsCartProvider } from "./ProductsCartContext";

const AppProvider = ({ children }) => (
  <ProductsCartProvider>{children}</ProductsCartProvider>
);

export default AppProvider;
