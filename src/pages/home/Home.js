import "./home.css"
import { useEffect, useState} from "react"




export default function Home({isLoggedIn}) {
    const [data, setData] = useState({});
    
   useEffect(() => {
    fetch("http://localhost:4000/territory")
        .then(response => response.json())
        .then(data => setData(data))
        
   }, [])

  
   


    return(
        <div>
            <h1>wew</h1>
            
        </div>
    )
}

