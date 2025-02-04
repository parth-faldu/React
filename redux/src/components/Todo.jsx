import { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  addTask,
  clearTasks,
  deleteTask,
} from "../features/tasks/taskSlice.jsx";

export const Todo = () => {
  const [task, setTask] = useState("");
  const tasks = useSelector((state) => state.taskReducer.task);
  const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(task));
    setTask("");
  };

  const handleTaskDelete = (index) => {
    dispatch(deleteTask(index));
  };

  const handleClearTasks = () => {
    dispatch(clearTasks());
  };

  return (
    <div className="container">
      <div className="todo-app">
        <h1>To-do List:</h1>
        <div className="row">
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              id="input-box"
              placeholder="Add a new task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <button type="submit">Add Task</button>
          </form>
        </div>

        <button onClick={handleClearTasks}>Clear Tasks</button>

        <ul id="list-container">
          {tasks?.map((curTask, index) => (
            <li key={index}>
              <p>{curTask}</p>
              <div>
                <MdDeleteForever
                  className="icon-style"
                  onClick={() => handleTaskDelete(index)}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
