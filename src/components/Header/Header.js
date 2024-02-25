import React from 'react';
import {Link} from "react-router-dom";

import classes from "./Header.module.css";


const Header = () => {
    return (
        <main className={`${classes.wrap} width flex`}>
            <Link to={'/'}>
                <h1 className={`${classes.blockTitle}`}>Online store</h1>
            </Link>

            <section className={`${classes.blockCart}`}>

            </section>
        </main>
    );
};

export {Header};