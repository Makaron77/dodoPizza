import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';


interface ICity {
	id: number;
	name: string;
	slug: string;
}
interface ICitiesState {
	cities: ICity[];
	loading: boolean;
	error: null | string;
}

export const fetchGetCities = createAsyncThunk<ICity[]>(
	'cities/getAll',
	async () => {
		const response = await axios.get<ICity[]>(
			'http://localhost:3000/api/cities/',
		);
		return response.data;
	},
);

const initialState: ICitiesState = { cities: [], loading: false, error: null };

const citySlice = createSlice({
	name: 'citiesSlice',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchGetCities.pending, state => {
				state.loading = true;
			})
			.addCase(
				fetchGetCities.fulfilled,
				(state, action: PayloadAction<ICity[]>) => {
					state.cities = action.payload;
					
					
					state.loading = false;
				},
			)
			.addCase(fetchGetCities.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			});
	},
});

export default citySlice.reducer;
