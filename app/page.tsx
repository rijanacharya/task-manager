import Image from "next/image";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Link from "next/link";
import TaskDetails from "./components/singleTask";
import { Task } from "./models/task";

export default async function Home() {{

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
}
