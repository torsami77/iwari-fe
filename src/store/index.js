import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../Redux";

export default configureStore({
    reducer: rootReducer,
})