import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {productsService} from "../../services/products.service";


export const getSearchProducts = createAsyncThunk(
    'searchSlice/getSearchProducts',
    async ({word, page}, {rejectWithValue}) => {
        try {
            return await productsService.getAllSearch(word, page);

        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

export const getTotalSearch = createAsyncThunk(
    'searchSlice/getTotalSearch',
    async ({word, page}, {rejectWithValue}) => {
        try {
            return await productsService.getTotalPagesSearch(word, page);

        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);


const initialState = {
    searchArr: [],
    status: null,
    error: null,
    totalProductsInArr: 18,
}

const searchSlice = createSlice({
    name: 'searchSlice',
    initialState,

    reducers: {},

    extraReducers: builder => {
        builder
            .addCase(getSearchProducts.pending, (state) => {
                state.status = 'Loading...';
            })
            .addCase(getTotalSearch.pending, (state) => {
                state.status = 'Loading...';
            })

            .addCase(getSearchProducts.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.searchArr = action.payload;
            })
            .addCase(getTotalSearch.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.totalProductsInArr = action.payload;
            })

            .addCase(getSearchProducts.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.error.message;
                state.searchArr = [];
            })
            .addCase(getTotalSearch.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.error.message;
                state.searchArr = [];
            })
    }

});

export default searchSlice.reducer;