import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SelectionModel } from "../models/selection";

const selectionSlice = createSlice({
  name: "selection",
  initialState: {},
  reducers: {
    update: (state, action: PayloadAction<SelectionModel>) => {
      return { ...action.payload };
    },
  },
});

export const { update } = selectionSlice.actions;
export default selectionSlice.reducer;
