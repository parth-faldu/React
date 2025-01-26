import './UseState.css';
import {useState} from 'react';

export const LoginForm = () => {

    const [user,setUser] = useState({
        username:"",
        password:"",
    });

    const handleInputChange = (e) => {
        const {name,value} = e.target;
        setUser((prev) => ({...prev,[name]:value}));
    }
    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(user);
    }

    return <>
        <div className="container">
            <form action="" onSubmit={handleFormSubmit}>
                <h1>Login Form</h1>
                <div>
                    <label htmlFor="">Username</label>
                    <input type="text" name="username" required value={user.username} onChange={handleInputChange} />
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <input type="text" name="password" required value={user.password} onChange={handleInputChange} />
                </div>

                <button type='submit'>Submit</button>
            </form >
        </div>
    </>
}