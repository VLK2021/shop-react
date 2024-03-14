import React from 'react';
import {useParams} from "react-router-dom";

import classes from "./SingleProduct.module.css";


const SingleProduct = () => {
    const {id} = useParams();



    return (
        <main className={`${classes.wrap} width`}>

        </main>
    );
};

export {SingleProduct};