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
            console.log('pending');
        },
        [authOperations.register.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        [authOperations.register.rejected](state, action) {
            console.log(action.payload)
        },
        [authOperations.login.pending](state, action) {
            console.log('pending');
        },
        
        [authOperations.login.fulfilled](state, action) {
            console.log('fulfiled');
            console.log(action);
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        [authOperations.login.rejected](state, action) {
             console.log('rejected')
             console.log(action.payload)
        },
        [authOperations.logout.fulfilled](state, action) {
            state.user = { name: null, email: null };
            state.token = null;
            state.isLoggedIn = false;
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