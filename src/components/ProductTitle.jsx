import { useProductContext } from "../hooks/useProductContext";

export const ProductTitle = () => {
  const product = useProductContext();
  return <h2 className="product_card_title">{product.name}</h2>;
};
