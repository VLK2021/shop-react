import React from 'react';

import classes from "./Header.module.css";
import {Cart} from "../Cart/Cart";
import {HeaderTitle} from "../HeaderTitle/HeaderTitle";


const Header = () => {


    return (
        <main className={`${classes.wrap} width flex`}>
            <section>
                <HeaderTitle/>
            </section>

            <section className={`${classes.blockCart}`}>
                <Cart/>
            </section>
        </main>
    );
};

export {Header};