import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {AiOutlineLeft, AiOutlineRight} from "react-icons/ai";

import classes from "./Pagination.module.css";
import {getAllProducts} from "../../store/slices/products.slice";
import {getSearchProducts} from "../../store/slices/search.slice";


const Pagination = () => {
    const {totalProductsInArr} = useSelector(store => store.products);
    const {totalSearchProductsInArr} = useSelector(store => store.search);
    const {q} = useParams();

    let endPagesFinal;
    if (q) {
        endPagesFinal = Math.ceil(totalSearchProductsInArr / 9)
    } else {
        endPagesFinal = Math.ceil(totalProductsInArr / 9)
    }

    const dispatch = useDispatch();

    const [startPage, setStartPage] = useState(1);
    const [endPage, setEndPage] = useState(0);
    const [page, setPage] = useState(1);

    const pages = [];

    useEffect(() => {
        setEndPage(endPagesFinal);
    }, [endPagesFinal]);


    for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
    }

    const onPageChange = (page) => {
        if (getAllProducts) {
            dispatch(getAllProducts(page));
            setPage(page);
        }

        if (getSearchProducts) {
            dispatch(getSearchProducts({word: q, page}));
            setPage(page);
        }
    };



    return (
        <main className={`${classes.wrap} flex`}>
            <button className={`${classes.paginationBtn}`} onClick={() => {
                onPageChange(page - 1);
            }}>
                <AiOutlineLeft
                    className={`${classes.AiOutline}`}
                    size={35}
                    fill={'#7E72F2'}
                />
            </button>

            {
                pages.map(item =>
                    <div key={item}
                         className={`${classes.paginationPages} ${page === item ? classes.activePage : ''}`}
                         onClick={() => {
                             onPageChange(item);
                         }}>{item}
                    </div>)
            }

            <button className={`${classes.paginationBtn}`} onClick={() => {
                onPageChange(page + 1);

            }}>
                <AiOutlineRight
                    className={`${classes.AiOutline}`}
                    size={35}
                    fill={'#7E72F2'}
                />
            </button>
        </main>
    );
};

export {Pagination};