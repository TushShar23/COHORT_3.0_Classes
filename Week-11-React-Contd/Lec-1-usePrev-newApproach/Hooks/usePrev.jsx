import { useRef } from "react"

const usePrev = (value,initial)=>{
    const ref = useRef({target:value,previous:initial})
    
    if(ref.current.target !== value){
        ref.current.target = value;
        ref.current.previous = ref.current.target;
    }

    return ref.current.previous;

}

export default usePrev;