import { ProductContext } from "./ProductContext";
import { ProductTitle } from "./ProductTitle";
import { ProductImage } from "./ProductImage";
import { ProductInfo } from "./ProductInfo";
import { ProductDescription } from "./ProductDescription";
import { ProductPrice } from "./ProductPrice";
import { ProductAction } from "./ProductAction";
import "./styles.css";

export const Product = ({ product, title, info, action }) => {
  return (
    <ProductContext.Provider value={product}>
      <div className="product_card">
        {title}
        {info}
        {action}
      </div>
    </ProductContext.Provider>
  );
};

Product.Title = ProductTitle;
Product.Image = ProductImage;
Product.Info = ProductInfo;
Product.Description = ProductDescription;
Product.Price = ProductPrice;
Product.Button = ProductAction;
