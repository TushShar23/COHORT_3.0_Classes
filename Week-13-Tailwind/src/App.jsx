import { useState } from 'react'
import './App.css'
import TestingComp from './Components/Flex_Comp'
import Grid_Comp from './Components/Grid_Comp'
import Use_Case from './Components/Use_Case'

function App() {
  return(
    <div className='flex flex-col gap-20'>
      <TestingComp />
      <Grid_Comp />
      <Use_Case />
    </div>
  )
}

export default App
