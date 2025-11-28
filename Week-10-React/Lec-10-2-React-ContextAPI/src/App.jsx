import { useState } from 'react'
import React from 'react';
import './App.css'
import Light from '../Components/Light.jsx';

export const BulbContext = React.createContext();
// we have exported the context coz we are using in it other components.
// const BulbContext = createContext()  IF you have imported in React.

function App() {
  const [BulbOn,setBulbState] = useState(true);
  // we want that without prop drilling our component which needs this state variable will be able to access it.USING CONTEXTAPI we can do this

  return (
    // BulbContext.Provider is the provider for our CONTEXT(which is our data/state variables)
    <div>
      <BulbContext.Provider value={{
        BulbOn:BulbOn,
        setBulbState:setBulbState
      }}>
        <Light />
      </BulbContext.Provider>
    </div>
  )
}


// ANOTHER APPROACH (we can build our own provider function/component.MOSTLY USED IN SOLANA BASED COMPONENTS)

/*

const BulbContext = React.createContext();

function BulbProvider({children}){
  const [bulbOn,setBulbOn] = userState(true);

  return (
    <BulbContext.Provider value = {{bulbOn:bulbOn,setBulbOn:setBulbOn}}>
      {children}
    </BulbContext.Provider>

  )
}

function App(){
  return (
    <div>
      <BulbProvider>
        <Light>
      </BulbProvider>
    </div>
  )
}

Thatshow we have hide the main implementation of the CONTEXT API and wrap it inside component and used that component for our purpose.


*/


export default App


// CONTEXT API

/*

So the problem was PROP DRILLING.WE HAVE TO SEND TO PROP TO THE COMPONENTS.MAIN PROBLEM WAS we need to send it through components which NOT EVEN USES THEM just for making them available to the bottom most or COMPONENT WHICH IN WHERE IN THE TREE (COULD BE IN THE LAST MIDDLE) but the problem was the MIDDLE COMPONENTS which were not even using them.WE WERE SENDING THEM OUR WHOLE PROPS CHAIN.Like if we have 5-6 props we need to send them to every descendant component till it reaches the component WHICH ACTUALLY USES IT.NO MAINTAINECE ( It can make the code harder to maintain, as changes in the props structure require updates in multiple components.)

PROP DRILLING VS ROLLING UP STATE.

Passing data from a parent component → to a deeply nested child → through many intermediate components, even if those middle components don’t need the data.
App → ComponentA → ComponentB → ComponentC → TargetComponent


Instead of keeping state in a deep child component, you move (lift) the state up to the nearest common parent, so that multiple components can use or update it without prop drilling.This is also known as: "Lifting State Up"


STEPS:
1) Define the context.
2) Wrap the child under Context Provider.
3) Context is consumed by the consumer component.



LIMITATIONS OF CONTEXT API:
1) IT doesnt OPTIMISE the codebase.
2) Does not optimise the no of re-renders

* You can make CONTEXT API more optimal,perform less renders USING "useMemo" hook. 


thatswhy we need state management libraries.
we are using RECOIL LIBRARY TO MANAGE STATES.

*/
