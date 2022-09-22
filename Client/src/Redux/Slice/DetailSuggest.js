import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const datas = createAsyncThunk("user", async(data) => {
    const response = fetch(``).then((res) => {
        return res.json();
    });
    return response;
})

const detailSuggest = createSlice({
    name: "detailsuggest",
    initialState: {
        data: [],
        loading: false
    },
    reducers: {},
    extraReducers: {
        [datas.pending]: (state, action) => {
            state.loading = true;
        },
        [datas.fulfilled]: (state, action) => {
            state.data = action.payload;
            state.loading = false;
        },
        [datas.rejected]: (state, action) => {
            state.loading = false;
        }
    }

})
const DetailSuggests = detailSuggest.reducers;
export default DetailSuggests;