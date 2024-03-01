import {combineReducers, configureStore} from "@reduxjs/toolkit";

import categoriesReducer from './slices/categories.slice';
import brandsReducer from './slices/brand.slice';
import productsReducer from './slices/products.slice';
import searchReducer from './slices/search.slice';


const rootReducer = combineReducers({
    categories: categoriesReducer,
    brands: brandsReducer,
    products: productsReducer,
    search: searchReducer,
});


const store = configureStore({
    reducer: rootReducer
});

export default store;