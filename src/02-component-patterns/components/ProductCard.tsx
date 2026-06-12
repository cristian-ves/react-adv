
import { CSSProperties, ReactElement, createContext } from 'react';

import { useProduct } from '../hooks/useProduct';
import { InitialValues, Product, ProductCardHandlers, ProductContextProps, onChangeArgs } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css'

export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext;

export interface ProductCardProps {
    product: Product;
    // children?: ReactElement | ReactElement[];
    children: (args: ProductCardHandlers) => JSX.Element;
    className?: string;
    style?: CSSProperties;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues;
}

export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }: ProductCardProps) => {

    const { counter, increaseBy, maxCount, isMaxCountReached, reset } = useProduct({ onChange, product, value, initialValues });

    return (
        <Provider value={{
            counter,
            increaseBy,
            maxCount,
            product,
        }}>

            <div className={`${styles.productCard} ${className}`} style={style}>

                {children({
                    count: counter,
                    isMaxCountReached,
                    maxCount: initialValues?.maxCount,
                    product,

                    increaseBy,
                    reset
                })}

                {/* <ProductImage img={product.img} />
            // <img src={noImage} alt="Coffee Mug" className={styles.productImg} /> 
            
            <ProductTitle title={product.title} />
            
            <ProductButtons counter={counter} increaseBy={increaseBy} /> */}

            </div>
        </Provider>
    );
};

