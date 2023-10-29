import { ProductImage, ProductTitle, ProductButtons } from '../components';
import ProductCard from '../components/index';

const product = {
  id: "1",
  title: "CoffeeMug-Card",
  img: "./coffee-mug.png",
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Page</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {/* Other way to do it */}
        <ProductCard product={ product }>
            <ProductImage />
            <ProductTitle title='holi' />
            <ProductButtons />
        </ProductCard>

        <ProductCard product={ product }>
            <ProductCard.Image />
            <ProductCard.Title title={'texto de prueba'}/>
            <ProductCard.Buttons />
        </ProductCard>
        <ProductCard product={ product }>
            <ProductCard.Image />
            <ProductCard.Title />
            <ProductCard.Buttons />
        </ProductCard>
      </div>
    </div>
  );
};
