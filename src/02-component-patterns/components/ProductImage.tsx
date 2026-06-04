import { useContext } from "react";
import { ProductContext } from "./ProductCard";

import styles from '../styles/styles.module.css'
import noImage from '../assets/no-image.jpg'

export interface ProductImageProps {
    img?: string;
    className?: string;
}

export const ProductImage = ({ img, className }: ProductImageProps) => {

    const { product } = useContext(ProductContext);
    let imgToShow: string;

    if (img) {
        imgToShow = img;
    } else if (product.img) {
        imgToShow = product.img
    } else {
        imgToShow = noImage
    }

    return (
        <img src={imgToShow} alt="Product Image" className={`${styles.productImg} ${className}`} />
    )
}