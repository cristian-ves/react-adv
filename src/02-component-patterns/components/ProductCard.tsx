
import { createContext } from 'react';

import { useProduct } from '../hooks/useProduct';
import { ProductContextProps, ProductCardProps } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css'
import { ProductTitle, ProductImage, ProductButtons } from './';

export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext;

export const ProductCard = ({ children, product }: ProductCardProps) => {

    const { counter, increaseBy } = useProduct();

    return (
        <Provider value={{
            counter,
            increaseBy,
            product
        }}>

            <div className={styles.productCard}>

                {children}

                {/* <ProductImage img={product.img} />
            // <img src={noImage} alt="Coffee Mug" className={styles.productImg} /> 
            
            <ProductTitle title={product.title} />
            
            <ProductButtons counter={counter} increaseBy={increaseBy} /> */}

            </div>
        </Provider>
    );
};

