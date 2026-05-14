import React, { useState } from 'react'

const HomeScreenComp = () => {
  const [activeState,Setactivestate] = useState("")
  return (
    <div className='maindiv size-full bg-blue-950 text-xl text-indigo-200 flex flex-col justify-center items-center p-5 gap-20 bold'>
        <h1 className='main-h text-3xl mt-15 text-gray-500 flex justify-center items-center '><i class="ri-robot-2-fill mr-2"></i>Webinar<span className='text-white'>.gg</span></h1>
        
        <div className='main-box flex flex-col justify-center items-center gap-11'>
            <h1 className='verify font-bold text-white text-2xl'>Verify Your Age</h1>
            <div className='confm-box flex flex-col justify-between items-center  text-sm text-gray-400 gap-2'>
                <p>Please confirm your birth year.This data will not be stored</p>
                <input type="text" name="UserAge" id="age" placeholder='Your Birth Year' className='bg-gray-400/50 w-60 h-9 rounded-md text-xs text-white/50 p-2' value={activeState} onChange={(e)=>{Setactivestate(e.target.value)}}/>
            </div>
        </div>
        <button className={`cont-btn -mt-10 mb-20 text-[15px] cursor-pointer w-60  h-9 rounded-md font-bold 
        ${
            activeState ? "bg-gray-400 text-black" : "bg-gray-500 text-white"
        }
        
        `}>Continue</button>
    </div>
  )
}


export default HomeScreenComp


// This can also be done by making button a separate component which accepts bunch of things like {disabled,OnClick,children..} and then inside that we can do conditional rendering(using string literals OR by using conditional classes)

// we can also use h-screen(for full screen height(100vh)) and w-screen(100vw)