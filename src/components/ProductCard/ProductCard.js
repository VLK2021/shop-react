import React from 'react';
import {useDispatch} from "react-redux";

import classes from "./ProductCard.module.css";
import nextFot from '../../images/fotoF.jpg';
import star from '../../images/Star.png';


const ProductCard = ({product}) => {
    const {category, price, rating, title, images} = product;
    const dispatch = useDispatch();


    const handleClick = (e) => {
        e.stopPropagation();
    }


    return (
        <main className={`${classes.wrap}`}>
            <section className={`${classes.productCardImg}`}>
                <img src={images[0] ? images[0] : nextFot} alt="foot"/>
            </section>

            <section className={`${classes.productCardPrice}`}>
                <article className={`${classes.productCardPriceStar}`}>
                    <p className={`${classes.size}`}>{rating}</p>
                    <img src={star} alt="icon"/>
                </article>
                <p className={`${classes.productCardPricePrice} ${classes.size}`}>
                    {price}
                </p>
            </section>

            <section className={`${classes.productCardText}`}>
                <p className={`${classes.title} ${classes.size}`}>{title}</p>
                <p className={`${classes.productCardTextTwo} ${classes.size}`}><span>{category}</span></p>
            </section>

            <button onClick={handleClick}>add to cart</button>
        </main>
    );
};

export {ProductCard};