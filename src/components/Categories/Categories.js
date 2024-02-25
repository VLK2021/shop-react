import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";

import classes from "./Categories.module.css";
import {getAllCategories} from "../../store/slices/categories.slice";


const Categories = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCategories());
    }, []);


    return (
        <main className={`${classes.wrap} width flex-direction`}>
            Categories
        </main>
    );
};

export {Categories};