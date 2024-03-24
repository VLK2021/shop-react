import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

import './index.css';
import {App} from "./App";
import store from "./store/store";
import {Spinner} from "./components";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <Suspense fallback={<div><Spinner/></div>}>
                <App/>
            </Suspense>
        </BrowserRouter>
    </Provider>
);

