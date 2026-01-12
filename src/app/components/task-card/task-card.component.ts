import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.css'
})
export class TaskCardComponent {
  @Input() task!: Task;
  @Output() statusChange = new EventEmitter<{ id: number; status: Task['status'] }>();
  @Output() deleteTask = new EventEmitter<number>();

  onStatusChange(newStatus: Task['status']) {
    this.statusChange.emit({ id: this.task.id, status: newStatus });
  }

  onDelete() {
    this.deleteTask.emit(this.task.id);
  }

  getPriorityClass(): string {
    return `priority-${this.task.priority}`;
  }
}
