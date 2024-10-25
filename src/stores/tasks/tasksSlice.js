import { createSlice } from "@reduxjs/toolkit";
const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
  },
});
export default tasksSlice.reducer;
