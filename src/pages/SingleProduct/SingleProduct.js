import React from 'react';

import classes from "./SingleProduct.module.css";
import {useSelector} from "react-redux";


const SingleProduct = () => {
    const {productsArr} = useSelector(store => store.products);


    return (
        <main className={`${classes.wrap} width`}>
            SingleProduct
        </main>
    );
};

export {SingleProduct};