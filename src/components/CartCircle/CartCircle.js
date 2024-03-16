import React from 'react';

import classes from "./CartCircle.module.css";


const CartCircle = ({arr}) => {
    const count = arr.reduce((p, c) => p + c.count, 0);


    return count > 0 ? (
        <main className={`${classes.wrap} flex`}>
            {count}
        </main>
    ) : null
};

export {CartCircle};