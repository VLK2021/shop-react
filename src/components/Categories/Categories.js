import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {v4} from 'uuid';

import classes from "./Categories.module.css";
import {getAllCategories} from "../../store/slices/categories.slice";
import {Category} from "../Category/Category";


const Categories = () => {
    const {categoriesArr} = useSelector(store => store.categories);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCategories());
    }, []);


    return (
        <main className={`${classes.wrap} width flex-direction`}>
            <h2 className={`${classes.title} width`}>Categories</h2>

            <article className={`width`}>
                {categoriesArr && categoriesArr
                    .map(obj => <Category key={v4()} obj={obj} paramKey={'category'}/>)
            }
            </article>
        </main>
    );
};

export {Categories};