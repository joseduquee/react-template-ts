import { productContext } from './ProductCard';
import { useContext } from 'react';
import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';

export const ProductImage = ({ img = "" }) => {
    
    const { product } = useContext( productContext );
    const src: string = img ? img : product.img ?? noImage;

    return (
    <img
      className={styles.productImg}
      src={ src }
      alt="product-image"
    />
  );
};