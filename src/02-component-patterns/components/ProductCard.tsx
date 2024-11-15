import { useProduct } from '../hooks/useProduct'

import styles from '../styles/styles.module.css'
import noImage from '../assets/no-image.jpg'

interface Props {
    product: Product;
}

interface Product {
    id: string;
    title: string;
    img?: string;
}

export const ProductImage = ({ img = '' }) => {
    return (
        <img className={styles.productImg} src={img ? img : noImage} alt="coffee mug" />
    )
}

export const ProductTitle = ({ title }: { title: string }) => {
    return (<span className={styles.productDescription}>{title}</span>)
}

interface ProductButtonsProps {
    counter: number,
    increaseBy: (value: number) => void
}

export const ProductButtons = ({ counter, increaseBy }: ProductButtonsProps) => {
    return (
        <div className={styles.buttonsContainer}>
            <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
                -
            </button>
            <button className={styles.countLabel}>
                {counter}
            </button>
            <button className={styles.buttonAdd} onClick={() => increaseBy(1)}>
                +
            </button>

        </div>
    )
}

const ProductCard = ({ product }: Props) => {

    const { counter, increaseBy } = useProduct();

    return (
        <div className={styles.productCard}>

            <ProductImage img={product.img} />

            <ProductTitle title={product.title} />

            <ProductButtons counter={counter} increaseBy={increaseBy}/>

        </div>
    )
}

export default ProductCard