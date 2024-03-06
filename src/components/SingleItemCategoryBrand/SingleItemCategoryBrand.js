// import React, {useEffect, useState} from 'react';
//
// import classes from "./SingleItemCategoryBrand.module.css";
// import {useSearchParams} from "react-router-dom";
//
//
// const SingleItemCategoryBrand = ({obj}) => {
//     const [query, setQuery] = useSearchParams();
//     const [checkedCategories, setCheckedCategories] = useState([]);
//
//     const page = 1;
//
//     useEffect(() => {
//         const category = query.get('category');
//         const brand = query.get('brand');
//         setCheckedCategories(category ? category.split(',') : []);
//     }, [query]);
//
//     const changeInput = (e) => {
//         const category = e.target.value;
//
//         if (e.target.checked && !checkedCategories.includes(category)) {
//             setCheckedCategories([...checkedCategories, category]);
//         } else if (!e.target.checked && checkedCategories.includes(category)) {
//             setCheckedCategories(checkedCategories.filter((c) => c !== category));
//         }
//
//         query.set('category', checkedCategories.join(','));
//         setQuery(query);
//     }
//
//     const isChecked = checkedCategories.includes(obj);
//
//
//     return (
//         <main className={`${classes.wrap} width flex`}>
//             <input type="checkbox"
//                    id={obj}
//                    name={obj.replace(' ', "_")}
//                    onChange={changeInput}
//                    value={obj}
//                    checked={isChecked}
//             />
//
//             <label htmlFor={obj} className={`${classes.label}`}>{obj}</label>
//         </main>
//     );
// };
//
// export {SingleItemCategoryBrand};


import React, { useState, useEffect } from 'react';
import classes from "./SingleItemCategoryBrand.module.css";
import { useSearchParams } from "react-router-dom";

const SingleItemCategoryBrand = ({ obj }) => {
    const [query, setQuery] = useSearchParams();
    const [checkedCategories, setCheckedCategories] = useState([]);

    useEffect(() => {
        const category = query.get('category');
        // setCheckedCategories(category ? category.split(',') : []);
    }, [query]);

    const changeInput = (e) => {
        const category = e.target.value;

        if (e.target.checked && !checkedCategories.includes(category)) {
            setCheckedCategories([...checkedCategories, category]);
        } else if (!e.target.checked && checkedCategories.includes(category)) {
            setCheckedCategories(checkedCategories.filter((c) => c !== category));
        }

        setQuery((prevQuery) => {
            prevQuery.set('category', checkedCategories.join(','));
            return prevQuery;
        });
    }

    const isChecked = checkedCategories.includes(obj);

    return (
        <main className={`${classes.wrap} width flex`}>
            <input
                type="checkbox"
                id={obj}
                name={obj.replace(' ', "_")}
                onChange={changeInput}
                value={obj}
                checked={isChecked}
            />
            <label htmlFor={obj} className={`${classes.label}`}>{obj}</label>
        </main>
    );
};

export { SingleItemCategoryBrand };
