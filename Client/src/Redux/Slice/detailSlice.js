import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const detailData = createAsyncThunk('detaildata', async (data) => {

    const result = fetch(``).then((res) => {
        return res.json();
    })
    return result;
})

export const detailReducer = createSlice({
    name: 'detaildata',
    initialState: {
        detail: [],
        loading: false
    },
    reducer: {},
    extraReducers: {
        [detailData.pending]: (state, action) => {
            state.loading = true;
        },
        [detailData.fulfilled]: (state, action) => {
            console.log(action.payload);
            state.detail = action.payload;
            state.loading = false;
        },
        [detailData.rejected]: (state, action) => {
            state.loading = false;
        }
    }
})

const detail = detailReducer.reducer;

export default detail;