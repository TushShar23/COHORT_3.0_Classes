
export const SideBar = ()=>{
    return(
        <div className="Side-div flex text-white justify-center items-end h-screen p-4">
            <div className="tog-btn flex justify-center items-center">
             <i class="ri-menu-line text-white text-xl absolute top-10 left-5"></i>
            </div>
            {/* left box */}
            
            <div className="div-left h-full bg-white w-0 md:w-75 md:flex md:flex-col justify-start items-start text-black p-3 gap-10 transition-all duration-300 ease-in-out md:translate-x-0 -translate-x-96 ">
                {/* what i have done here to make the sidebar is that applied a transition slide from left when the screen is greater or equal to md then it appears its width is 75 else(mobile screen) w-0  and the right div takes the whole space when mobile screen BY DEFAULT WIDTH OF THE SIDEBAR IS 0 */}
                <div className="logo">
                    <div className="name bg-blue-950 px-3 py-2 rounded-lg">
                        <p className="text-white"><i class="ri-robot-2-fill mr-2"></i>Webinar<span className="text-gray-500">.gg</span></p>
                    </div>
                </div>

                <div className="menu flex flex-col gap-3 justify-center items-center">
                    <div className="w-58 flex justify-between items-center p-1">
                        <span>Home</span>
                        <i class="ri-home-3-fill"></i>
                    </div>
                    <div className="w-58 flex justify-between items-center p-1">
                        <span>Webinars</span>
                        <i class="ri-team-line"></i>
                    </div>
                    <div className=" w-58 flex justify-between items-center p-1">
                        <span>Billings</span>
                        <i class="ri-wallet-line"></i>
                    </div>
                    <div className=" w-58 flex justify-between items-center p-1">
                        <span>User Management</span>
                        <i class="ri-user-fill"></i>
                    </div>
                    <div className=" w-58 flex justify-between items-center p-1">
                        <span>Settings</span>
                        <i class="ri-settings-5-line"></i>
                    </div>
                </div>
            </div>


            {/* right box */}
            <div className="div-right h-150 w-screen md:w-[calc(100%-300px)] bg-white border-5 border-yellow-500 text-black">
                Hey!
            </div>
        </div>
    )
}