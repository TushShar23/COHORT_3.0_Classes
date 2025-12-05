import { useState } from 'react'
import './App.css'
import usePrev from '../../Lec-1-usePrev-hook/Hooks/usePrev';

function App() {
  const [state,setState] = useState(0);
  const prev = usePrev(0,0);

  // function change(){
  //   setState()
  // }
  return(
    <div>
      <p>Value is : {state}</p>
      <br />
      <button onClick={()=>setState(curr=>curr+1)}>Increase</button>
      {/* used implicit return */}
      <br />
      <p>Previous val : {prev}</p>
    </div>
  )
}

export default App
