import { useState , useEffect } from "react"

function useDebounce(value,delay){
    const [debounceVal,setDebounceVal] = useState(value);

    // function Expensive

    useEffect(()=>{
        const handler = setTimeout(()=>{
            setDebounceVal(value)
        },delay)

        return ()=>{
            clearTimeout(handler)
        };
    },[value,delay])

    return debounceVal;
    
}

export default useDebounce;