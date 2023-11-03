import { ProductImage, ProductTitle, ProductButtons } from '../components';
import ProductCard from '../components/index';
import '../styles/custom-styles.css';

const product = {
  id: '1',
  title: 'CoffeeMug-Card',
  img: './coffee-mug.png',
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Page</h1>
      <hr />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        {/* Other way to do it */}
        <ProductCard product={product} className='bg-dark text-white'>
          <ProductImage className='custom-image' />
          <ProductTitle className='text-bold' title={'texto de prueba'} />
          <ProductButtons className='custom-buttons' />
        </ProductCard>

        <ProductCard product={product} className='bg-dark text-white'>
          <ProductCard.Image className='custom-image' />
          <ProductCard.Title title={'texto de prueba'} className='text-bold'/>
          <ProductCard.Buttons className='custom-buttons' />
        </ProductCard>

        <ProductCard product={product}>
          <ProductCard.Image className='custom-image' style={{ boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.2)'}}/>
          <ProductCard.Title title='epaleee' />
          <ProductCard.Buttons />
        </ProductCard>

        <ProductCard 
          product={product}
          style={{
            backgroundColor: '#70D1F8'
          }}
        >
          <ProductImage style={{ boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.2)'}} />
          <ProductTitle style={{ fontWeight: 'bold' }}/>
          <ProductButtons style={{ display: 'flex', justifyContent: 'end' }}/>
        </ProductCard>
      </div>
    </div>
  );
};