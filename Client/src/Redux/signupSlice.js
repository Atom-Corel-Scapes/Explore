import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const signup = createAsyncThunk("user", async(data) => {
    const signupdata = fetch("", {
        method: "post",
        headers: { "content-type": "apllication/json" },
        body: JSON.stringify({
            firstname: data.firstname,
            lastname: data.lastname,
            password: data.password,
        }).then((res) => {
            return res.json;
        }),
    });
    return signupdata;
});
const SignupReducer = createSlice({
    name: "sign",
    initialState: {
        data: [],
        loading: false,
    },
    reducer: {},
    interred: {
        [signup.pending]: (state, action) => {
            state.loading = true;
        },
        [signup.fulfilled]: (state, action) => {
            state.data = action.payload.data;
            state.loading = false;
        },
        [signup.rejected]: (state, action) => {
            state.loading = false
        },
    },
});
const returndata = SignupReducer.reducer;
export default returndata;