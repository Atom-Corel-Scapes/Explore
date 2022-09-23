import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const detailData = createAsyncThunk("user", async(data) => {
    const response = fetch(`http://localhost:5000/authenticate//postDetails?cardId=${data.ID}&placeTag=${data.Tag}`).then((res) => {
        return res.json();
    });
    return response;
})

const detailReducer = createSlice({
    name: "detailPage",
    initialState: {
        data: [],
        loading: false
    },
    reducers: {},
    extraReducers: {
        [detailData.pending]: (state, action) => {
            state.loading = true;
        },
        [detailData.fulfilled]: (state, action) => {
            //console.log(action.payload.postInfo);
            state.data = action.payload.postInfo;
            state.loading = false;
        },
        [detailData.rejected]: (state, action) => {
            state.loading = false;
        }
    }

})
const DetailPage = detailReducer.reducer;
export default DetailPage;