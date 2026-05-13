import React from 'react'

const Use_Case = () => {
  return (
    <div className='grid grid-rows-3 border-solid border-4 border-black gap-2 p-2 sm:grid-cols-12'>
        <div className='first col-span-12 bg-green-500 p-1 sm:col-span-7'>Hi from div 1</div>
        <div className='second col-span-12 bg-gray-700 p-1 sm:col-span-3'>Hi from div 2</div>
        <div className='third col-span-12 bg-yellow-600 p-1 sm:col-span-2'>Hi from div 3</div>
    </div>

    // What we have done here is that because we know that tailwind prioritises MOBILE FIRST DESIGN so when the screen size is sm == 640 or bigger divs will be take 7,3 and 2 cols respectively and else(on <640) they will take 12 columns and will be 3 rows(main div) and inside the main div those 3 cols will take 12 cols(full width ) when the size is <640 else it takes 7,3,2 respectively and there will be only 1 row.
  )
}

export default Use_Case