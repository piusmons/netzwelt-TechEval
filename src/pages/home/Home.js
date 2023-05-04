import "./home.css"
import { useEffect, useState} from "react"
import Tree from "../../components/Tree.js"



export default function Home({isLoggedIn}) {
   const [data, setData] = useState([]);
    
   useEffect(() => {
    fetch("http://localhost:4000/territory")
        .then(response => response.json())
        .then(data => setData(data))
        
   }, [])


   
   useEffect(() => {
    console.log(data)
    
    },[data])
  


   


    return(
        <div className="treeContainer">
            
            {data.length < 1 ? <p>loading</p> : <Tree data={data}/> }
        </div>
    )
}

