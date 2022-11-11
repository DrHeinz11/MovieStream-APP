import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query/react';
import { Api } from '../services/API.services';
import { seeLaterSlice } from './SeeLater';

export const Store = configureStore({
	reducer: {
		[Api.reducerPath]: Api.reducer,
		[seeLaterSlice.name]: seeLaterSlice.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(Api.middleware),
});

setupListeners(Store.dispatch);
