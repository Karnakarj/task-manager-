import { Injectable, signal } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks = signal<Task[]>([
    {
      id: 1,
      title: 'Setup Project',
      description: 'Initialize Angular project with required dependencies',
      status: 'done',
      priority: 'high',
      createdAt: new Date('2024-01-01')
    },
    {
      id: 2,
      title: 'Create Components',
      description: 'Build task board and task card components',
      status: 'in-progress',
      priority: 'high',
      createdAt: new Date('2024-01-02')
    },
    {
      id: 3,
      title: 'Add Styling',
      description: 'Style the application with modern CSS',
      status: 'todo',
      priority: 'medium',
      createdAt: new Date('2024-01-03')
    }
  ]);

  getTasks() {
    return this.tasks.asReadonly();
  }

  addTask(task: Omit<Task, 'id' | 'createdAt'>) {
    const maxId = this.tasks().reduce((max, task) => Math.max(max, task.id), 0);
    const newTask: Task = {
      ...task,
      id: maxId + 1,
      createdAt: new Date()
    };
    this.tasks.update(tasks => [...tasks, newTask]);
  }

  updateTask(id: number, updates: Partial<Task>) {
    this.tasks.update(tasks =>
      tasks.map(task => task.id === id ? { ...task, ...updates } : task)
    );
  }

  deleteTask(id: number) {
    this.tasks.update(tasks => tasks.filter(task => task.id !== id));
  }

  updateTaskStatus(id: number, status: Task['status']) {
    this.updateTask(id, { status });
  }
}
