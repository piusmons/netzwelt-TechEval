import "./login.css"
import { useState } from "react"
import { Link } from "react-router-dom"


export default function Login({isLoggedIn}) {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    
    
    
   // "https://cors-anywhere.herokuapp.com/{https://netzwelt-devtest.azurewebsites.net/Account/SignIn}"
    
    const signIn = async (e) => {
        e.preventDefault();
        const sent = await fetch('http://localhost:4000/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({username: userName, password: password})
        })

        try {
            const response = await sent.json()
                
        } catch(error) {
            console.log(error)
        }
        
        

    
        
        
        
    
    }

   
    return (

        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm" onSubmit={signIn}>

                <label>Username</label>
                <input 
                className="loginInput"
                type="text" 
                placeholder="Enter your username here"
                onChange={(e) => setUserName(e.target.value)}
                value={userName}
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