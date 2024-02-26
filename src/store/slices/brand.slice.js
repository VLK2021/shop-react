import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {productsService} from "../../services/products.service";


export const getAllBrands = createAsyncThunk(
    'brandSlice/getAllBrands',
    async (_, {rejectWithValue}) => {
        try {
            return await productsService.getAllBrands();
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);


const initialState = {
    brandsArr: [],
    status: null,
    error: null,
}

const brandSlice = createSlice({
    name: 'brandSlice',
    initialState,

    reducers: {},

    extraReducers: builder => {
        builder
            .addCase(getAllBrands.pending, (state) => {
                state.status = 'loading!';
            })

            .addCase(getAllBrands.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.brandsArr = action.payload;
            })

            .addCase(getAllBrands.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.payload || 'Request failed';
            })
    }
});

export default brandSlice.reducer;