import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import classes from "./SingleProduct.module.css";
import {getSingleProduct} from "../../store/slices/singleProduct.slice";
import nextFot from '../../images/fotoF.jpg';


const SingleProduct = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const {singleProductObj} = useSelector(store => store.singleProduct);

    const {category, price, rating, title, images} = singleProductObj;

    useEffect(() => {
        dispatch(getSingleProduct({id}));
    }, [id]);


    return (
        <main className={`width`}>
            {
                singleProductObj &&
                <main className={`${classes.wrap} width`}>
                    <section className={`${classes.productCardImg} width`}>
                        <img src={images[0] ? images[0] : nextFot} alt="foot"/>
                    </section>

                </main>
            }
        </main>
    );
};

export {SingleProduct};