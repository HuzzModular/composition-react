import { Product } from "./components/Product";
import { ErrorBoundary } from "react-error-boundary";

const data = {
  name: "Vite",
  price: "129$",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  image: "/product_image.jpg",
};

function fallbackRender({ error }) {
  // Call resetErrorBoundary() to reset the error boundary and retry the render.

  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary
      onError={(error) => console.log({ error })}
      fallbackRender={fallbackRender}
    >
      <Product
        product={data}
        title={<Product.Title />}
        info={
          <Product.Info>
            <Product.Description />
            <Product.Image />
            <Product.Price />
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
    </ErrorBoundary>
  );
}

export default App;
