import './UseState.css';
import {useState} from 'react';

export const HookUseState = () => {

    const [count,setCount] = useState(0);
    const [inputValue,setInputValue] = useState(1);

    const Add = () => {
        setCount(count + inputValue);
    }
    const Sub = () => {
        setCount(count - inputValue);
    }
    const Reset = () => {
        setCount(0);
    }
    return<>
        <div className="container">
            <h1>useState Challenge</h1>
            <div>
                <label>Count : </label>  
                <span>{count}</span>
            </div>
            <div>
                <label>Step : </label> 
                <input type="number" name="" id="" onChange={(e) => setInputValue(Number(e.target.value))}/>
            </div>
            <div className='btn-con'>
                <button onClick={Add}>Increment</button>
                <button onClick={Sub} disabled={count <= 0}>Decrement</button>
                <button onClick={Reset}>Reset</button>
            </div>
        </div>
    </>;
}