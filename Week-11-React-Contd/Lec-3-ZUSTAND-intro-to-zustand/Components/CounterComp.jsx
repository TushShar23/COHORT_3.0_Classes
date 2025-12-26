import useCountStore from "../Stores/Count"

function CountVal(){
  const count = useCountStore((state)=>state.count) 
    return(
        <div>
            {count}
        </div>
    )
}

export default CountVal;