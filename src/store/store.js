import {combineReducers, configureStore} from "@reduxjs/toolkit";

import categoriesReducer from './slices/categories.slice';
import brandsReducer from './slices/brand.slice';
import productsReducer from './slices/products.slice';


const rootReducer = combineReducers({
    categories: categoriesReducer,
    brands: brandsReducer,
    products: productsReducer,
});


const store = configureStore({
    reducer: rootReducer
});

export default store;