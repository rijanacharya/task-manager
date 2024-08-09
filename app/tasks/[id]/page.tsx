// pages/tasks/[id].tsximport { useRouter } from 'next/router';
import { getTaskById } from '../../services/tasks' ; // Replace with your data fetching function
import { Task } from '../../models/task';
export default async function Page({ params }: { params: { id: string } }) {
    const { id } = params;

  const task = await fetch(`http://localhost:5000/api/tasks/${id}`)
  .then(response => response.json())
  .then(data => data);

  

  return (
    <>

    <div>
        <h1>{task.title}</h1>
        <p>{task.description}</p>
        <p>Due Date: {task.dueDate}</p>
        <p>Importance Level: {task.importanceLevel}</p>
    </div>
    </>
   )
    
  };
