'use client'

import React from 'react'
import Swimlane from './Swimlane'

const statuses = ['To Do', 'In Progress', 'Done'];

const Board = () => {
  return (
    <div className='flex flex-col gap-4'>
      <div className='text-2xl font-semibold'>Task Board</div>

      <div className='flex gap-4 overflow-x-auto'>
        {statuses.map((status) => (
          <Swimlane key={status} status={status} />
        ))}
      </div>
    </div>
  )
}

export default Board