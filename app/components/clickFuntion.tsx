'use client';
import { Task } from '../models/task';
import { FaEdit as EditIcon, FaTrash as DeleteIcon, FaCheck as CheckIcon } from 'react-icons/fa';


import React from 'react'
interface Props {
    task: Task; // or the appropriate type
  }
const clickFuntion: React.FC<Props> = ({ task })  => {
    function onEditClick(taskId: string): void {
        console.log('Edit task:', taskId);
    }
    
    function onDeleteClick(taskId: string): void {
        console.log('Delete task:', taskId);
    }
    
    function onMarkCompleted(taskId: string): void {
        console.log('Mark task completed:', taskId);
    }



   

  return (
    <>
    <button
          className="text-blue-500 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          onClick={() => onEditClick(task.id)}
        >
          <EditIcon className="h-5 w-5" />
        </button>
        <button
          className="text-red-500 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          onClick={() => onDeleteClick(task.id)}
        >
          <DeleteIcon className="h-5 w-5" />
        </button>
         {/* <button
          className="text-green-500 hover:text-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          onClick={() => onMarkCompleted(task.taskId)}
        >
          <CheckIcon className="h-5 w-5" />
        </button>  */}
        </>
  )
}

export default clickFuntion
