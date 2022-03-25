import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './reducer';

export const store = configureStore({
	reducer: {
		rootState: rootReducer,
	},
});

