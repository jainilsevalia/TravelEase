//Author: Shani Kachhadiya(sh248902@dal.ca) || Banner Id : B00917757

import { createSlice } from '@reduxjs/toolkit';

const liveUpdateSlice = createSlice({
	name: 'liveUpdateReducer',
	initialState: {
		liveUpdatesData: [],
	},
	reducers: {
		createLiveUpdate: (state, action) => {
			state.liveUpdatesData = action.payload;
		},
	},
});

export const { createLiveUpdate } = liveUpdateSlice.actions;

export default liveUpdateSlice.reducer;
