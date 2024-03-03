import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {productsService} from "../../services/products.service";


export const getAllProducts = createAsyncThunk(
    'productsSlice/getAllProducts',
    async (page, {rejectWithValue}) => {
        try {
            return await productsService.getAllProducts(page);
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

export const getTotalProducts = createAsyncThunk(
    'productsSlice/getTotalProducts',
    async (page, {rejectWithValue}) => {
        try {
            return await productsService.getTotalPagesProducts(page);

        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);


const initialState = {
    productsArr: [],
    status: null,
    error: null,
    totalProductsInArr: 1,
}

const productsSlice = createSlice({
    name: 'productsSlice',
    initialState,

    reducers: {},

    extraReducers: builder => {
        builder
            .addCase(getAllProducts.pending, (state) => {
                state.status = 'Loading!'
            })
            .addCase(getTotalProducts.pending, (state) => {
                state.status = 'Loading!'
            })


            .addCase(getAllProducts.fulfilled, (state, action) => {
                state.status = 'fulfilled'
                state.productsArr = action.payload
            })
            .addCase(getTotalProducts.fulfilled, (state, action) => {
                state.status = 'fulfilled'
                state.totalProductsInArr = action.payload
            })


            .addCase(getAllProducts.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.payload || 'Request failed';
            })
            .addCase(getTotalProducts.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.payload || 'Request failed';
            })

    }
});

export default productsSlice.reducer;