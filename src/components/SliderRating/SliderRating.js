import React, {useEffect} from 'react';
import {Slider} from "@mui/material";
import {useDispatch} from "react-redux";
import {useSearchParams} from "react-router-dom";

import classes from "./SliderRating.module.css";
import {getAllProducts, getTotalProducts} from "../../store/slices/products.slice";


const SliderRating = ({valueRating, setValueRating}) => {
    const dispatch = useDispatch();
    const [query, setQuery] = useSearchParams();

    const page = 1;

    const handleChange = (e, valueRating) => {
        setValueRating(valueRating);
        setQuery({
            ...query,
            category: query.getAll('category'),
            brand: query.getAll('brand'),
            price_gte: query.getAll('price_gte'),
            price_lte: query.getAll('price_lte'),
            rating_gte: valueRating[0],
            rating_lte: valueRating[1],
        })
    }

    useEffect(() => {
        const word = query.toString().toLowerCase();

        dispatch(getAllProducts({word, page}));
        dispatch(getTotalProducts({word, page}));
    }, [query]);

    const valuetext = (e) => `${valueRating}`;


    return (
        <main className={`${classes.wrap} width flex-direction`}>
            <h2 className={`${classes.title} width`}>Search rating</h2>

            <Slider
                className={`${classes.sliderRating}`}
                min={0}
                max={5}
                step={0.01}
                value={valueRating}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}
            />

            <div className={`${classes.sliderRatingNumbers} flex width`}>
                <div>{valueRating[0]}</div>
                <div>{valueRating[1]}</div>
            </div>
        </main>
    );
};

export {SliderRating};