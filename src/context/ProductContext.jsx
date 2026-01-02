import { createContext, useContext, useState } from "react";
import { dummyProducts } from "../data/dummyProducts";

const ProductContext = createContext();

export const useProducts = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(dummyProducts);

  const getProductById = (id) => {
    return products.find((p) => p.id === Number(id));
  };

  const addOrUpdateProduct = (product) => {
    if (product.id) {
      // update
      setProducts((prev) =>
        prev.map((p) => (p.id === product.id ? product : p))
      );
    } else {
      // add new
      setProducts((prev) => [
        ...prev,
        { ...product, id: Date.now() },
      ]);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        addOrUpdateProduct,
        getProductById,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
