import { useState } from 'react'
import './App.css'
import usePrev from '../Hooks/usePrev'

function App() {
  const [state,setState] = useState(0);
  const value = usePrev(state);
  return(
    <div>
      {state}
      <br />
      <button onClick={()=>setState(curr => curr + 1)}>Increase</button>
      <br />
      <p>The previous value was : {value}</p>
    </div>
  )
}

export default App
