import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

import classes from "./Header.module.css";
import {Cart} from "../Cart/Cart";


const Header = () => {
    const colors = ['#7E72F2', '#2C2C2C', 'yellow', 'green'];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % colors.length);
        }, 1000);

        return () => clearInterval(interval);
    }, []);



    const currentColor = colors[currentIndex];


    return (
        <main className={`${classes.wrap} width flex`}>
            <Link to={'/'}>
                <h1 className={`${classes.blockTitle}`} style={{color: currentColor}}>Online store</h1>
            </Link>

            <section className={`${classes.blockCart}`}>
                <Cart/>
            </section>
        </main>
    );
};

export {Header};