import React, {useEffect} from 'react';
import {useSearchParams} from "react-router-dom";
import {useDispatch} from "react-redux";

import classes from "./Category.module.css";
import {getAllProducts, getTotalProducts} from "../../store/slices/products.slice";


const Category = ({obj, paramKey}) => {
    const dispatch = useDispatch();
    const [query, setQuery] = useSearchParams();
    const page = 1;

    useEffect(() => {
        const word = query.toString().toLowerCase();

        if (word.includes('category')) {
            dispatch(getAllProducts({word, page}));
            dispatch(getTotalProducts({word, page}));
        } else {
            const word = query.toString().toLowerCase();
            dispatch(getAllProducts({word, page}));
            dispatch(getTotalProducts({word, page}));
        }

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

        setQuery({
            ...query,
            category: selectedCategories,
            brand: query.getAll('brand'),
            price_gte: query.getAll('price_gte'),
            price_lte: query.getAll('price_lte'),
        });
    };


    return (
        <main className={`${classes.wrap} width flex`}>
            <input
                type="checkbox"
                id={obj}
                name={obj.replace(' ', "_")}
                onChange={changeInput}
                value={obj.replace(' ', "_")}
                checked={query.getAll(paramKey).includes(obj.replace(' ', "_"))}
            />
            <label htmlFor={obj} className={`${classes.label}`}>{obj}</label>
        </main>
    );
};

export {Category};


