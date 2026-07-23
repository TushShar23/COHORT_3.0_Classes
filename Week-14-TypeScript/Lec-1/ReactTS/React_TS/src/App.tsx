import './App.css'
import {ChaiCard} from "../Components/ChaiCard.tsx"
import {CounterTs} from "../Components/Counter.tsx"

function App() {
  return (
    <>
      <div>
        <h1>VITE + REACT</h1>
        {/* // 1. */}
        <ChaiCard 
          name= {"Macbook"}
          price= {200000}
        />
        {/* // 2. */}
        <ChaiCard 
          name= {"Iphone"}
          price= {80000}
        />
        {/* // 3. */}
        <ChaiCard 
          name= {"Samsung Fold 6"}
          price= {170000}
        />
        <ChaiCard 
          name= {"Apple watch series 6"}
          price= {95000}
          isSpecial= {true}
        />

        <br />

        <CounterTs />
        
      </div>
    </>
  )
}

export default App
