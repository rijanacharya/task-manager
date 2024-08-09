'use client';
import Link from "next/link";
import { Task } from "../models/task";
import { format } from 'date-fns';
import ClickFunction from './clickFuntion';


// Single component for task details
interface TaskDetailsProps {
  task: Task;
}

export default function TaskDetails({
  task
}: TaskDetailsProps) {
  return (
    <li key={task.id} className="flex items-center justify-between bg-white rounded-lg shadow-md p-4">
      <Link href={`/tasks/${task.id}`}>
        <div className="flex items-center">
          <span className={`text-${task.importanceLevel * 100} bg-${task.importanceLevel * 100}-200 p-2 rounded-full`}>
            {task.importanceLevel}
          </span>
          <span className="ml-2 text-lg font-medium sm:text-xl">{task.title}</span>
        </div>
      </Link>
      <span className="text-gray-500">{format(task.dueDate, 'MMMM d, yyyy')}</span>
      <div className="flex space-x-2"> {/* Container for buttons */}
        <ClickFunction task={task} />
      </div>
    </li>
  );
}
