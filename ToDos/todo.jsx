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
        const {id,content,checked} = inputValue;

        //check if the input field is empty or not 
        if (!content) return;

        //check if the data is already existing or not 
        const ifTodoContenetMacthed = task.find((curTask) => curTask.content == content);

        if(ifTodoContenetMacthed) return;
        
        setTask((prevTask) => [...prevTask, {id,content,checked}]);
    }



    //todo delete functionality
    const handleDeleteTodo = (value) => {
        const updatedTask = task.filter((curTask) => curTask.content != value);
        setTask(updatedTask);
    }

    const handleClearTodoData = () => {
        setTask([]);
    }

    // todo handleCheckedTodo functionality
    const handleCheckedTodo = (content) => {
        const updatedTask = task.map((curTask) => {
            if(curTask.content == content){
                return { ... curTask,checked: !curTask.checked};
            }else{
                return curTask;
            }
        });
        setTask(updatedTask);
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
                        task.map((curTask) => {
                            return (
                                <TodoList key={curTask.id} data={curTask.content}
                                checked={curTask.checked}
                                onHandleDeleteTodo={handleDeleteTodo}
                                onHandleCheckedTodo={handleCheckedTodo}/>
                            );
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