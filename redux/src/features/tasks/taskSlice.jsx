import { createSlice } from "@reduxjs/toolkit";

const loadTasksFromLocalStorage = () => {
  const savedTasks = localStorage.getItem("tasks");
  return savedTasks ? JSON.parse(savedTasks) : [];
};

const initialState = {
  task: loadTasksFromLocalStorage(),
};

// RTK slice
const taskReducer = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask(state, action) {
      state.task.push(action.payload);
      localStorage.setItem("tasks", JSON.stringify(state.task));
    },
    deleteTask(state, action) {
      state.task = state.task.filter(
        (curElem, index) => index !== action.payload
      );
      console.log(state.task);

      localStorage.setItem("tasks", JSON.stringify(state.task));
    },
    clearTasks(state) {
      state.task = [];
      localStorage.removeItem("tasks");
    },
  },
});

export const { addTask, deleteTask, clearTasks } = taskReducer.actions;
export default taskReducer.reducer;
