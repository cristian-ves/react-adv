import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components/';
import '../styles/custom-styles.css'

const product = {
    id: '1',
    title: 'Coffee Mug - Card',
    img: './coffee-mug.png'
}

export const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping page</h1>
            <hr />
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                <ProductCard
                    product={product}
                    className="bg-dark text-white "
                    style={{
                        backgroundColor: 'rgb(20,20,20)'
                    }}
                >
                    <ProductCard.Image className='custom-image' />
                    <ProductCard.Title className='text-bold' activeClass='active' />
                    <ProductCard.Buttons className='custom-button' />
                </ProductCard>


                <ProductCard
                    product={product}
                    className="bg-dark text-white "
                >
                    <ProductImage className='custom-image' />
                    <ProductTitle className='text-bold' activeClass='active' />
                    <ProductButtons className='custom-button' />
                </ProductCard>

            </div>
        </div>
    );
};

