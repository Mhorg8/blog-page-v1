import { configureStore } from "@reduxjs/toolkit";
import FavSlice from "@/lib/redux/Fav/FavSlice";
export const makeStore = () => {
  return configureStore({
    reducer: {
      Favorite: FavSlice,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
