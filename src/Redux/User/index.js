import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import { authenticate } from "../../utils";

export const login = createAsyncThunk(
    "signin",
    async ({ payload, clearForm }) => {
        const user = await authenticate("user/signin/", payload);

        if (user.token) {
            clearForm();
            return user;
        }
    }
);

export const signup = createAsyncThunk(
    "signup",
    async({payload, clearForm}) => {
        const user = await authenticate("user/signup/", payload);

        if(user) {
            clearForm();
            return user;
        }
    }
);

const userSlice = createSlice({
    name: "user",
        initialState: {
        data: JSON.parse(localStorage.getItem("user")) || {},
    },
    reducers: {
        updateUser(state, action) {
            state.data = {
                ...state.data,
                ...action.payload,
            };
        },
        logout(state, action) {
            state.data = {};
        },
    },
    extraReducers: {
        [login.fulfilled]: (state, action) => {
            state.data = action.payload || {};
        },
        [signup.fulfilled]: (state, action) => {
            state.data = action.payload || {};
        },
    },
});

export const {
    updateUser,
    logout,
} = userSlice.actions;

export default userSlice.reducer;