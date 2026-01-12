import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskService } from './services/task.service';
import { Task, TaskStatus } from './models/task.model';

@Component({
  selector: 'app-root',
  imports: [CommonModule, TaskFormComponent, TaskListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = 'Task Manager';
  protected editingTask = signal<Task | null>(null);

  constructor(protected taskService: TaskService) {}

  onSubmitTask(data: { title: string; description: string }) {
    const editingTask = this.editingTask();
    if (editingTask) {
      this.taskService.updateTask(editingTask.id, {
        title: data.title,
        description: data.description
      });
      this.editingTask.set(null);
    } else {
      this.taskService.addTask(data.title, data.description);
    }
  }

  onEditTask(task: Task) {
    this.editingTask.set(task);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  onDeleteTask(id: string) {
    this.taskService.deleteTask(id);
    if (this.editingTask()?.id === id) {
      this.editingTask.set(null);
    }
  }

  onStatusChange(event: { id: string; status: TaskStatus }) {
    this.taskService.updateTask(event.id, { status: event.status });
  }

  onCancelEdit() {
    this.editingTask.set(null);
  }
}
