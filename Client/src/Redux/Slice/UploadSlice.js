import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const UploadData = createAsyncThunk('uploadData', async (data) => {
console.log(data.placeName);
    const uploaddata = fetch("http://localhost:5000/authenticate/upload",{
            method: "post",
            headers: {"Content-Type": "multipart/form-data; boundary=------WebKitFormBoundary2lZSUsxEA3X5jpYD"},
            body: JSON.stringify({
                "placeName":data.placeName,
                "placeTag":data.placeTag,
                "placeDescription":data.placeDescription,
                "images":data.placeImage
                
            })
    }).then((res) => {
        console.log(res.json());
        return res.json();
    })
    return uploaddata;
})
console.log(UploadData);
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
            console.log(action.payload);
            state.loginData = action.payload;
            state.loading = false;
        },
        [UploadData.rejected]: (state, action) => {

        }
    }
})

const Upload = UploadReducer.reducer;

export default Upload;