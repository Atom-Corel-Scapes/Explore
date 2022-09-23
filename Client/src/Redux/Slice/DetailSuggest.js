import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const suggestion = createAsyncThunk("user", async(data) => {
    const response = fetch(`http://localhost:5000/authenticate//postDetails?cardId=${data.ID}&placeTag=${data.Tag}`).then((res) => {
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
        [suggestion.pending]: (state, action) => {
            state.loading = true;
        },
        [suggestion.fulfilled]: (state, action) => {
            //console.log(action.payload.suggestions);
            state.data = action.payload.suggestions;
            state.loading = false;
        },
        [suggestion.rejected]: (state, action) => {
            state.loading = false;
        }
    }

})
const DetailSuggests = detailSuggest.reducer;
export default DetailSuggests;