import { useState } from "react"


export const CounterTs = ()=>{
    const [count,setCount] = useState<number | null>(0); // this is how we add TS to react ONLY.
    // WE ALWAYS EXPECT A NUMBER IN THE USESTATE so we can USE it as a GENERIC
    return(
        <div>
            <h2>Order Count : {count}</h2>
            <button onClick={()=>{setCount((c)=>(c+1))}}>
                Add more
            </button>
        </div>
    )
}