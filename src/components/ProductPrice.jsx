import { useProductContext } from "../hooks/useProductContext";

export const ProductPrice = () => {
  const product = useProductContext();
  return <p>Price : {product.price}</p>;
};
