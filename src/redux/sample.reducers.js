import { createSlice } from "@reduxjs/toolkit";

const sampleSlice = createSlice({
  name: "sample",
  initialState: { tripIdSelected: 1 },
  reducers: {
    selectedTripCard: (state, action) => {
      state.tripIdSelected = action.payload;
    },
  },
});

export const { selectedTripCard } = sampleSlice.actions;
export default sampleSlice.reducer;
