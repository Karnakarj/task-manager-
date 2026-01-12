import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Task, TaskStatus } from '../../models/task.model';
import { TaskService } from '../../services/task.service';
import { TaskCardComponent } from '../task-card/task-card.component';

@Component({
  selector: 'app-task-board',
  standalone: true,
  imports: [CommonModule, TaskCardComponent],
  templateUrl: './task-board.component.html',
  styleUrls: ['./task-board.component.css']
})
export class TaskBoardComponent {
  readonly statuses: TaskStatus[] = ['backlog', 'in-progress', 'review', 'done'];
  readonly tasks$ = this.taskService.tasks$;

  constructor(private readonly taskService: TaskService) {}

  statusLabel(status: TaskStatus): string {
    switch (status) {
      case 'backlog':
        return 'Backlog';
      case 'in-progress':
        return 'In Progress';
      case 'review':
        return 'In Review';
      case 'done':
        return 'Done';
    }
  }

  getTasksForStatus(tasks: Task[], status: TaskStatus): Task[] {
    return tasks.filter((task) => task.status === status);
  }
}
