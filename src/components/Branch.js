import { useState, useEffect } from "react"


export default function Branch( {key, data, name, depth = 0, ...node}) {
    const [expanded, setExpanded] = useState(false);

    const handleClick = () => {
        setExpanded(!expanded)
    }

    
    const children = data.data.filter((child) => child.parent === node.id);
    useEffect(() => {
        console.log(key)
        
                
            
        },[key]) 


    return(

        <div style={{ marginLeft: depth * 16}}>
            <button onClick={handleClick}>{expanded? '-' : '+'}</button>
            <label>{name}</label>
            
            {expanded &&
            children.map((child) => (
                <Branch depth={depth + 1 } key={child.id} data={data} {...child}/>
            ))}
        </div>

    )
}