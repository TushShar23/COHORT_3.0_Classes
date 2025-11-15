import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from '../components/Card'



function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    username:"Anon",
    age:21
  }

  return (
    <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center",gap:"2rem"}}>
      <Card name={"Tushar"} Obj={myObj} para={"How's Your winter arc going ?"}></Card>
      <Card name={"Naman"} para={"Hey there,This is Naman"}></Card>
      <Card name={"Nishant"} para={"I am a fellow programmer"}></Card>
      <Card name={"Programmer"} para={"Programmer is learning React nowadays"}></Card>
      <Card para={"Hello Hello"}></Card>
    </div>
  )
}

// see "card" is a functional component and "name" is a PROP to that function.So it is just like sending arguments and receiving the parameters.IT IS JUST YOU CAN ACCESS THOSE PROPERTIES BY . OPERATOR COZ THOSE ARE INSIDE AND OBJECT.

export default App
