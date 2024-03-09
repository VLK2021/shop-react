import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import {useSearchParams} from "react-router-dom";

import classes from "./FormForSearch.module.css";
import {getAllProducts, getTotalProducts} from "../../store/slices/products.slice";


const FormForSearch = () => {
    const dispatch = useDispatch();
    const {register, setValue} = useForm();

    const [query, setQuery] = useSearchParams();

    const page = 1;

    const handleChange = (e) => {
        const q = e.target.value;
        setQuery({q});
        setValue('search', q);
    };

    useEffect(() => {
        const q = query.get('q');
        console.log(q);

        dispatch(getAllProducts({word: `q=${q}`, page}));
        dispatch(getTotalProducts({word: `q=${q}`, page}));
    }, [query]);


    return (
        <main className={`${classes.wrap} width`}>
            <form>
                <input className={`${classes.searchInput} width`}
                       defaultValue={''}
                       {...register('search')}
                       type="text"
                       placeholder={'Search...'}
                       onChange={handleChange}
                />
            </form>
        </main>
    );
};

export {FormForSearch};