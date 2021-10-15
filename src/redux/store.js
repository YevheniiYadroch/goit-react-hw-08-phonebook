import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import contactsReducer from "./contacts/contacts-reducer";
import storage from "redux-persist/lib/storage";
import { authReducer } from "./auth";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';


const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token']
}

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      ignoredActionPaths: ['payload'],
    },
  }),
];

export const store = configureStore({
    reducer: {
      contacts: contactsReducer,
      auth: persistReducer(authPersistConfig, authReducer)
    },
    middleware,
    devTools: process.env.NODE_ENV === 'development',
})

export const persistor = persistStore(store);