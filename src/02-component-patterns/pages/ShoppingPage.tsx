import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components/';

import { products } from '../data/products';
import '../styles/custom-styles.css'

const product = products[0]

export const ShoppingPage = () => {


    const increaseBy2 = (value: number, count: number, increaseBy: (value: number) => void, maxCount?: number) => {

        if ((maxCount && count + value > maxCount) || count + value < 0) return;

        increaseBy(value);
    }

    return (
        <div>
            <h1>Shopping page</h1>
            <hr />

            <ProductCard
                key={product.id}
                product={product}
                className="bg-dark text-white "
                initialValues={{
                    count: 4,
                    maxCount: 10
                }}
            >
                {
                    ({ reset, count, increaseBy, maxCount }) => (
                        <>
                            <ProductImage className='custom-image' />
                            <ProductTitle className='text-bold' activeClass='active' />
                            <ProductButtons className='custom-button' />

                            <button onClick={reset}>Reset</button>
                            <button onClick={() => increaseBy2(-2, count, increaseBy, maxCount)}>-2</button>
                            <button onClick={() => increaseBy2(2, count, increaseBy, maxCount)}>+2</button>
                            <span>count: {count}</span>
                        </>
                    )
                }
            </ProductCard>

        </div>
    );
};

