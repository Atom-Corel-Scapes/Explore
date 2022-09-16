import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const Displaydata = createAsyncThunk("displayData", async (page) => {
    console.log(page);
    const response = await fetch(`http://localhost:5000/authenticate/home?page=${page}&limit=2`).then((res) => {
        return res.json();
        
    })

    return response;
});

const DisplayDatareducer = createSlice(
    {
        name: "displayData",
        initialState:
        {
            Display: [],
            loading: false
        },

        reducers: {},
        extradReducers: {
            [Displaydata.pending]: (state, action) => {
                state.loading = true;
            },
            [Displaydata.fullfilled]: (state, action) => {
               
                state.Display = action.payload;
                state.loading = false;
            },
            [Displaydata.rejected]: (state, action) => {
                state.loading = false;
            }

        },
    },
);

const Display =DisplayDatareducer.reducer
export default Display;