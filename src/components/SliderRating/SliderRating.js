import React from 'react';
import {Slider} from "@mui/material";

import classes from "./SliderRating.module.css";


const SliderRating = ({valueRating, setValueRating}) => {

    const handleChange = (e, valueRating) => {
        setValueRating(valueRating);
    }

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
                // onClick={changeRating}
            />

            <div className={`${classes.sliderRatingNumbers} flex width`}>
                <div>{valueRating[0]}</div>
                <div>{valueRating[1]}</div>
            </div>
        </main>
    );
};

export {SliderRating};