import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLogin: false,
  account: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.isLogin = true;
            state.account = action.payload;
        },
        logout: (state) => {
            state.isLogin = false;
            state.account = null;
        },
        refresh: (state, action) => {
            state.account.tokens = action.payload;
        }
    },
})

// Action creators are generated for each case reducer function
export const { login, logout, refresh } = authSlice.actions

export default authSlice.reducer