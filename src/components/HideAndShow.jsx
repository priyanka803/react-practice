import { useState } from "react"

const HideAndShow=()=>{
    const [hide ,setHide]=useState(true);
    return(
        <>
        {
            hide?
            <h1>Demo</h1>
            :null
        }
        {/* <button onClick={()=>setHide(false)}>hide</button>
        <button onClick={()=>setHide(true)}>show</button>
        for single button */}
        <button onClick={()=>setHide(!hide)}>status</button>
        </>
    )
}
export default HideAndShow;