import { createSlice } from "@reduxjs/toolkit";

export const themeModelSlice = createSlice({
  name: "ThemeMode",
  initialState: {
    themeMode: "dark",
  },
  reducers: {
    setThemeModel: (state, action) => {
      state.themeMode = action.payload;
    },
  },
});

export const { setThemeModel } = themeModelSlice.actions;

export default themeModelSlice.reducer;
