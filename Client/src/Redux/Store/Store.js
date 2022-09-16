import { configureStore, combineReducers } from "@reduxjs/toolkit";

import loginReducer from "../loginSlice"
import returndata from "../signupSlice"
import Display from "../DisplayData";
import Upload from "../UploadSlice";

const rootReducer = combineReducers({ User: loginReducer, sigupdata: returndata, Displaydata: Display, UploadData: Upload })
const store = configureStore({

        reducer: rootReducer,

});

export default store;