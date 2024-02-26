import React from 'react';
import {Slider} from "@mui/material";

import classes from "./SliderPrice.module.css";


const SliderPrice = ({value, setValue}) => {
    const handleChange = (_, value) => {
        setValue(value);
    }
    const valuetext = (e) => `${value}`;


    return (
        <main className={`${classes.wrap} width flex-direction`}>
            <h2 className={`${classes.title} width`}>Search price</h2>

            <Slider
                className={`${classes.sliderPrice}`}
                min={0}
                max={85000}
                // onMouseUp={getLoad}
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