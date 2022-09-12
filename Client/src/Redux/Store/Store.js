import {configureStore } from "@reduxjs/toolkit";

import loginReducer from "../loginSlice"

const store = configureStore({
    reducer:{
        User:loginReducer,
    }
});

export default store;