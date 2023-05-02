import "./login.css"
import { useState } from "react"
import { Link } from "react-router-dom"


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();
        console.log("test")
    
    }

    return (

        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm" onSubmit={signIn}>

                <label>Email</label>
                <input 
                className="loginInput"
                type="text" 
                placeholder="Enter your email here"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                />

                <label>Password</label>
                <input 
                className="loginInput" 
                type="password" 
                placeholder="Enter your password here"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                />

                <button className="loginButton">Login</button>  

            </form> 
            

                
        </div>
    )
 }