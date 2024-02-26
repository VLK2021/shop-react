import React from 'react';

import classes from "./SingleItemCategoryBrand.module.css";


const SingleItemCategoryBrand = ({obj}) => {


    const changeInput = (e) => {
        if (e.target.checked === true) {
            console.log(e.target.name);
        }
    }


    return (
        <main className={`${classes.wrap} width flex`}>
            <input type="checkbox"
                   id={obj}
                   name={obj.replace(' ', "_")}
                   onInput={changeInput}
            />

            <label htmlFor={obj} className={`${classes.label}`}>{obj}</label>
        </main>
    );
};

export {SingleItemCategoryBrand};