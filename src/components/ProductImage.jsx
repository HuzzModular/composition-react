import { useProductContext } from "../hooks/useProductContext";

export const ProductImage = () => {
  const product = useProductContext();
  return (
    <div className="product_card_image">
      <img src={product.image} alt={product.name} />
    </div>
  );
};
