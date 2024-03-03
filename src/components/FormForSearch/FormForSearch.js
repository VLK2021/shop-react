// import React, {useEffect} from 'react';
// // import {useDispatch} from "react-redux";
// // import {useForm} from "react-hook-form";
// // import {useNavigate, useSearchParams} from "react-router-dom";
// //
// // import classes from "./FormForSearch.module.css";
// // import {getSearchProducts, getTotalSearch} from "../../store/slices/search.slice";
// //
// //
// // const FormForSearch = () => {
// //     const dispatch = useDispatch();
// //     const {register, handleSubmit, setValue} = useForm();
// //     const navigate = useNavigate();
// //
// //     const [query, setQuery] = useSearchParams();
// //
// //     const page = 1;
// //
// //     const submit = (data) => {
// //         setQuery({q: data.search});
// //         const q = query.get('q');
// //
// //             if (q) {
// //                 dispatch(getSearchProducts({ word: q, page }));
// //                 dispatch(getTotalSearch({ word: q, page }));
// //             }
// //
// //         setValue('search', q);
// //
// //         navigate(`search/${q}`)
// //     }
// //
// //     // useEffect(() => {
// //     //     const q = query.get('q');
// //     //
// //     //     if (q) {
// //     //         dispatch(getSearchProducts({ word: q, page }));
// //     //         dispatch(getTotalSearch({ word: q, page }));
// //     //     }
// //     //
// //     //     setValue('search', q);
// //     // }, [query]);
// //
// //     // const submit = (data) => {
// //     //     setQuery({q: data.search});
// //     //
// //     //     navigate(`search/${data.search}`)
// //     // }
// //
// //
// //     return (
// //         <main className={`${classes.wrap} width`}>
// //             <form onChange={handleSubmit(submit)}>
// //                 <input className={`${classes.searchInput} width`}
// //                        defaultValue={''}
// //                        {...register('search')}
// //                        type="text"
// //                        placeholder={'Search...'}
// //                 />
// //             </form>
// //         </main>
// //     );
// // };
// //
// // export {FormForSearch};


import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import {useNavigate, useSearchParams} from "react-router-dom";

import classes from "./FormForSearch.module.css";
import {getSearchProducts, getTotalSearch} from "../../store/slices/search.slice";


const FormForSearch = () => {
    const dispatch = useDispatch();
    const {register, setValue} = useForm();
    const navigate = useNavigate();

    const [query, setQuery] = useSearchParams();

    const page = 1;

    const handleChange = async (e) => {
        const q = e.target.value;

        setQuery({q});

        if (q) {
            await dispatch(getSearchProducts({word: q, page}));
            await dispatch(getTotalSearch({word: q, page}));
        }

        setValue('search', q);

        if (q) {
        navigate(`/search/${q}`);
        } else {
            navigate(`/`);
        }
    };

    useEffect(() => {
        const q = query.get('q');
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