import './App.css'
import {ChaiCard} from "../Components/ChaiCard.tsx"

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
      </div>
    </>
  )
}

export default App
