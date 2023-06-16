import { createSlice } from "@reduxjs/toolkit";
import { usersApi } from "../../api/usersApi";
import IUser from "../../interfaces/IUser";
import IUserDTO from "../../interfaces/IUserDTO";
import { createAppAsyncThunk } from "../createAppAsyncThunk";
import IUsersState from "./usersStates";

const namespace = 'users'


export const login = createAppAsyncThunk(
    `${namespace}/login`,
    async (user: IUserDTO) => {
        return usersApi.login(user)
    }
)

export const register = createAppAsyncThunk(
    `${namespace}/register`,
    async (user: IUserDTO) => {
        return usersApi.register(user)
    }
)
export const checkToken = createAppAsyncThunk(
    `${namespace}/checkToken`,
    async () => {
        return usersApi.checkToken()
    }
)

const initialState: IUsersState= {
    user: {} as IUser,
    isAuth: false,
    message: ''
}


export const usersSlice = createSlice({
    name: namespace,
    initialState: initialState,
    reducers: {
        initState() {
            initialState
        },
        clearMessage(state) {
            state.message = ""
        },
        logout(state) {
            state.isAuth = false
            localStorage.clear()
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.fulfilled, (state, action) => {
                const user = action.payload.data
                state.user = user
                if (user) {
                    localStorage.setItem('token', user.token)
                    state.isAuth = true
                    state.message = action.payload.message
                } else {
                    state.message = action.payload.message
                }
            })
            .addCase(register.fulfilled, (state, action) => {
                const user = action.payload.data
                state.user = user
                if (user) {
                    localStorage.setItem('token', user.token)
                    state.isAuth = true
                    state.message = action.payload.message
                } else {
                    state.message = action.payload.message
                }
            })
            .addCase(checkToken.fulfilled, (state, action) => {
                const user = action.payload.data
                if (user) {
                    state.isAuth = true
                } else {
                    state.isAuth = false
                }
            })
    }
})

export const {initState, logout, clearMessage} = usersSlice.actions
