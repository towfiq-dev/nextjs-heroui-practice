import AddTask from '@/components/addTask/AddTask';
import Task from '@/components/task/Task';
import { getTasks } from '@/lib/task';
import React from 'react';

const tasksPage = async() => {
  const tasks = await getTasks()
  return (
    <div className='max-w-300 mx-auto'>
      <h1 className='text-center text-3xl font-bold my-6'>Total Length: {tasks.length}</h1>
      <div className='flex justify-center mb-5'>
        <AddTask></AddTask>
      </div>
      <div className='grid grid-cols-3 justify-center items-center gap-8'>
        {
          tasks.map((task, index)=> 
          <Task 
          task={task} 
          key={index}>
          </Task>)
        }
      </div>
    </div>
  );
};

export default tasksPage;