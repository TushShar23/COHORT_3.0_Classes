import { useEffect, useState } from 'react'
import './App.css'
import useDebounce from '../Components/Debounce'

function App() {
  const [inputval,setInputVal] = useState("");
  const debounceval = useDebounce(inputval,200)

  function change(event){
    setInputVal(event.target.value)
    // event here is onchange its target is input box and value is what we are gonna write in the input box.
  }

  useEffect(()=>{
    console.log("Expensive Operation!!")
  },[debounceval]);

  return(
    <div>
      <input type="text" name="Inputval" id="myInput" onChange={change}/>
    </div>
  )
}

// We are implementing another approach of "useDebounce hook" where we are using useDebounce hook on value changing in the input box when user gets away from keyboard for 30ms or more it updates the value into the "debouncevalue variable" and the moment that variable gets updated our effect will run and do the expensive operation.

// we have not used API calling mechanism to demonstrate the working BUT we have used console.log("Expensive operation").WHENEVER WE TYPE IN THE INPUT BOX IT WAITS FOR 200MS AFTER THAT IT SENDS THE REQUEST (but here shows console.log("EXPENSIVE OPERATION")).so YES it is working

export default App


    //                             ┌─────────────────────────┐
    //                             │ First Render of <App/>  │
    //                             └───────────┬─────────────┘
    //                                         │
    //                                         ▼
    //                       ┌──────────────────────────────────┐
    //                       │ Call useDebounce(inputVal, 200) │
    //                       └───────────────┬──────────────────┘
    //                                       │
    //                                       ▼
    //                     ┌────────────────────────────────────────┐
    //                     │ useEffect (inside useDebounce) runs    │
    //                     │ → setTimeout(handler, 200ms)           │
    //                     └─────────────────┬──────────────────────┘
    //                                       │
    //                          ┌────────────┴───────────────┐
    //                          ▼                            ▼
    //              User types again?                   No more typing?
    //                    YES                                 YES
    //                          ▼                            ▼
    //  ┌───────────────────────────────────────┐      ┌─────────────────────┐
    //  │ useEffect cleanup runs                │      │ 200ms timeout fires │
    //  │ → clearTimeout(previous handler)      │      │ → setDebounceVal()  │
    //  │ New useEffect runs → new timer set    │      └───────────┬─────────┘
    //  └──────────────────────┬────────────────┘                  │
    //                         │                                   ▼
    //                         │                   ┌─────────────────────────┐
    //                         └──────────────────▶│ App re-renders (because │
    //                                             │ debounceVal updated)    │
    //                                             └────────────┬────────────┘
    //                                                          │
    //                                                          ▼
    //                                ┌──────────────────────────────────────────┐
    //                                │ useEffect in App runs (dependency changed)│
    //                                │ → Expensive Operation!                   │
    //                                └──────────────────────────────────────────┘


    /*
    
    PUTTING IT ALL TOGETHER (COMPLETE CYCLE)
    👉 INITIAL

    App renders → debounceVal="" → timer starts

    👉 USER TYPES "a"

    App re-renders

    Old timer cleared

    New timer set (200ms)

    debounceVal still ""

    👉 AFTER 200ms OF NO TYPING

    setDebounceVal("a")

    👉 RERENDER

    App sees:

    debounceval changed ("" → "a")

    runs expensive operation
    
    */
