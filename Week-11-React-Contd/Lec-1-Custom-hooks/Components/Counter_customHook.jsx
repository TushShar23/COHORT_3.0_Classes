import { useCounter } from "../src/App.jsx";

function Counter(){
    const [count,setCount] = useCounter();
    
    return(
        <div>
            <button onClick={()=>{setCount(c => c + 1)}}>Increase : {count}</button>
        </div>
    )
}

export default Counter;