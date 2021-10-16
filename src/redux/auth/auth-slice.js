import { createSlice } from "@reduxjs/toolkit";
import { authOperations } from ".";

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    fetchingCurrentUser: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [authOperations.register.pending](state, action) {
        },
        [authOperations.register.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        [authOperations.register.rejected](state, action) {
            alert(action.payload);
        },
        [authOperations.login.pending](state, action) {
        },
        
        [authOperations.login.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        [authOperations.login.rejected](state, action) {
            alert('Неверный логин или пароль');
        },
        [authOperations.logout.fulfilled](state, action) {
            state.user = { name: null, email: null };
            state.token = null;
            state.isLoggedIn = false;
        },
        [authOperations.logout.rejected](state, action) {
            alert(action.payload);
        },
        [authOperations.fetchCurrentUser.pending](state, {payload}) {
            state.fetchingCurrentUser = true;
        },
        [authOperations.fetchCurrentUser.fulfilled](state, {payload}) {
            state.user = payload;
            state.isLoggedIn = true;
            state.fetchingCurrentUser = false;
        },
        [authOperations.fetchCurrentUser.rejected](state, { payload }) {
            state.fetchingCurrentUser = false;
        },
    },
});

export default authSlice.reducer;