import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import classes from "./ProductsList.module.css";
import {getAllProducts, getTotalProducts} from "../../store/slices/products.slice";
import {Pagination, ProductCard, Spinner} from "../../components";


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
                productsArr.length > 0 ? productsArr.map(product => <ProductCard key={product.id} product={product}/>) :
                    <Spinner/>
            }

            <section className={`width`}>
                {productsArr.length > 0 ? <Pagination/> : null}
            </section>
        </main>
    );
};

export {ProductsList};