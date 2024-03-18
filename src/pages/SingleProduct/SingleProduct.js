import React, {useEffect} from 'react';
import {useParams, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AiOutlineArrowLeft} from "react-icons/ai";

import classes from "./SingleProduct.module.css";
import {getSingleProduct} from "../../store/slices/singleProduct.slice";
import nextFot from '../../images/fotoF.jpg';
import {cartActions} from "../../store/slices/cart.slice";
import star from "../../images/Star.png";


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

    const addToCart = (e) => {
        e.stopPropagation();
        dispatch(cartActions.setProductInCart(singleProductObj));
        alert(`product ${title} added to cart!`);
    }

    return (
        <main className={`width`}>
            {
                singleProductObj &&
                <main className={`${classes.wrap} width`}>
                    <section className={`${classes.productCardImg} width flex`}>
                        {images && < img src={images[0] ? images[0] : nextFot} alt="foot"/>}
                    </section>

                    <section className={`${classes.titleBlock} width flex`}>
                        {title && <p>{title}</p>}
                    </section>

                    <section className={`${classes.productCardPrice}`}>
                        <article className={`${classes.productCardPriceStar}`}>
                            <p className={`${classes.size}`}>{rating}</p>
                            <img src={star} alt="icon"/>
                        </article>

                        <p className={`${classes.productCardPricePrice} ${classes.size}`}>
                            {price}
                        </p>
                    </section>

                    <section className={`width flex ${classes.blockBtn}`}>
                        <button onClick={goBack}
                                className={`${classes.btn} flex`}
                        >
                            <AiOutlineArrowLeft className={`${classes.icon}`}/>
                            go back
                        </button>

                        <button onClick={addToCart}
                                className={`${classes.btn} flex`}
                        >
                            add to cart
                        </button>
                    </section>
                </main>
            }
        </main>
    );
};

export {SingleProduct};