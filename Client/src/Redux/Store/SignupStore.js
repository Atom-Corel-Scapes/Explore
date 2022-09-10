import { configureStore } from "@reduxjs/toolkit";
import { returndata } from "../signupSlice";

const store = configureStore({
    reducer: returndata,
})
export default store;