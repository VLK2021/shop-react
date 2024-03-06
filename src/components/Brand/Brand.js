import React from 'react';

import classes from "../Category/Category.module.css";



const Brand = ({obj}) => {

    return (
        <main className={`${classes.wrap} width flex`}>
            <input
                type="checkbox"
                id={obj}
                name={obj.replace(' ', "_")}
                // onChange={changeInput}
                value={obj}
                // checked={isChecked}
            />
            <label htmlFor={obj} className={`${classes.label}`}>{obj}</label>
        </main>
    );
};

export {Brand};