import { createSlice } from "@reduxjs/toolkit";
import { HomePageState } from "../../../lib/types/screen";
import { create } from "domain";

const initialState: HomePageState = {
  popularDishes: [],
  newDishes: [],
  topSellingProducts: [],
};

const homePageSlice = createSlice({
  name: "homePage",
  initialState,
  reducers: {
    setPopularDishes: (state, action) => {
      state.popularDishes = action.payload;
    },
    setNewDishes: (state, action) => {
      state.newDishes = action.payload;
    },
    setTopProducts: (state, action) => {
      state.topSellingProducts = action.payload;
    },
  },
});
export const { setPopularDishes, setNewDishes, setTopProducts } =
  homePageSlice.actions;

const HomePageReducer = homePageSlice.reducer;
export default HomePageReducer;
