// models/Task.ts
export interface Task {
    id: string;
    title: string;
    description: string;
    dueDate: Date;
    importanceLevel: number; // 1-5
  }
  