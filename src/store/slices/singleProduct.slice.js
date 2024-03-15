import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {productsService} from "../../services/products.service";



export const getSingleProduct = createAsyncThunk(
   'singleProductSlice/getSingleProduct',
    async ({id}, {rejectWithValue}) => {
       try {
           return await productsService.getSingleProduct(id);
       } catch (e) {
           return rejectWithValue(e.message);
       }
    }
);


const initialState = {
    singleProductObj: {},
    status: null,
    error: null,
}


const singleProductSlice = createSlice({
    name: 'singleProductSlice',
    initialState,

    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getSingleProduct.pending, (state) => {
                state.status = 'Loading!'
            })

            .addCase(getSingleProduct.fulfilled, (state, action) => {
                state.status = 'fulfilled'
                state.singleProductObj = action.payload
            })

            .addCase(getSingleProduct.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.payload || 'Request failed';
            })
    }
});

export default singleProductSlice.reducer;