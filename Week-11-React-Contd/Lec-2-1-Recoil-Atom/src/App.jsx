import { useState } from 'react'
import './App.css'

function App() {
  retur
}




// Here we are going to learn about (RECOIL = State management library).

// But we can also use useState() hook or Context API then why we are using this ?
// Coz useState() and Context API are not the optimal ways to do state management coz they performs unnecessary re-renders which is not good for our APP.

// RECOIL MINIMIZES UNNECESSARY RENDERS BY ONLY RE-RENDERING COMPONENTS THAT DEPENDS ON CHANGED ATOM.

// ****** THE PERFORMANCE OF A REACT APP IS MEASURED BY THE NO.OF RE-RENDERS.EACH RE-RENDER IS EXPENSIVE.

/*

LET SAY YOU HAVE A TOPBAR AND THAT COMPONENT CONTAINS NOTIFICATION COUNT VARIABLE WHICH CHANGES ITS STATE.IF A NOTIFICATION COMES THEN ONLY THAT NOTIFICATION VARIABLE SHOULD CHANGE AND RE-RENDER NOT WHOLE TOPBAR.IF WE USE useState() or Context API then it re-renders the whole component BUT RECOIL WILL LET YOU RE-RENDER ONLY A SPECIFIC PART.

KEY CONCEPTS IN RECOIL

1. ATOM
2. SELECTORS


*/


export default App
