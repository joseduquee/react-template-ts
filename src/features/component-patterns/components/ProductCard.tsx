import { useProduct } from '../hooks/useProduct';
import { ReactElement, createContext } from 'react';
import { ProductContextProps, Product } from '../interfaces/interfaces';
import styles from '../styles/styles.module.css';

export const productContext = createContext({} as ProductContextProps);
const { Provider } = productContext;

export interface Props {
  children?: ReactElement | ReactElement[]; 
  product: Product;
  className?: string;
  style?: React.CSSProperties;
}

export const ProductCard = ({ children, product, className, style }: Props) => {
  const { counter, increaseBy } = useProduct();

  return (
    <Provider value={{
        counter, increaseBy, product
    }}>
        <div 
          className={ `${ styles.productCard } ${ className }`}
          style={ style }
        >
            { children }
        </div>
    </Provider>
  );
};
