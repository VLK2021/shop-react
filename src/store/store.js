import {combineReducers, configureStore} from "@reduxjs/toolkit";

import categoriesReducer from './slices/categories.slice';
import brandsReducer from './slices/brand.slice';


const rootReducer = combineReducers({
    categories: categoriesReducer,
    brands: brandsReducer,
});


const store = configureStore({
    reducer: rootReducer
});

export default store;