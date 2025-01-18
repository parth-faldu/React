import { useState } from "react";

export const TodoForm = ({onAddTodo}) => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (value) => {
        setInputValue(value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onAddTodo(inputValue);  
        setInputValue("");
    };
    
    return (
        <section className="form">
            <form action="" onSubmit={handleFormSubmit}>
                <div>
                    <input type="text" className="todo-input" autoComplete="off" value={inputValue} onChange={(e) => handleInputChange(e.target.value)} />
                </div>
                <div>
                    <button type="submit" className="todo-btn">Add Task</button>
                </div>
            </form>
        </section>
    );
}