import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {BiMinusCircle, BiPlusCircle} from "react-icons/bi";

import classes from "./ProductCardInCart.module.css";
import {cartActions} from "../../store/slices/cart.slice";


const ProductCardInCart = ({prod}) => {
    const dispatch = useDispatch();
    const {images, title, price, count} = prod;

    const [numberOfProducts, setNumberOfProducts] = useState(1);

    const minusProduct = () => {
        setNumberOfProducts(numberOfProducts - 1);
        if (numberOfProducts <= 1) {
            dispatch(cartActions.delProductFromCart(prod));
        }
    }

    const plusProduct = () => {
        setNumberOfProducts(numberOfProducts + 1);
        dispatch(cartActions.setProductInCart(prod));
    }


    return (
        <main className={`${classes.wrap}`}>
            <section className={`${classes.productCardInCartImg}`}>
                <img src={images[0]} alt="foto"/>
            </section>

            <section className={`${classes.productCardInCartTextTitle}`}>
                <p>{title}</p>
            </section>

            <div className={`${classes.productCardInCartAddDell}`}>
                <BiMinusCircle className={'BiMinusCircle'} size={20} onClick={minusProduct}/>

                <p className={`${classes.productCardInCartAddDellCount}`}>{count}</p>

                <BiPlusCircle className={`${classes.BiPlusCircle}`} size={20} onClick={plusProduct}/>
            </div>

            <div className={`${classes.productCardInCartPrice}`}>
                <p>{price * count}</p>
            </div>
        </main>
    );
};

export {ProductCardInCart};