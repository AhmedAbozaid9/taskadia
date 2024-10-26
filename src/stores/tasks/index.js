import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./tasksSlice";
import timersSlice from "./timersSlice.js";
export const store = configureStore({
  reducer: { tasks: tasksSlice, timers: timersSlice },
});

export default store;
