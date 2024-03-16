import {combineReducers, configureStore} from "@reduxjs/toolkit";

import categoriesReducer from './slices/categories.slice';
import brandsReducer from './slices/brand.slice';
import productsReducer from './slices/products.slice';
import singleProductReducer from './slices/singleProduct.slice';
import cartReducer from './slices/cart.slice';


const rootReducer = combineReducers({
    categories: categoriesReducer,
    brands: brandsReducer,
    products: productsReducer,
    singleProduct: singleProductReducer,
    cart: cartReducer,
});


const store = configureStore({
    reducer: rootReducer
});

export default store;