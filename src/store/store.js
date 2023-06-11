import { configureStore } from "@reduxjs/toolkit";
import tabsReducer from "./slices/tabsSlice";

export const store = configureStore({
  reducer: { tabsReducer },
});
