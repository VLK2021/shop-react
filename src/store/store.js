import {combineReducers, configureStore} from "@reduxjs/toolkit";

import categoriesReducer from './slices/categories.slice';


const rootReducer = combineReducers({
    categories: categoriesReducer,
});


const store = configureStore({
    reducer: rootReducer
});

export default store;