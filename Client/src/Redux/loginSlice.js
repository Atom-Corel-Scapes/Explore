import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getUser = createAsyncThunk('User', async (data) => {
    console.log(data);
    const result = fetch(`http://localhost:5000/authenticate/login?userEmail=${data.email}&userPassword=${data.pass}`).then((res) => {
        return res.json();
    })
    return result;
})

const logReducer = createSlice({
    name: "user",
    initialState: {
        loginData: [],
        loading: false
    },
    reducer: {},
    extraReducers: {
        [getUser.pending]: (state, action) => {
            state.loading = true;
        },
        [getUser.fulfilled]: (state, action) => {
            console.log(action.payload);
            state.signupdata = action.payload;
            state.loading = false;
        },
        [getUser.rejected]: (state, action) => {

        }
    }
})

const loginReducer = logReducer.reducer;

export default loginReducer;