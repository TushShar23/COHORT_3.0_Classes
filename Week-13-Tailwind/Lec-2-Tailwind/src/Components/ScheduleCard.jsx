import React from 'react'

const ScheduleCard = () => {
  return (
    <div className='w-fit h-fit p-4 flex flex-col gap-8'>
        <div className="headers flex flex-col gap-2 mt-2">
            <h3>Wednesday,20 May</h3>
            <h1 className=' text-lg md:text-2xl font-bold text-blue-950'>Good Morning, Prabhleen! <span>&#128075;</span></h1>
        </div>
        
        <div className="scheduler w-fit lg:w-125 h-90 mb-2 rounded-xl shadow-[0_0_10px_0px_rgba(0,0,0,0.3)] flex flex-col items-center p-4 gap-2">
            <div className="date flex justify-between pl-6 pr-6 w-fit md:w-md h-12 items-center rounded-xl bg-blue-50/60">
              <p className='flex gap-2 items-center'><i class="ri-calendar-2-line text-sm md:text-lg font-bold"></i><span className="text-sm md:text-[16px]">Wednesday,20 May 2026</span><i class="ri-arrow-drop-down-line text-lg md:text-2xl text-gray-500 font-bold"></i></p>
              <span className='flex gap-2 text-sm md:text-xl items-center text-gray-500'><i class="ri-arrow-left-long-line"></i><i class="ri-arrow-right-long-line"></i></span>
            </div>
            
            <div className="meetings flex flex-col w-fit items-center h-full p-2">
              {/* first */}
              <div className="one flex justify-between items-center w-62 md:w-108 gap-2 p-1 border-b border-gray-400">
                <div className="time flex flex-col items-start w-24 gap-0.5 p-1 justify-start -mt-1.5">
                  <p className='text-sm md:text-md text-start font-semibold'>11:30 AM</p>
                  <p className='text-xs text-gray-500 text-left'>11:30 AM</p>
                </div>
                <div className="topic flex flex-col justify-start w-[calc(100%-96px)] p-1 gap-2 border-l border-gray-400">
                  <p className='text-red-600 text-xs font-semibold ml-1.5'>Live <i class="ri-video-on-fill text-red-600"></i></p>
                  <p className='font-semibold ml-1.5 text-sm md:text-md'>UX Webinar</p>
                </div>
              </div>
              {/* second */}
              <div className="second flex justify-between items-center w-62 md:w-108 gap-2 p-1 border-b border-gray-400">
                <div className="time flex flex-col items-start w-24 gap-0.5 p-1 justify-start -mt-1.5">
                  <p className='text-sm md:text-md text-start font-semibold'>11:30 AM</p>
                  <p className='text-xs text-gray-500 text-left'>11:30 AM</p>
                </div>
                <div className="topic flex flex-col justify-start w-[calc(100%-96px)] p-1 gap-2 border-l border-gray-400">
                  <p className='text-black text-xs font-medium ml-1.5'>Upcoming <i class="ri-video-on-fill text-blue-500"></i></p>
                  <p className='font-semibold ml-1.5 text-sm md:text-md'>My first Webinar</p>
                </div>
              </div>
              {/* third */}
              <div className="one flex justify-between items-center w-62 md:w-108 gap-2 p-1 border-b border-gray-400">
                <div className="time flex flex-col items-start w-24 gap-0.5 p-1 justify-start -mt-1.5">
                  <p className='text-sm md:text-md text-start font-semibold'>11:30 AM</p>
                  <p className='text-xs text-gray-500 text-left'>11:30 AM</p>
                </div>
                <div className="topic flex flex-col justify-start w-[calc(100%-96px)] p-1 gap-2 border-l border-gray-400">
                 <p className='text-black text-xs font-medium ml-1.5'>Upcoming <i class="ri-video-on-fill text-blue-500"></i></p>
                  <p className='font-semibold ml-1.5 text-sm md:text-md'>Important Webinar</p>
                </div>
              </div>
              {/* fourth */}
              <div className="one flex justify-between items-center w-62 md:w-108 gap-2 p-1 border-b border-gray-400">
                <div className="time flex flex-col items-start w-24 gap-0.5 p-1 justify-start -mt-1.5">
                  <p className='text-sm md:text-md text-start font-semibold'>11:30 AM</p>
                  <p className='text-xs text-gray-500 text-left'>11:30 AM</p>
                </div>
                <div className="topic flex flex-col justify-start w-[calc(100%-96px)] p-1 gap-2 border-l border-gray-400">
                  <p className='text-black text-xs font-medium ml-1.5'>Upcoming <i class="ri-video-on-fill text-blue-500"></i></p>
                  <p className='font-semibold ml-1.5 text-sm md:text-md'>Webinar 1</p>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default ScheduleCard

// So schedule card will expand when screen will ne narrower in size and we will hide the sideprofile card at that screen size