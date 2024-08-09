// data/tasks.ts
import { Task } from '../models/task';

export const tasks: Task[] = [
  {
    id: '1',
    title: 'Complete project proposal',
    description: 'Write a detailed project proposal for the new client.',
    dueDate: new Date('2024-09-15'),
    importanceLevel: 4,
  },
  {
    id: '2',
    title: 'Attend weekly team meeting',
    description: 'Discuss project progress and assign tasks.',
    dueDate: new Date('2024-08-12'),
    importanceLevel: 3,
  },
  {
    id: '3',
    title: 'Learn new programming language',
    description: 'Master the basics of Python.',
    dueDate: new Date('2024-11-30'),
    importanceLevel: 2,
  },
];
