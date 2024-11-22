import { configureStore } from '@reduxjs/toolkit';
import citiesSlice from '../../pages/Home/ui/Header/Modal/modalCitiesSlice'

const store = configureStore({
	reducer: {
		citiesSlice,
	},
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
