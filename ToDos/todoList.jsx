import { MdCheck ,  MdDeleteForever} from "react-icons/md";

export const TodoList = ({Key,data,onHandleDeleteTodo}) => {
    return (
        <li key={Key} className="todo-item">
            <span>{data}</span>
            <button className="check-btn"><MdCheck /></button>
            <button className="delete-btn" onClick={() => onHandleDeleteTodo(data)}><MdDeleteForever /></button>
        </li>
    );
}