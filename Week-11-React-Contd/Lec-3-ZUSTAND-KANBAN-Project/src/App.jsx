import { useState } from 'react'
import Columns from '../Components/Columns'
import './App.css'; 

function App() {
  return(
    <div className='App'>
      <Columns state="PLANNED"/>
      <Columns state="ONGOING"/>
      <Columns state="DONE"/>
    </div>
  )
  
}

export default App


// we are creating a KANBAN BOARD which shows our tasks PLANNED,ONGOING and DONE.
// There will be styling for every component like columns,task and app.
