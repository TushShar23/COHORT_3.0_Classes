import React from 'react'

const ScheduleCard = () => {
  const MeetLists = [
    {
      t1:"",
      t2:"11:30 AM",
      status:"",
      title:"",
      logo:"ri-video-on-fill"
    },
    {
      t1:"11:30 AM",
      t2:"11:30 AM",
      status:"Upcoming",
      title:"My first Webinar",
      logo:""
    },
    {
      t1:"11:30 AM",
      t2:"11:30 AM",
      status:"Upcoming",
      title:"Important Webinar",
      logo:"ri-video-on-fill"
    },
    {
      t1:"11:30 AM",
      t2:"11:30 AM",
      status:"Upcoming",
      title:"Webinar 1",
      logo:"ri-video-on-fill"
    },
  ]
  return (
    <div className='w-fit h-fit border-4 p-4 flex flex-col gap-8'>
        <div className="headers flex flex-col gap-2 mt-2">
            <h3>Wednesday,20 May</h3>
            <h1 className='text-2xl font-bold text-blue-950'>Good Morning, Prabhleen! <span>&#128075;</span></h1>
        </div>
        
        <div className="scheduler w-125 h-90 mb-2 rounded-xl shadow-[0_0_10px_0px_rgba(0,0,0,0.3)] flex flex-col items-center p-4 gap-2">
            <div className="date flex justify-between pl-6 pr-6 w-md h-12 items-center rounded-xl bg-blue-50/60">
              <p className='flex gap-2 items-center'><i class="ri-calendar-2-line text-lg font-bold"></i>Wednesday,20 May 2026<i class="ri-arrow-drop-down-line text-2xl text-gray-500 font-bold"></i></p>
              <span className='flex gap-2 text-xl items-center text-gray-500'><i class="ri-arrow-left-long-line"></i><i class="ri-arrow-right-long-line"></i></span>
            </div>
            
            <div className="meetings flex flex-col items-center border-2 h-full w-full p-2">
              <div className="one flex pl-2 pr-2 justify-between items-center border-2 w-full">
                <div className="time flex flex-col ">
                  <p>11:30 AM</p>
                  <p>11:30 AM</p>
                </div>
                <div className="topic flex flex-col">
                  <p>Live</p>
                  <i class="ri-video-on-fill text-red-600"></i>
                  <p>UX Webinar</p>
                </div>

              </div>
            </div>
        </div>
    </div>
  )
}

export default ScheduleCard