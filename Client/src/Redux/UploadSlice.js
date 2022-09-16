import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const UploadData = createAsyncThunk('uploadData', async (data) => {

    const responce = fetch("",{
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                
            })
    }).then((res) => {
        return res.json();
    })
    return UploadData;
})

export const UploadReducer = createSlice({
    name: 'uploadData',
    initialState: {
        Details: [],
        loading: false
    },
    reducer: {},
    extraReducers: {
        [UploadData.pending]: (state, action) => {
            state.loading = true;
        },
        [UploadData.fulfilled]: (state, action) => {
            //console.log(action.payload);
            state.loginData = action.payload;
            state.loading = false;
        },
        [UploadData.rejected]: (state, action) => {

        }
    }
})

const Upload = UploadReducer.reducer;

export default Upload;