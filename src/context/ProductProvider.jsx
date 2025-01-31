import React, { createContext, useContext } from "react";

const ProductContext = createContext();

export const useProductsContext = () => {
  return useContext(ProductContext);
};
const ProductProvider = ({ children }) => {
  const values = {};
  return (
    <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  );
};

export default ProductProvider;
