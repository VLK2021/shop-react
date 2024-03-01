import React from 'react';

import classes from "./SearchProducts.module.css";
import {useSelector} from "react-redux";


const SearchProducts = () => {
    const {totalProductsInArr} = useSelector(store => store.search);


    return (
        <main>
            {totalProductsInArr && totalProductsInArr}
        </main>
    );
};

export {SearchProducts};