import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card_Component from '../Components/Card_Children'
import Todo_Component from '../Components/Todo_Lists&Keys'

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

      {[

        //In React, LISTS simply mean rendering multiple items using .map().

        /*
        
        const items = ["apple", "banana", "mango"];

            return (
              <ul>
                {items.map(item => <li>{item}</li>)}
              </ul>
            );

        
        
        */


        // Each child in a list should have a unique "key" prop.
        //Check the render method of `App`. See https://react.dev/link/warning-keys for more information.

        //(This ABOVE ERROR WILL COME IF WE DON'T USE KEYS)
        /*
        
        > A key is a unique identifier you give to each element inside a list, so React can track them efficiently during re-render.
          >Keys must be unique
          >Keys must not change between renders
          >Keys help React know which item changed, added, or removed
        
        */

        <Todo_Component key={1} title={"Go to gym"} done={false}></Todo_Component>,
        <Todo_Component key={2} title={"Eat food"} done={true}></Todo_Component>
      ]}
    </>
  )
}

export default App
