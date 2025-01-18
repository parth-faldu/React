import "./todo.css";
import { useState,useEffect  } from "react";
import { MdCheck ,  MdDeleteForever} from "react-icons/md";

export const ToDo = () => {

    const [inputValue, setInputValue] = useState("");
    const [task, setTask] = useState([]);
    const [dateTime,setdateTime] = useState("");

    const handleInputChange = (value) => {
        setInputValue(value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (task.includes(inputValue)) {
            setInputValue("");
            return;
        }

        if (!inputValue) return;

        setTask((prevTask) => [...prevTask, inputValue]);

        setInputValue("");
    }

    //todo date time
    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const formattedDate = now.toLocaleDateString();
            const formattedTime = now.toLocaleTimeString();
            setdateTime(`${formattedDate} - ${formattedTime}`);
        },1000);

        return () => clearInterval(interval);
    },[]);
    
    return (
        <section className="todo-container">
            <header>
                <h1>Todo List</h1>
                <h2 className="date-time">{dateTime}</h2>
            </header>

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

            <section className="myUnOrdList">
                <ul>
                    {
                        task.map((curTask, index) => {
                            return <li key={index} className="todo-item">
                                <span>{curTask}</span>
                                <button className="check-btn"><MdCheck /></button>
                                <button className="delete-btn"><MdDeleteForever /></button>
                            </li>
                        })
                    }
                </ul>
            </section>
        </section>
    )
}