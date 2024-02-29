import React from 'react';
import {useDispatch} from "react-redux";

import classes from "./ProductCard.module.css";


const ProductCard = ({product}) => {
    const {category, price, rating, title, images} = product;
    const dispatch = useDispatch();


    const handleClick = (e) => {
        e.stopPropagation();
    }


    return (
        <main className={`${classes.wrap}`}>
            <section className={`${classes.productCardImg}`}>
                <img src={images[0] ? images[0] : ''} alt="foot"/>
            </section>

            <section className={`${classes.productCardPrice}`}>
            {/*    <div className="productCard-price-star">*/}
            {/*        <p className="size">{rating}</p>*/}
            {/*        <img src={star} alt="icon"/>*/}
            {/*    </div>*/}
            {/*    <p className="productCard-price-price size">*/}
            {/*        {price}*/}
            {/*    </p>*/}
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