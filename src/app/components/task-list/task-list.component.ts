import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task, TaskStatus } from '../../models/task.model';
import { TaskItemComponent } from '../task-item/task-item.component';

@Component({
  selector: 'app-task-list',
  imports: [CommonModule, TaskItemComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  @Input({ required: true }) tasks!: Task[];
  @Output() editTask = new EventEmitter<Task>();
  @Output() deleteTask = new EventEmitter<string>();
  @Output() statusChange = new EventEmitter<{ id: string; status: TaskStatus }>();

  onEditTask(task: Task) {
    this.editTask.emit(task);
  }

  onDeleteTask(id: string) {
    this.deleteTask.emit(id);
  }

  onStatusChange(event: { id: string; status: TaskStatus }) {
    this.statusChange.emit(event);
  }
}
