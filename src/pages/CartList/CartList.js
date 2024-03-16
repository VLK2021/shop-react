import React from 'react';
import {useSelector} from "react-redux";

import classes from "./CartList.module.css";
import {AiFillCloseCircle} from "react-icons/ai";
import {ProductCardInCart} from "../../components";


const CartList = ({cartArr, onClick, cartListVisible, setCartListVisible}) => {
    const {totalPrice} = useSelector(store => store.cart);


    return (
        <main className={`${classes.wrap}`}>
            <section className={`${classes.cartListGoOut}`} onClick={() => setCartListVisible(!cartListVisible)}>
                <p>
                    <AiFillCloseCircle
                        size={25}
                        color={'#7E72F2'}
                    />
                </p>
            </section>

            <section className={`${classes.cartListProducts}`}>
                {
                    cartArr.length > 0 ? cartArr.map(prod => <ProductCardInCart key={prod.id} prod={prod}/>) :
                        <p className={`${classes.cartListTitleText}`}>кошик порожній!!!</p>
                }
            </section>
            <hr/>

            <section className={`${classes.cartListMainOrder}`}>{
                cartArr.length > 0 ?
                    <section className={`${classes.cartListOrder}`}>
                        <article className={`${classes.cartListOrderTotalPrice}`}>
                            <p className={`${classes.cartListTitleText}`}>сумма замовлення:</p>
                            <p className={`${classes.cartListTotalPrice}`}>{totalPrice} ua</p>
                        </article>

                        <button className={`${classes.cartListBtn}`} onClick={onClick}>
                            оформити замовлення
                        </button>
                    </section>
                    : null
            }</section>
        </main>
    );
};

export {CartList};