import "./todo.css";
import { useState} from "react";
import {TodoForm} from './todoForm.jsx';
import { TodoList } from "./todoList.jsx";
import { TodoDate } from "./TodoDate.jsx";

export const ToDo = () => {

    const [inputValue, setInputValue] = useState("");
    const [task, setTask] = useState([]);

    const handleInputChange = (value) => {
        setInputValue(value);
    };

    const handleFormSubmit = (inputValue) => {
        if (!inputValue) return;
        if (task.includes(inputValue)) return;
        setTask((prevTask) => [...prevTask, inputValue]);
    }



    //todo delete functionality
    const handleDeleteTodo = (value) => {
        const updatedTask = task.filter((curTask) => curTask != value);
        setTask(updatedTask);
    }

    const handleClearTodoData = () => {
        setTask([]);
    }
    
    return (
        <section className="todo-container">
            <header>
                <h1>Todo List</h1>
                <TodoDate/>
            </header>

            <TodoForm onAddTodo={handleFormSubmit}/>

            <section className="myUnOrdList">
                <ul>
                    {
                        task.map((curTask, index) => {
                            return <TodoList key={index} data={curTask} onHandleDeleteTodo={handleDeleteTodo}/>
                        })
                    }
                </ul>
            </section>

            <section>
                <button className="clear-btn" onClick={handleClearTodoData}>Clear All</button>
            </section>
        </section>
    )
}