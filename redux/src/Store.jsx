import { createStore } from "redux";

const ADD_TASk = "task/add";
const DELETE_TASK = "task/delete";

const initialState = {
  task: [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASk:
      return {
        ...state,
        task: [...state.task, action.payload],
      };

    case DELETE_TASK:
      const updatedTask = state.task.filter((curTask, index) => {
        return index != action.payload;
      });
      return {
        ...state,
        task: updatedTask,
      };

    default:
      return state;
  }
};

export const store = createStore(taskReducer);

export const addTask = (data) => {
  return { type: ADD_TASk, payload: data };
};

export const deleteTask = (id) => {
  return { type: DELETE_TASK, payload: id };
};
