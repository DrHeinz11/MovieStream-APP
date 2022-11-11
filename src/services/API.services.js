import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const API = 'https://movies-app1.p.rapidapi.com/api/movies';
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
			query: albumId => `/albums/${albumId}/photos`,
		}),
		getAlbums: builder.query({
			query: () => '/albums',
		}),
		getMovies: builder.query({
			query: page => `?page=${page}&limit=10&year=2020`,
		}),
	}),
});

export const { useGetPhotosQuery, useGetAlbumsQuery, useGetMoviesQuery } = Api;
