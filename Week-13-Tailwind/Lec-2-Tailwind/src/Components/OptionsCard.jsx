import React from "react"

const OptionsCard = ()=>{
    return (
        <div className="w-75 h-70 shadow-[0_0_10px_0px_rgba(0,0,0,0.3)] rounded-xl flex flex-wrap flex-col items-start p-2 gap-2">
            <div className="firstTWO flex justify-center gap-4 w-full mt-6 p-2">
                <div className="one flex flex-col justify-center items-center p-1 gap-1 w-[50%]">
                    <div className="logo flex justify-center items-center p-2 bg-gray-400 rounded-lg w-13 h-12">
                        <i class="ri-calendar-schedule-fill text-3xl text-blue-950"></i>
                    </div>
                    <p className=" w-full text-[12px] font-bold text-center ">Schedule a webinar</p>
                </div>
                <div className="two flex flex-col justify-center items-center p-1 gap-1 w-[50%]">
                    <div className="logo flex justify-center items-center p-2 bg-gray-400 rounded-lg w-13 h-12">
                        <i class="ri-add-large-line text-3xl font-bold text-blue-950"></i>
                    </div>
                    <p className=" w-full text-xs font-bold text-center">Join a webinar</p>
                </div>
            </div>

            <div className="two flex flex-col justify-center items-center p-1 gap-1 w-[50%]">
                <div className="logo flex justify-center items-center p-2 bg-gray-400 rounded-lg w-13 h-12">
                    <i class="ri-clapperboard-line text-3xl font-bold text-blue-950"></i>
                </div>
                <p className=" w-full text-xs font-bold text-center">Open recordings</p>
            </div>
           
            
            
        </div>
    )
}

export default OptionsCard