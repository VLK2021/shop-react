import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {productsService} from "../../services/products.service";


export const getAllCategories = createAsyncThunk(
    'categoriesSlice/getAllCategories',
    async (_, {rejectWithValue}) => {
        try {
            return await productsService.getAllCategories();
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);


const initialState = {
    categoriesArr: [],
    status: null,
    error: null,
}


const categoriesSlice = createSlice({
    name: 'categoriesSlice',
    initialState,

    reducers: {},

    extraReducers: builder => {
        builder
            .addCase(getAllCategories.pending, (state) => {
                state.status = 'loading';
            })

            .addCase(getAllCategories.fulfilled, (state, action) => {
                console.log(action.payload);
                state.status = 'fulfilled';
                state.categoriesArr = action.payload;
            })

            .addCase(getAllCategories.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.payload || 'Request failed';
            });
    }

});

export default categoriesSlice.reducer;