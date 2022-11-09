import { configureStore } from '@reduxjs/toolkit';
import { movieSlice } from './states/movie';

export default configureStore({
	reducer: {
		movie: movieSlice.reducer,
	},
});
