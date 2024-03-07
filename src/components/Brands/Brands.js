import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {v4} from "uuid";

import classes from "./Brands.module.css";
import {getAllBrands} from "../../store/slices/brand.slice";
import {Brand} from "../Brand/Brand";


const Brands = () => {
    const {brandsArr} = useSelector(store => store.brands);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllBrands());
    }, []);


    return (
        <main className={`${classes.wrap} width flex-direction`}>
            <h2 className={`${classes.title} width`}>Brands</h2>

            <article className={`width`}>
                {brandsArr && brandsArr
                        .map(obj => <Brand key={v4()} obj={obj} paramKey={'brand'}/>)
                }
            </article>
        </main>
    );
};

export {Brands};