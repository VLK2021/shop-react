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
        const selectedCategories = query.getAll('category');

        if (e.target.checked === true) {
            selectedCategories.push(category);
        } else {
            const index = selectedCategories.indexOf(category);
            if (index !== -1) {
                selectedCategories.splice(index, 1);
            }
        }

        setQuery({ category: selectedCategories });
    };


    return (
        <main className={`${classes.wrap} width flex`}>
            <input
                type="checkbox"
                id={obj}
                name={obj.replace(' ', "_")}
                onChange={changeInput}
                value={obj}
                checked={query.getAll('category').includes(obj)}
            />
            <label htmlFor={obj} className={`${classes.label}`}>{obj}</label>
        </main>
    );
};

export {Category};