import { productContext } from './ProductCard';
import { useContext } from 'react';
import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';

export interface Props {
  img?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const ProductImage = ({ img = '', className, style }: Props) => {
    
    const { product } = useContext( productContext );
    const src: string = img ? img : product.img ?? noImage;

    return (
    <img
      className={ `${ styles.productImg} ${ className }` }
      style={ style }
      src={ src }
      alt="product-image"
    />
  );
};