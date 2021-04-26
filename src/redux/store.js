import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './contact/contact-reducer';
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
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';

const persistConfig = {
	key: 'contacts',
	storage,
	blacklist: ['filter'],
};

const store = configureStore({
	reducer: {
		contactList: persistReducer(persistConfig, contactReducer),
	},
	devTools: process.env.NODE_ENV !== 'development',
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}).concat(logger),
});

const persistor = persistStore(store);

export default { store, persistor };
