import React from 'react';

import classes from "./Layout.module.css";
import {Brands, Categories, Header} from "../components";


const Layout = () => {
    return (
        <main className={`${classes.wrap} width flex-direction`}>
            <section className={`${classes.blockHeader} width flex`}>
                <Header/>
            </section>

            <section className={`${classes.blockMainInfo} width flex`}>
                <aside className={`${classes.blockFilter} flex-direction`}>
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