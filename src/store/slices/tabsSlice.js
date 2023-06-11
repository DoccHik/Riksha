import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeTab: 1,
};

export const tabsSlice = createSlice({
  name: "tabs",
  initialState,
  reducers: {
    handlerTabsIndex: (state, actions) => {
      state.activeTab = actions.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { handlerTabsIndex } = tabsSlice.actions;

export default tabsSlice.reducer;
