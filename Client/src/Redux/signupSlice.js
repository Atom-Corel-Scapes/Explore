import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const signup = createAsyncThunk("user", async (data) => {

    const signupdata = fetch("http://localhost:5000/authenticate/signup", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            "userFirstname": data.firstname,
            "userLastname": data.lastname,
            "userEmail": data.email,
            "userPassword": data.password,
            "userPhoneNumber": data.phonenumber
        })
    }).then((res) => {

        return res.json();
    })
    return signupdata;
});
const SignupReducer = createSlice({
    name: "sign",
    initialState: {
        signUpdata: [],
        loading: false,
    },
    reducer: {},
    interred: {
        [signup.pending]: (state, action) => {
            state.loading = true;
        },
        [signup.fulfilled]: (state, action) => {

            state.signUpdata = action.payload.data;
            state.loading = false;
        },
        [signup.rejected]: (state, action) => {
            state.loading = false;
        },
    },
});
const returndata = SignupReducer.reducer;
export default returndata;