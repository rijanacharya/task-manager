// pages/tasks/[id].tsximport { useRouter } from 'next/router';

import Link from 'next/link';
import { format } from 'date-fns';

import { Task } from '../models/task';
import TaskDetails from '../components/singleTask';
export default async function Page() {

  const tasks = await fetch(`http://localhost:5000/api/tasks`)
  .then(response => response.json())
  .then(data => data);

  

  return (


<div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4 text-center">All Tasks</h1>
        <ul className="space-y-4">
          {tasks.map((task: Task) => (
            <TaskDetails key={task.id} task={task} />
          ))}
        </ul>
      </div>
   )
    
  };
