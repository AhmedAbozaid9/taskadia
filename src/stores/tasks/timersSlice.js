"use client";
import { createSlice } from "@reduxjs/toolkit";

const getInitialState = () => {
  if (typeof window !== "undefined") {
    const storedTasks = localStorage.getItem("timers");
    if (storedTasks) {
      return JSON.parse(storedTasks);
    }
  }
  return [];
};

const timersSlice = createSlice({
  name: "timers",
  initialState: {
    timers: getInitialState(),
  },
  reducers: {
    addTimer: (state, action) => {
      state.tasks.push({ ...action.payload, id: Date.now() });
      localStorage.setItem("timers", JSON.stringify(state.timers));
    },
  },
});

export const { addTimer } = timersSlice.actions;

export default timersSlice.reducer;
