// import React, {useEffect} from 'react';
// import {useDispatch} from "react-redux";
// import {useForm} from "react-hook-form";
// import {useNavigate, useSearchParams} from "react-router-dom";
//
// import classes from "./FormForSearch.module.css";
// import {getSearchProducts, getTotalSearch} from "../../store/slices/search.slice";
//
//
// const FormForSearch = () => {
//     const dispatch = useDispatch();
//     const {register, setValue} = useForm();
//     const navigate = useNavigate();
//
//     const [query, setQuery] = useSearchParams();
//
//     const page = 1;
//
//     const handleChange = async (e) => {
//         const q = e.target.value;
//
//         setQuery({q});
//
//         if (q) {
//             await dispatch(getSearchProducts({word: q, page}));
//             await dispatch(getTotalSearch({word: q, page}));
//         }
//
//         setValue('search', q);
//
//         if (q) {
//             navigate(`/search/${q}`);
//         } else {
//             navigate(`/`);
//         }
//     };
//
//     useEffect(() => {
//         const q = query.get('q');
//     }, [query]);
//
//
//     return (
//         <main className={`${classes.wrap} width`}>
//             <form>
//                 <input className={`${classes.searchInput} width`}
//                        defaultValue={''}
//                        {...register('search')}
//                        type="text"
//                        placeholder={'Search...'}
//                        onChange={handleChange}
//                 />
//             </form>
//         </main>
//     );
// };
//
// export {FormForSearch};

import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import {useSearchParams} from "react-router-dom";

import classes from "./FormForSearch.module.css";
import {getAllProducts, getTotalProducts} from "../../store/slices/products.slice";


const FormForSearch = () => {
    const dispatch = useDispatch();
    const {register, setValue} = useForm();
    // const navigate = useNavigate();

    const [query, setQuery] = useSearchParams();

    const page = 1;

    const handleChange = (e) => {
        const q = e.target.value;

        setQuery({q});

        // if (q) {
        //     await dispatch(getAllProducts({word: q, page}));
        //     await dispatch(getTotalProducts({word: q, page}));
        // }

        setValue('search', q);

        // if (q) {
        //     navigate(`/search/${q}`);
        // } else {
        //     navigate(`/`);
        // }
    };

    useEffect(() => {
        const q = query.get('q');

        dispatch(getAllProducts({word: q, page}));
        dispatch(getTotalProducts({word: q, page}));
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