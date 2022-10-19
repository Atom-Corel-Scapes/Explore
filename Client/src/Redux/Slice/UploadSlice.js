import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const UploadData = createAsyncThunk('uploadData', async (data) => {
console.log(data.placeName);
    const uploaddata = fetch("http://localhost:5000/authenticate/upload", {
        method: "post",
        headers: { "Content-Type": "multipart/form-data, boundary=--abc--abc--" },
        body: JSON.stringify({
            "placeName": data.placeName,
            "placeDescription": data.placeDescription,
            "placeTag": data.placeTag,
            "images": data.placeImage,
            "userFirstname":data.userFristname
        })
    }).then((res) => {

        return res.json();
    })
    console.log(uploaddata);
    return uploaddata;
})
export const UploadReducer = createSlice({
    name: 'uploadData',
    initialState: {
        Details: [],
        loadinguser: false
    },
    reducer: {},
    extraReducers: {
        [UploadData.pending]: (state, action) => {
            console.log(action.payload);
            state.loadinguser = true;
        },
        [UploadData.fulfilled]: (state, action) => {
            console.log(action.payload);
            state.loginData = action.payload;
            state.loadinguser = false;
        },
        [UploadData.rejected]: (state, action) => {
            console.log(action);
            state.loadinguser = false;
        }
    }
})

const Upload = UploadReducer.reducer;

export default Upload;
