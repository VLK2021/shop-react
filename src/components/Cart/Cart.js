import React, {useState} from 'react';
import {useSelector} from "react-redux";

import classes from "./Cart.module.css";
import {BiCartAlt} from "react-icons/bi";
import {CartList} from "../../pages";


const Cart = () => {
    const [cartListVisible, setCartListVisible] = useState(false);
    const {cartArr, totalPrice} = useSelector(store => store.cart);


    return (
        <main className={`${classes.wrap}`}>
            <section className={`${classes.cartBlockFirst} flex`}>
                <BiCartAlt
                    size={30}
                    className={`${classes.cartBlockBitCartAlt}`}
                    onClick={() => setCartListVisible(true)}
                />

                <p className={`${classes.cartBlockText}`}>cart</p>
            </section>

            <section className={`${classes.cartBlockSecond}`}>
                {totalPrice > 0 ? (
                    <p className={`${classes.cartBlockTotalPrice}`}>{totalPrice} ua</p>
                ) : null}
            </section>

            {cartListVisible &&
            <CartList cartArr={cartArr}
                      cartListVisible={cartListVisible}
                      setCartListVisible={setCartListVisible}
                      onClick={() => null}/>
            }
        </main>
    );
};

export {Cart};