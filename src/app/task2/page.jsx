import AddTask2 from '@/components/addTask/AddTask2';
import TaskPost from '@/components/task/TaskPost';
import { addingTask } from '@/lib/serverAction';
import { getTask2 } from '@/lib/task2';
import React from 'react';

const Task2Page = async() => {
  const task2Posts = await getTask2() 
  return (
    <div className='max-w-300 mx-auto mt-8'>
      <div className='flex justify-center mb-5'>
        <AddTask2 addingTask={addingTask}></AddTask2>
      </div>
      <div className='grid grid-cols-3 justify-center items-center gap-8'>
        {
        task2Posts.map((task2Post, index)=> 
        <TaskPost task2Post={task2Post} key={index}>

        </TaskPost>)
      }
      </div>
    </div>
  );
};

export default Task2Page;