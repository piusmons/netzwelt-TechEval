import { useEffect, useState } from "react";

export default function Tree({data}) {
    const topNode = data.data.filter((node) => node.parent === null);


    
    console.log(data)
    

    return(
        <div>
            
            <ul>
                {topNode.map((node) => (
                    <li key={node.id}>
                        {node.name}
                        
                    </li>
                ))}
            </ul>
            
        </div>

    )

}