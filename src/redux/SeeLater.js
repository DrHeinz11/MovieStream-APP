import { createSlice } from '@reduxjs/toolkit';
const initialState = [{ name: '', id: '', status: '' }];
export const seeLaterSlice = createSlice({
	name: 'seeLater',
	initialState,
	reducers: {
		addSeeLater: (state, action) => [...state,{...action.payload}],
		removeSeeLater: (state, action) => {
			const result = state.filter(element => element.id !== action.payload.id);
			return result;
		},
	},
});

export const { addSeeLater, removeSeeLater } = seeLaterSlice.actions;
