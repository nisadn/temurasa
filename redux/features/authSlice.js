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
        }
    },
})

// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions

export default authSlice.reducer