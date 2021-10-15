import { createAction } from '@reduxjs/toolkit';


export const addContact = createAction('contacts/add');

export const deleteContact = createAction('contacts/delete');
   
export const searchContact = createAction('contacts/search');

export const pushContactSuccess = createAction('contacts/pushContactSuccess');
export const pushContactError = createAction('contacts/pushContactError');

