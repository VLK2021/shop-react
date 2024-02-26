import React, {useState} from 'react';

import classes from "./Layout.module.css";
import {Brands, Categories, Header, SliderPrice} from "../components";


const Layout = () => {
    const [value, setValue] = useState([0, 85000]);
    const [valueRating, setValueRating] = useState([0, 5]);


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
                </aside>

                <section className={`${classes.blockSearchOutlet}`}>
                    <article className={`${classes.blockSearchOutletSearch} width`}>

                    </article>

                    <article className={`${classes.blockSearchOutletOutlet} width`}>

                    </article>
                </section>
            </section>
        </main>
    );
};

export {Layout};