import { configureStore } from "@reduxjs/toolkit";
import formatState from "./format-state";
import selection from "./selection";

const store = configureStore({
  reducer: {
    formatState: formatState,
    selection: selection,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
