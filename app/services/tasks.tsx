// services/tasks.ts
import { tasks } from '../data/tasks';
import { Task } from '../models/task';

export const getTaskById = (id: string): Task | undefined => {
  return tasks.find((task) => task.id === id);
};
