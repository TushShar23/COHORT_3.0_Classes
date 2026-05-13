import React from 'react'

const TestingComp = () => {
  return (
    <div className='flex flex-col gap-3 mt-2'>
        <div className='bg-blue-900 text-yellow-400 flex gap-10 justify-center p-2'>
        {/* p-2 padding-2 in all directions.Usually works in pixels */}
        <li>Child 1</li>
        <li>Child 2</li>
        <li>Child 3</li>
      </div>
      <div className='bg-blue-900 text-yellow-400 flex justify-between items-center px-6'>
        {/* px- padding in x-axis , py-padding in y axis */}
        <li>Child 4</li>
        <li>Child 5</li>
        <li>Child 6</li>
      </div>
      <div className='bg-blue-900 text-yellow-400 flex justify-around items-center px-6 py-2'>
        {/* px- padding in x-axis , py-padding in y axis */}
        <li>Child 4</li>
        <li>Child 5</li>
        <li>Child 6</li>
      </div>
      <div className='bg-blue-900 text-yellow-400 flex justify-start items-start gap-10 px-6 py-2'>
        {/* px- padding in x-axis , py-padding in y axis */}
        <li>Child 4</li>
        <li>Child 5</li>
        <li>Child 6</li>
      </div>
      <div className='bg-blue-900 text-yellow-400 flex justify-end items-end gap-10 px-6 py-2'>
        {/* px- padding in x-axis , py-padding in y axis */}
        <li>Child 4</li>
        <li>Child 5</li>
        <li>Child 6</li>
      </div>


{/* flex - column */}
      <div className='bg-black text-blue-100 flex flex-col justify-evenly items-center gap-1 py-2'>
        <li>Child 7</li>
        <li>Child 8</li>
        <li>Child 9</li>
      </div>
      <div className='bg-black text-blue-100 flex flex-col justify-between items-center gap-1 py-2'>
        <li>Child 7</li>
        <li>Child 8</li>
        <li>Child 9</li>
      </div>
      <div className='bg-black text-blue-100 flex flex-col justify-around items-end gap-1 py-2'>
        <li>Child 7</li>
        <li>Child 8</li>
        <li>Child 9</li>
      </div>
      <div className='bg-black text-blue-100 flex flex-col justify-start items-start gap-1 py-2'>
        <li>Child 7</li>
        <li>Child 8</li>
        <li>Child 9</li>
      </div>


    </div>
  )
}

export default TestingComp