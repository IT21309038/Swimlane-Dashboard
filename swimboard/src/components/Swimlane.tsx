import React from 'react'

interface SwimlaneProps {
  status: string;
}

const Swimlane = ({status}: SwimlaneProps) => {
  return (
    <div className='min-w-[300px] bg-gray-100 rounded-md p-4 shadow'>
      <h2 className='text-lg font-bold mb-2'>
        {status}
      </h2>
      <div className='flex flex-col gap-2'>
        {/* Tasks would be rendered here */}
        <div className='p-4 bg-white rounded shadow text-center text-gray-500'>No Tasks</div>
      </div>
    </div>
  )
}

export default Swimlane