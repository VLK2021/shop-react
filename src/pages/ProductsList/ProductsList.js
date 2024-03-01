import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import classes from "./ProductsList.module.css";
import {getAllProducts, getTotalProducts} from "../../store/slices/products.slice";
import {Pagination, ProductCard} from "../../components";



const ProductsList = () => {
    const {productsArr} = useSelector(store => store.products);
    const dispatch = useDispatch();
    const page = 1;


    useEffect(() => {
        dispatch(getAllProducts(page));
        dispatch(getTotalProducts(page));
    }, []);



    return (
        <main className={`${classes.wrap} width`}>
            {
                productsArr && productsArr
                    .map(product => <ProductCard key={product.id} product={product}/>)
            }

            <Pagination/>
        </main>
    );
};

export {ProductsList};