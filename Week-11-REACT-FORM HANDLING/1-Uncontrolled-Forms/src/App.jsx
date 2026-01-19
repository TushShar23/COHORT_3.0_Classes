import { useState } from 'react'
import './App.css'
import UncontrolledForm from '../Components/Uncontrolled-form'
// Uncontrolled forms/components are those which are NOT HANDLED BY REACT.The form DATA is handled by the DOM itself.
function App() {
  return(
    <div>
      <UncontrolledForm />
    </div>
  )
}

export default App
