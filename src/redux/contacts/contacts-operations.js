import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { pushContactSuccess, pushContactError } from './contacts-actions'; 


export const fetchContacts = createAsyncThunk(
    'contacts/fetchContacts',
    async () => {
        const { data } = await axios.get('/contacts');
        return data;
    }
);

export const pushContact = contact => async dispatch => {
    await axios
        .post('/contacts', contact)
        .then(({ data }) => dispatch(pushContactSuccess(data)))
        .catch(error => dispatch(pushContactError(error.message)));
};
