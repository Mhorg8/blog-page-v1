import { createSlice } from "@reduxjs/toolkit";

interface States {
  favItems: string[];
}

const initialState: States = {
  favItems: [],
};

const FavSlice = createSlice({
  name: "FavSlice",
  initialState,
  reducers: {},
});

export const {} = FavSlice.actions;
export default FavSlice.reducer;
