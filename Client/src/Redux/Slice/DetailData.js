import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const data = createAsyncThunk("user", async(data) => {
    const response = fetch(``).then((res) => {
        return res.json();
    });
    return data;
})

const detailData = createSlice({
    name: "detailPage",
    initialState: {
        data: [],
        loading: false
    },
    reducers: {},
    extraReducers: {
        [data.pending]: (state, action) => {
            state.loading = true;
        },
        [data.fulfilled]: (state, action) => {
            state.data = action.payload;
            state.loading = false;
        },
        [data.rejected]: (state, action) => {
            state.loading = false;
        }
    }

})
const DetailPage = detailData.reducers;
export default DetailPage;