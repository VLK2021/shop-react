import React from 'react';

import classes from "./Layout.module.css";


const Layout = () => {
    return (
        <main className={`${classes.wrap} width flex-direction`}>
            <section className={`${classes.blockHeader} width flex`}>

            </section>

            <section className={`${classes.blockMainInfo} width flex`}>

            </section>
        </main>
    );
};

export {Layout};