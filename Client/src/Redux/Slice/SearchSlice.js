import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const SearchData = createAsyncThunk("Searchdata", async (data) => {
    const response = fetch("").then((res) => {
        return res.json();
    }
    );
    return SearchData;
})


const SearchedData = createSlice({
    name: "Searchbyname",
    initialState: {
        data: [],
        loading: false
    },
    reducers: {},
    extraReducer: {
        [SearchData.pending]: (state, action) => {
            state.loading = true;
        },
        [SearchData.pending]: (state, action) => {
            state.data = action.payload;
            state.loading = false;
        },
        [SearchData.pending]: (state, action) => {
            state.loading = false;
        }

    }
})
const SearchedDatas = SearchedData.reducer;
export default SearchedDatas;