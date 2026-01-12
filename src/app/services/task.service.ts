import { Injectable, signal } from '@angular/core';
import { Task, TaskStatus } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private readonly STORAGE_KEY = 'tasks';
  private tasksSignal = signal<Task[]>([]);

  constructor() {
    this.loadTasks();
  }

  getTasks() {
    return this.tasksSignal.asReadonly();
  }

  private loadTasks(): void {
    const tasksJson = localStorage.getItem(this.STORAGE_KEY);
    if (tasksJson) {
      try {
        const tasks = JSON.parse(tasksJson);
        // Convert date strings back to Date objects
        const parsedTasks = tasks.map((task: any) => ({
          ...task,
          createdAt: new Date(task.createdAt),
          updatedAt: new Date(task.updatedAt)
        }));
        this.tasksSignal.set(parsedTasks);
      } catch (error) {
        console.error('Error loading tasks from localStorage:', error);
        this.tasksSignal.set([]);
      }
    }
  }

  private saveTasks(tasks: Task[]): void {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(tasks));
      this.tasksSignal.set(tasks);
    } catch (error) {
      console.error('Error saving tasks to localStorage:', error);
    }
  }

  addTask(title: string, description: string): void {
    const newTask: Task = {
      id: this.generateId(),
      title,
      description,
      status: TaskStatus.TODO,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    const tasks = [...this.tasksSignal(), newTask];
    this.saveTasks(tasks);
  }

  updateTask(id: string, updates: Partial<Task>): void {
    const tasks = this.tasksSignal().map(task =>
      task.id === id
        ? { ...task, ...updates, updatedAt: new Date() }
        : task
    );
    this.saveTasks(tasks);
  }

  deleteTask(id: string): void {
    const tasks = this.tasksSignal().filter(task => task.id !== id);
    this.saveTasks(tasks);
  }

  getTaskById(id: string): Task | undefined {
    return this.tasksSignal().find(task => task.id === id);
  }

  private generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
  }
}
