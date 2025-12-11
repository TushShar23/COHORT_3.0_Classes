import { useState } from 'react'
import './App.css'
import useDebounce from '../Components/Debounce'
import MainFunc from '../Components/MainFunc'

function App() {
  const debouncefn = useDebounce(MainFunc)
  return(
    <div>
      <input type="text" name="myText" id="textarea" onChange={debouncefn}/>
    </div>
  )
}




/*

// YES IT IS WORKING.IF USER TYPING TIME GAP IS 200MS THEN IT WILL AUTOMATICALLY CALL THE MAINCALLING FUNCTION.
(matlab request tab jaayegi jab user apne keyboard se dur ho jaayega aur 200ms pass ho jaayenge nahi toh nhi jaayegi)
Consider a scenario where a user is typing into a search input field to find specific items on a website. Without optimization, every keystroke would trigger an API call to fetch search results. This means that even before the user finishes typing a word, multiple unnecessary API requests are sent, potentially overwhelming the server and slowing down the application.

By utilizing the useDebounce hook, we can delay the execution of the API call until the user has finished typing, thus reducing the number of unnecessary requests and optimizing the application's performance.


*/

export default App
