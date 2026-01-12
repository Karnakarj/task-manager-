export type TaskStatus = 'backlog' | 'in-progress' | 'review' | 'done';

export interface Task {
  id: number;
  title: string;
  description?: string;
  assignee?: string;
  priority?: 'low' | 'medium' | 'high';
  status: TaskStatus;
  dueDate?: string;
}
