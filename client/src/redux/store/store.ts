import { configureStore } from '@reduxjs/toolkit';
import citiesSlice from '../cities/citiesSlice'

const store = configureStore({
	reducer: {
		citiesSlice,
	},
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
