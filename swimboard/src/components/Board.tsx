'use client'

import React from 'react'
import Swimlane from './Swimlane'

import { useEffect } from 'react';
import { useTaskStore } from '@/store/useTaskStore';

const statuses = ['To Do', 'In Progress', 'Approved', 'Rejected'];

const Board = () => {

  const { tasks, setTasks } = useTaskStore();

  useEffect(() => {

    const fetchTasks = async () => {
      const response = await fetch('/tasks.json');
      const data = await response.json();
      setTasks(data);
    }
    fetchTasks();
  }, [setTasks]);


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