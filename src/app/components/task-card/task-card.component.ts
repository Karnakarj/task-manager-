import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css']
})
export class TaskCardComponent {
  @Input() task!: Task;

  get priorityLabel(): string {
    switch (this.task.priority) {
      case 'high':
        return 'High';
      case 'medium':
        return 'Medium';
      case 'low':
      default:
        return 'Low';
    }
  }
}
