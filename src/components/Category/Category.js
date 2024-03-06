import React, {useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";

import classes from "./Category.module.css";


const Category = ({obj}) => {
    const [query, setQuery] = useSearchParams();

    const page = 1;

    useEffect(() => {
        const category = query.get('category');
    }, [query]);

    const changeInput = (e) => {
        const category = e.target.value;
        if (e.target.checked === true) {

        } else {

        }
    };


    return (
        <main className={`${classes.wrap} width flex`}>
            <input
                type="checkbox"
                id={obj}
                name={obj.replace(' ', "_")}
                onChange={changeInput}
                value={obj}
            />
            <label htmlFor={obj} className={`${classes.label}`}>{obj}</label>
        </main>
    );
};

export {Category};