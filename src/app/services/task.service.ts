import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Task, TaskStatus } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private readonly tasksSubject = new BehaviorSubject<Task[]>([
    {
      id: 1,
      title: 'Wireframe landing page',
      description: 'Create initial wireframes for marketing site',
      assignee: 'Alex',
      priority: 'high',
      status: 'backlog',
      dueDate: '2026-02-01'
    },
    {
      id: 2,
      title: 'API contract review',
      description: 'Review task endpoints with backend team',
      assignee: 'Jordan',
      priority: 'medium',
      status: 'in-progress',
      dueDate: '2026-01-20'
    },
    {
      id: 3,
      title: 'Implement drag and drop',
      description: 'Enable moving cards between columns',
      assignee: 'Taylor',
      priority: 'low',
      status: 'review',
      dueDate: '2026-02-10'
    },
    {
      id: 4,
      title: 'Polish UI states',
      description: 'Add hover and focus styles to cards',
      assignee: 'Riley',
      priority: 'medium',
      status: 'done',
      dueDate: '2026-01-05'
    }
  ]);

  readonly tasks$ = this.tasksSubject.asObservable();

  getTasksByStatus(status: TaskStatus): Observable<Task[]> {
    return this.tasks$.pipe(map((tasks) => tasks.filter((task) => task.status === status)));
  }

  updateTaskStatus(taskId: number, status: TaskStatus): void {
    const updated = this.tasksSubject.getValue().map((task) =>
      task.id === taskId ? { ...task, status } : task
    );
    this.tasksSubject.next(updated);
  }

  addTask(task: Task): void {
    const tasks = this.tasksSubject.getValue();
    const nextId = tasks.length ? Math.max(...tasks.map((t) => t.id)) + 1 : 1;
    this.tasksSubject.next([...tasks, { ...task, id: nextId }]);
  }
}
