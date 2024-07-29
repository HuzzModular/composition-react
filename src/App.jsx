import { Product } from "./components/Product";

const data = {
  name: "Vite",
  price: "129$",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  image: "/product_image.jpg",
};

function App() {
  return (
    <>
      <Product
        product={data}
        title={<Product.Title />}
        info={
          <Product.Info>
            <Product.Image />
            <Product.Price />
            <Product.Description />
          </Product.Info>
        }
        action={
          <Product.Button
            onClick={(product) => {
              console.log({ product });
            }}
          >
            cart
          </Product.Button>
        }
      />
    </>
  );
}

export default App;
