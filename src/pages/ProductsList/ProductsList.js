import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import classes from "./ProductsList.module.css";
import {getAllProducts, getTotalProducts} from "../../store/slices/products.slice";
import {Pagination, ProductCard} from "../../components";


const ProductsList = () => {
    const {error, productsArr} = useSelector(store => store.products);
    const dispatch = useDispatch();
    const page = 1;
    const word = '';


    useEffect(() => {
        dispatch(getAllProducts({word, page}));
        dispatch(getTotalProducts({word, page}));
    }, []);



    return (
        <main className={`${classes.wrap} width`}>
            {error && <h1>{error}</h1>}

            {
                productsArr && productsArr
                    .map(product => <ProductCard key={product.id} product={product}/>)
            }

            <section className={`width`}>
                <Pagination/>
            </section>
        </main>
    );
};

export {ProductsList};