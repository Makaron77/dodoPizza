import { configureStore } from '@reduxjs/toolkit';
// import profileSlice from './profileSlice';
// Хранилище(store)
const store = configureStore({
	// reducer — объект, который объединяет все редьюсеры из различных слайсов в один объект.
	reducer: {
		// profileSlice,
	},
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
