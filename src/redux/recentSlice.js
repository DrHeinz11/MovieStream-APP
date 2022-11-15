import { createSlice } from '@reduxjs/toolkit';
const initialState = [{ name: '', id: '', status: '' }];
export const recentSlice = createSlice({
	name: 'recents',
	initialState,
	reducers: {
		addRecents: (state, action) => [...state, { ...action.payload }],
	},
});

export const { addRecents } = recentSlice.actions;
