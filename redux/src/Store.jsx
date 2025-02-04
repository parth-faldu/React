// import { composeWithDevTools } from "@redux-devtools/extension";
// import { applyMiddleware, createStore } from "redux";
// import { thunk } from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";

const ADD_TASk = "task/add";
const DELETE_TASK = "task/delete";
const FETCH_TASK = "task/fetch";

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

    case FETCH_TASK:
      return {
        ...state,
        task: [...state.task, ...action.payload],
      };

    default:
      return state;
  }
};

//! (Old Style) Step 2 : Create the redux store using the reducer
// export const store = createStore(
//   taskReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );

//! New Style
export const store = configureStore({
  reducer: {
    taskReducer,
  },
});

export const addTask = (data) => {
  return { type: ADD_TASk, payload: data };
};

export const deleteTask = (id) => {
  return { type: DELETE_TASK, payload: id };
};

export const fetchTasks = () => {
  return async (dispatch) => {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/todos?_limit=3`
      );
      const task = await res.json();
      dispatch({
        type: FETCH_TASK,
        payload: task.map((curTask) => curTask.title),
      });
    } catch (error) {
      console.log(error);
    }
  };
};
