import { node } from "gltf-pipeline/lib/ForEach.js";
import { useEffect, useState } from "react";
import Branch from "./Branch.js"

export default function Tree({data}) {
   const [topNode, setTopNode] = useState()

    useEffect(() => {
    console.log('hi')
        var filteredData = data.data.filter((node) => 
            node.parent === null);
            setTopNode(filteredData)
            
        
    },[data])  

    

    

        
   
    

    return(
        <div>
            <h1>Territories</h1>

            {topNode?.map((node) => <Branch key={node.id} name={node.name} data={data} {...node}/>)}
            
        </div>

    )

}