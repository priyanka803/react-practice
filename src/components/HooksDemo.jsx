import { useState } from "react"

const HooksDemo=()=>{
    const [data, setData]=useState(0);
    
    return(
        <>
        <h1>{data}</h1>
        <button onClick={()=>setData(data+1)}>Click</button>
        </>
    )
}
export default HooksDemo;