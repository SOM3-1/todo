import { configureStore } from "@reduxjs/toolkit";
import { slice } from "./createSlice";

export const sliceStore = configureStore({
    reducer: slice.reducer
});
