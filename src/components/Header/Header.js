import React from 'react';
import {Link} from "react-router-dom";

import classes from "./Header.module.css";
import {Cart} from "../Cart/Cart";


const Header = () => {
    return (
        <main className={`${classes.wrap} width flex`}>
            <Link to={'/'}>
                <h1 className={`${classes.blockTitle}`}>Online store</h1>
            </Link>

            <section className={`${classes.blockCart}`}>
                <Cart/>
            </section>
        </main>
    );
};

export {Header};