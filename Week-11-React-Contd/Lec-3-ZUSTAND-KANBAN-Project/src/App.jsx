import { useState } from 'react'
import Columns from '../Components/Columns'
import './App.css'; 
import Header from '../Components/Header';

function App() {
  return(
    <div className='App'>
      <Header/>
      <div className='maincontent'>
        <Columns CurrentState="PLANNED"/>
        <Columns CurrentState="ONGOING"/>
        <Columns CurrentState="DONE"/>
      </div>
    </div>
  )
  
}

export default App


// we are creating a KANBAN BOARD which shows our tasks PLANNED,ONGOING and DONE.
// There will be styling for every component like columns,task and app.
