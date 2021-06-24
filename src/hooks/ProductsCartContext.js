import React, { createContext, useState, useContext } from 'react';

const ProductsCartContext = createContext();

function ProductsCartProvider({ children }) {
  const [productsInTheCart, setProductsInTheCart] = useState([]);

  return (
    <ProductsCartContext.Provider
      value={{ productsInTheCart, setProductsInTheCart }}
    >
      {children}
    </ProductsCartContext.Provider>
  );
};

function useProductsCart() {
  const context = useContext(ProductsCartContext);
  const {
    productsInTheCart, setProductsInTheCart,
  } = context;
  return {
    productsInTheCart, setProductsInTheCart,
  };
};

export { ProductsCartProvider, useProductsCart };
