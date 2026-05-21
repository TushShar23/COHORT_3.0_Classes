import React from "react"

const OptionsCard = ()=>{
    return (
        <div className="w-80 h-64 border-4 shadow-[0_0_10px_0px_rgba(0,0,0,0.3)] rounded-xl flex flex-wrap flex-col items-center p-4">
            <div className="firstTWO flex justify-center gap-12 border-2 w-full mt-6 p-2">
                <div className="one border-2 flex flex-col justify-center items-center p-2 gap-1">
                    <div className="logo flex justify-center items-center p-2 bg-gray-400 rounded-lg w-13 h-12">
                        <i class="ri-calendar-schedule-fill text-3xl"></i>
                    </div>
                    <p className="border-2 text-xs font-semibold text-center ">Schedule a webinar</p>
                </div>
                <div className="two">
                    <div className="logo flex justify-center items-center p-2 bg-gray-400 rounded-lg w-13 h-12">
                        <i class="ri-add-large-line text-5xl"></i>
                    </div>
                    <p className="text-xs font-semibold">Schedule a webinar</p>
                </div>
            </div>

            <div className="one border-2 flex flex-col justify-center items-center p-2 gap-1">
                <div className="third">

            {/* <i class="ri-clapperboard-line text-3xl"></i> */}
                </div>
            </div>
            
            
        </div>
    )
}

export default OptionsCard