import React from 'react';

import classes from "./Spinner.module.css";



const Spinner = () => {
    return (
        <div className={`${classes.spinner}`}>
            <p className={`width`}>Loading...</p>

            <div className={`${classes.wrap} ${classes.circle1}`}></div>
            <div className={`${classes.wrap} ${classes.circle2}`}></div>
            <div className={`${classes.wrap} ${classes.circle3}`}></div>
        </div>
    );
};

export {Spinner};