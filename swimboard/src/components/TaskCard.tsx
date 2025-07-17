import React from 'react'

import { Task } from '@/store/useTaskStore'

const TaskCard = ({task}: {task : Task}) => {
  return (
    <div className='p-4 bg-white rounded shadow hover:shadow-md transition'>
      <div className='font-semibold'>{task.title}</div>
      <p className='text-sm text-gray-600'>{task.description}</p>
    </div>
  )
}

export default TaskCard