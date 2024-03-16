import React, {useEffect} from 'react';
import {useParams, NavLink, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import classes from "./SingleProduct.module.css";
import {getSingleProduct} from "../../store/slices/singleProduct.slice";
import nextFot from '../../images/fotoF.jpg';
import {AiOutlineArrowLeft} from "react-icons/ai";


const SingleProduct = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {singleProductObj} = useSelector(store => store.singleProduct);

    const {category, price, rating, title, images} = singleProductObj;

    useEffect(() => {
        dispatch(getSingleProduct({id}));
    }, [id]);

    const goBack = () => {
        navigate(-1);
    }

    return (
        <main className={`width`}>
            {
                singleProductObj &&
                <main className={`${classes.wrap} width`}>
                    <section className={`width flex ${classes.blockBtn}`}>
                        <button onClick={goBack}
                        className={`${classes.btn} flex`}
                        >
                            <AiOutlineArrowLeft className={`${classes.icon}`}/>
                            go back
                        </button>
                    </section>

                    <section className={`${classes.productCardImg} width flex`}>
                        <img src={images[0] ? images[0] : nextFot} alt="foot"/>
                    </section>

                </main>
            }
        </main>
    );
};

export {SingleProduct};