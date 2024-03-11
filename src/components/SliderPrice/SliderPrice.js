import React, {useEffect} from 'react';
import {Slider} from "@mui/material";
import {useSearchParams} from "react-router-dom";
import {useDispatch} from "react-redux";

import classes from "./SliderPrice.module.css";
import {getAllProducts, getTotalProducts} from "../../store/slices/products.slice";


const SliderPrice = ({value, setValue}) => {
    const dispatch = useDispatch();
    const [query, setQuery] = useSearchParams();

    const page = 1;

    const handleChange = (_, value) => {
        setValue(value);
        setQuery({
            ...query,
            category: query.getAll('category'),
            brand: query.getAll('brand'),
            price_gte: value[0],
            price_lte: value[1],
        })
    }

    useEffect(() => {
        const word = query.toString().toLowerCase();

        dispatch(getAllProducts({ word, page }));
        dispatch(getTotalProducts({ word, page }));
    }, [query]);

    const valuetext = (e) => `${value}`;


    return (
        <main className={`${classes.wrap} width flex-direction`}>
            <h2 className={`${classes.title} width`}>Search price</h2>

            <Slider
                className={`${classes.sliderPrice}`}
                min={0}
                max={85000}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}
            />

            <div className={`${classes.sliderPriceNumbers} flex width`}>
                <div>{`${value[0]} ua`}</div>
                <div>{`${value[1]} ua`}</div>
            </div>

        </main>
    );
};

export {SliderPrice};