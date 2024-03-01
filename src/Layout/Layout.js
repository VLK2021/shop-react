import React, {useState} from 'react';
import {useNavigate, Outlet} from "react-router-dom";

import classes from "./Layout.module.css";
import {Brands, Categories, FormForSearch, Header, SliderPrice, SliderRating} from "../components";


const Layout = () => {
    const navigate = useNavigate();
    const [value, setValue] = useState([0, 85000]);
    const [valueRating, setValueRating] = useState([0, 5]);

    const handleClear = () => {
        const box = document.getElementsByClassName('checkbox');
        for (let i = 0; i < box.length; i++) {
            if (box[i].checked) {
                box[i].checked = !box[i].checked;
            }
        }

        setValue([0, 85000]);
        setValueRating([0, 5]);
        navigate(`/`);
    }


    return (
        <main className={`${classes.wrap} width flex-direction`}>
            <section className={`${classes.blockHeader} width flex`}>
                <Header/>
            </section>

            <section className={`${classes.blockMainInfo} width flex`}>
                <aside className={`${classes.blockFilter} flex-direction`}>
                    <SliderPrice value={value} setValue={setValue}/>
                    <Categories/>
                    <Brands/>
                    <SliderRating valueRating={valueRating} setValueRating={setValueRating}/>

                    <article className={`width flex`}>
                        <button className={`${classes.clearBtn} width flex`}
                                onClick={handleClear}
                        >clear all
                        </button>
                    </article>
                </aside>

                <section className={`${classes.blockSearchOutlet}`}>
                    <article className={`${classes.blockSearchOutletSearch} width`}>
                        <FormForSearch/>
                    </article>

                    <article className={`${classes.blockSearchOutletOutlet} width`}>
                        <Outlet/>
                    </article>
                </section>
            </section>
        </main>
    );
};

export {Layout};