import { useContext } from "react";
import { ProductContext } from "../components/ProductContext";

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context)
    throw new Error(
      "Can't use 'useProductContext' hook outside of the Product component's children"
    );
  return context;
};
