import React from 'react';

import classes from "./SearchProducts.module.css";
import {useSelector} from "react-redux";
import {Pagination, ProductCard} from "../../components";


const SearchProducts = () => {
    const {searchArr} = useSelector(store => store.search);


    return (
        <main className={`${classes.wrap} width`}>
            {
                searchArr && searchArr
                    .map(product => <ProductCard key={product.id} product={product}/>)
            }

            <section className={`width`}>
                <Pagination/>
            </section>
        </main>
    );
};

export {SearchProducts};