import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components/';

import '../styles/custom-styles.css'
import { useShoppingCart } from '../hooks/useShoppingCart';
import { products } from '../data/products';

export const ShoppingPage = () => {

    const { shoppingCart, onProductCountChange } = useShoppingCart();

    return (
        <div>
            <h1>Shopping page</h1>
            <hr />
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>

                {
                    products.map(product => (


                        <ProductCard
                            key={product.id}
                            product={product}
                            className="bg-dark text-white "
                            onChange={onProductCountChange}
                            value={shoppingCart[product.id]?.count || 0}
                        >
                            <ProductImage className='custom-image' />
                            <ProductTitle className='text-bold' activeClass='active' />
                            <ProductButtons className='custom-button' />
                        </ProductCard>
                    ))
                }

            </div>

            <div className="shopping-cart">
                {
                    Object.entries(shoppingCart).map(([key, productInCart]) => (

                        <ProductCard
                            className="bg-dark text-white "
                            product={productInCart}
                            key={key}
                            style={{
                                width: '100px'
                            }}
                            value={productInCart.count}
                            onChange={onProductCountChange}
                        >
                            <ProductImage className='custom-image' />
                            <ProductButtons
                                className='custom-button'
                            />
                        </ProductCard>
                    ))
                }
            </div>

            {/* <div>
                <code>
                    {JSON.stringify(shoppingCart, null, 5)}
                </code>
            </div> */}
        </div>
    );
};

