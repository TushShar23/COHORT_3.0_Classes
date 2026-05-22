import React from 'react'

const SideProfileCard = ({img,name,id,phno,location}) => {
  return (
    <div className='h-84 hidden lg:w-60 shadow-lg ml-8 lg:relative lg:-top-42 bg-white lg:flex lg:flex-col lg:items-center rounded-xl gap-4'>
        {/* dont'use pos:absolute else components will overlap */}
        <div className="profile w-28 flex justify-center items-center p-2 mt-8">
            <img src={img} alt="Avatar Image" className='rounded-2xl'/>
        </div>
        <div className='info text-lg text-gray-500 flex flex-col items-center gap-3'>
            <h1 className='text-black'><strong>{name}</strong></h1>
            <div className='creds text-[16px] flex flex-col items-center'>
                <p>{id}</p>
                <p>{phno}</p>
            </div>
        <p className='text-[16px]'>{location}</p>
        </div>
    </div>
  )
}

export default SideProfileCard