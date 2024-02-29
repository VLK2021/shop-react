import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import classes from "./ProductsList.module.css";
import {getAllProducts, getTotalProducts} from "../../store/slices/products.slice";


const ProductsList = () => {
    const {error, productsArr, totalProductsInArr} = useSelector(store => store.products);
    const dispatch = useDispatch();
    console.log(totalProductsInArr);
    const page = 1;


    useEffect(() => {
        dispatch(getAllProducts(page));
        dispatch(getTotalProducts(page));
    }, []);



    return (
        <main className={`${classes.wrap} width`}>
            ProductsList
        </main>
    );
};

export {ProductsList};