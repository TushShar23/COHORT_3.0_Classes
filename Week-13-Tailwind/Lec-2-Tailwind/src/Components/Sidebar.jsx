import { useState } from "react"
import SideProfileCard from "./SideProfileCard"
import ScheduleCard from "./ScheduleCard"
import OptionsCard from "./OptionsCard"

export const SideBar = ()=>{
     const [open,setOpen] = useState(false)

    // const openBar = ()=>{

    // }
    return(
        <div className="Side-div flex items-center justify-center sm:items-end h-screen border-2 ">
            <div className="tog-btn flex justify-center items-center">
             <i class={`ri-menu-line text-white text-xl font-bold absolute top-10 left-5 ${open && "hidden"}`} onClick={()=>{setOpen(true)}}></i>
            </div>
            {/* left box */}
            
            <div className={`div-left shrink-0 shadow-xl h-full bg-white w-fit sm:w-75 md:flex gap-10 md:flex-col justify-start items-start text-black p-3  transition-all duration-300 ease-in-out md:translate-x-0 -translate-x-96 ${open && "translate-x-0 flex flex-col gap-10 w-75 items-center"}`}>
                {/* what i have done here to make the sidebar is that applied a transition slide from left when the screen is greater or equal to md then it appears its width is 75 else(mobile screen) w-0  and the right div takes the whole space when mobile screen BY DEFAULT WIDTH OF THE SIDEBAR IS 0 */}
                <div className="logo flex gap-25 items-center justify-center p-2">
                    <div className="name bg-blue-950 px-3 py-2 rounded-lg w-fit">
                        <p className="text-white"><i class="ri-robot-2-fill mr-2"></i>Webinar<span className="text-gray-500">.gg</span></p>
                    </div>
                    <i class="ri-close-line text-2xl font-bold md:hidden" onClick={()=>{setOpen(false)}}></i>
                </div>

                <div className="menu flex flex-col gap-3 justify-center items-center">
                    <div className=" w-58 flex justify-between items-center p-1 ml-2">
                        <span>Home</span>
                        <i class="ri-home-3-fill"></i>
                    </div>
                    <div className="w-58 flex justify-between items-center p-1 ml-2">
                        <span>Webinars</span>
                        <i class="ri-team-line"></i>
                    </div>
                    <div className="w-58 flex justify-between items-center p-1 ml-2">
                        <span>Billings</span>
                        <i class="ri-wallet-line"></i>
                    </div>
                    <div className="w-58 flex justify-between items-center p-1 ml-2">
                        <span>User Management</span>
                        <i class="ri-user-fill"></i>
                    </div>
                    <div className="w-58 flex  justify-between items-center p-1 ml-2">
                        <span>Settings</span>
                        <i class="ri-settings-5-line"></i>
                    </div>
                </div>
            </div>


            {/* right box */}
            <div className="div-right h-full md:h-150 p-4 w-fit sm:w-screen bg-white text-black flex flex-col items-center gap-20 md:flex-row box-border justify-center ">
                {/* Hey! */}
                <SideProfileCard img={`https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D`} name={"Prabhleen Kaur"} phno={"9999900000"} location={"Delhi,India"} id={"prabhleen@gmail.com"}/>
                <ScheduleCard />
                <OptionsCard />
            </div>
        </div>
    )
}