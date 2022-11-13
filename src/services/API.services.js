import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const API = 'https://movies-app1.p.rapidapi.com/api/';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'b1d39b94ffmshff8c2a1a8d9ec98p1fd33ajsn9ef7453a6937',
// 		'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com',
// 	},
// };

export const Api = createApi({
	reducerPath: 'fetching',
	baseQuery: fetchBaseQuery({
		baseUrl: API,
		prepareHeaders: headers => {
			headers.set(
				'X-RapidAPI-Key',
				'b1d39b94ffmshff8c2a1a8d9ec98p1fd33ajsn9ef7453a6937'
			);
			return headers;
		},
	}),
	endpoints: builder => ({
		getPhotos: builder.query({
			query: albumId => `movies/albums/${albumId}/photos`,
		}),
		getAlbums: builder.query({
			query: () => 'movies/albums',
		}),
		getMovies: builder.query({
			query: page => `
			movies?page=${page}&sort=rating&type=movies&year=2021`,
		}),
		getMoviesByTitle: builder.query({
			query: title => `
			movies?sort=title&query=${title}`,
		}),
		getSeriesAll: builder.query({
			query: seriesAll => `movies?page=${seriesAll}&limit=20&type=series`,
		}),
		getSeriesById: builder.query({
			query: seriesById => `episode/${seriesById}`,
		}),
		getMoviesById: builder.query({
			query: movieById => `movie/${movieById}`,
		}),
		getByGenre: builder.query({
			query: page => `movies?page=${page}&limit=20&genres=animacion`,
		}),
	}),
});

export const {
	useGetPhotosQuery,
	useGetAlbumsQuery,
	useGetMoviesQuery,
	useGetMoviesByIdQuery,
	useGetSeriesAllQuery,
	useGetSeriesByIdQuery,
	useGetMoviesByTitleQuery,
	useGetByGenreQuery,
} = Api;
