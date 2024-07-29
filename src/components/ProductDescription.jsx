import { useProductContext } from "../hooks/useProductContext";

export const ProductDescription = () => {
  const product = useProductContext();
  return <p>{product.description}</p>;
};
