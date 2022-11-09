import { createSlice } from '@reduxjs/toolkit';

const movieEmptyState = {
	movie: '',
	id: '',
};

export const movieSlice = createSlice({
	name: 'movie',
	initialState: movieEmptyState,
	reducers: {
		resolveMovie: (state, action) => {
			return action.payload;
		},
		resetMovie: (state, action) => movieEmptyState,
	},
});

export const {resolveMovie, resetMovie} = movieSlice.actions;