import React, {useEffect} from 'react';
import {useSearchParams} from "react-router-dom";

import classes from "./Category.module.css";


const Category = ({obj, paramKey}) => {
    const [query, setQuery] = useSearchParams();
    const page = 1;

    useEffect(() => {
        const word = query.toString();
    }, [query]);

    const changeInput = (e) => {
        const currentCategory = e.target.value;
        const selectedCategories = query.getAll(paramKey);

        if (e.target.checked === true && paramKey === 'category') {
            selectedCategories.push(currentCategory);
        } else {
            const index = selectedCategories.indexOf(currentCategory);
            if (index !== -1) {
                selectedCategories.splice(index, 1);
            }
        }

        setQuery({ ...query, category: selectedCategories, brand: query.getAll('brand') });
    };


    return (
        <main className={`${classes.wrap} width flex`}>
            <input
                type="checkbox"
                id={obj}
                name={obj.replace(' ', "_")}
                onChange={changeInput}
                value={obj}
                checked={query.getAll(paramKey).includes(obj)}
            />
            <label htmlFor={obj} className={`${classes.label}`}>{obj}</label>
        </main>
    );
};

export {Category};


