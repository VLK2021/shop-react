import React, {useEffect} from 'react';

import classes from "../Category/Category.module.css";
import {useSearchParams} from "react-router-dom";


const Brand = ({obj, paramKey}) => {
    const [query, setQuery] = useSearchParams();
    const page = 1;

    // useEffect(() => {
    //     const category = query.getAll('category');
    //     const brand = query.getAll('brand');
    //
    //     console.log('Sending request with parameters:', {
    //         category,
    //         brand,
    //     });
    //
    // }, [query]);

    const changeInput = (e) => {
        const currentBrand = e.target.value;
        const selectedBrands = query.getAll(paramKey);

        if (e.target.checked === true && paramKey === 'brand') {
            selectedBrands.push(currentBrand);
        } else {
            const index = selectedBrands.indexOf(currentBrand);
            if (index !== -1) {
                selectedBrands.splice(index, 1);
            }
        }

        // const existingParams = Object.fromEntries(query.entries());
        // console.log(existingParams);
        setQuery({ ...query, brand: selectedBrands, category: query.getAll('category') });
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

export {Brand};


