import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card_Component from '../Components/Card_Children.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card_Component>
        {/* This "div" is nothing but the CHILDREN OF CARD COMPONENT we are sending to CARD_COMPONENT to return us the card with the given data and we here in APP will render that */}
        <div>
          <h2>Card Title</h2>
          <p>This is some content inside the card.</p>
        </div>
      </Card_Component>
      <Card_Component>
        {/* This "div" is nothing but the CHILDREN OF CARD COMPONENT we are sending to CARD_COMPONENT to return us the card with the given data and we here in APP will render that */}
        <div>
          <h2>Another Card</h2>
          <p>This card has some other content.</p>
          <textarea name="mytextarea" id=""></textarea>
        </div>
      </Card_Component>
    </>
  )
}

export default App
