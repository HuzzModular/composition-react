import { useProductContext } from "../hooks/useProductContext";

export const ProductAction = ({ onClick, children }) => {
  const product = useProductContext();

  const handleClick = () => {
    console.log({ product });
    onClick(product);
  };

  return (
    <div className="product_card_action">
      <button onClick={handleClick}>{children}</button>
    </div>
  );
};
