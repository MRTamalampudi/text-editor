import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FormatStateEnum } from "../enum/format-state";
import { CANVAS } from "../models/document";

const formatStateSlice = createSlice({
  name: "formatState",
  initialState: [FormatStateEnum.Normal],
  reducers: {
    update: (state, action: PayloadAction<FormatStateEnum>) => {
      const withoutNormal: FormatStateEnum[] = state.filter(
        (a) => a !== FormatStateEnum.Normal,
      );

      const exists = withoutNormal.includes(action.payload);
      const updatedStates = exists
        ? withoutNormal.filter((a) => a !== action.payload)
        : [...withoutNormal, action.payload];

      return updatedStates.length > 0
        ? updatedStates
        : [FormatStateEnum.Normal];
    },
    updateByNodeName: (state, action: PayloadAction<string[]>) => {
      const formatMap: Record<string, FormatStateEnum> = {
        B: FormatStateEnum.Bold,
        I: FormatStateEnum.Italic,
        U: FormatStateEnum.Underline,
        UL: FormatStateEnum.UnorderedList,
        OL: FormatStateEnum.OrderedList,
      };

      const states = action.payload
        .map((key) => formatMap[key])
        .filter((key) => key != undefined); // remove undefined if any key doesn't match

      return states.length > 0 ? states : [FormatStateEnum.Normal];
    },
  },
});

export const { update } = formatStateSlice.actions;
export default formatStateSlice.reducer;
