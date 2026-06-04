import { useContext } from "react";
import { ProductContext } from "./ProductCard";

import styles from '../styles/styles.module.css';

export interface ProductTitleProps {
    className?: string;
    title?: string;
    activeClass?: string;
}

export const ProductTitle = ({ title, className }: ProductTitleProps) => {
    // export const ProductTitle = ({ title = '' }) => {

    const { product } = useContext(ProductContext);

    const titleToShow = title ? title : product.title;

    return (
        <span className={`${styles.productDescription} ${className}`}>{titleToShow}</span>
    )
}