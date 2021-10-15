import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    }
}

export const register = createAsyncThunk('auth/register', async credentials => {
    try {
        const { data } = await axios.post('users/signup', credentials);
        token.set(data.token);
        return data;
    } catch (error) {
        return error;
    }
});

// export const login = createAsyncThunk('auth/login', async credentials => {
//     await axios.post('users/login', credentials)
//         .then(({ data }) => {
//             token.set(data.token);
//             console.log(data);
//             return data;
//         })
//         .catch(error => error)
// });

export const login = createAsyncThunk('auth/login', async credentials => {
    try {
        const { data } = await axios.post('users/login', credentials);
        token.set(data.token);
        return data;
    } catch (error) {
        return error;
    }
});

export const logout = createAsyncThunk('auth/logout', async () => {
    try {
        await axios.post('users/logout');
        token.unset();
    } catch (error) {
        
    }
});

export const fetchCurrentUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
    const persistedToken = thunkAPI.getState().auth.token;

    if (!persistedToken) {
        return thunkAPI.rejectWithValue('');
    }

    token.set(persistedToken);

    try {
        const { data } = await axios.get('users/current');
        return data;
    } catch (error) {
        
    }
});