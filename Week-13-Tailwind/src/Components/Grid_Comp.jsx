import react from "react"

const Grid_Comp = ()=>{
    return(
        <div className="main-cont grid grid-cols-12 border-4 border-black mb-3 p-4 gap-2">
            <div className="first col-span-6 bg-cyan-500 text-black p-1">
                Hi there! from the first div
            </div>
            
            <div className="second col-span-4 bg-emerald-400 text-yellow-400 p-1">
                Hi there! from the second div
            </div>

            <div className="third col-span-2 bg-purple-950 text-teal-100 p-1">
                Hi there! from the third div
            </div>
        </div>
    )
}

export default Grid_Comp
