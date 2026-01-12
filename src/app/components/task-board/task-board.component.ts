import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../services/task.service';
import { TaskCardComponent } from '../task-card/task-card.component';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-board',
  standalone: true,
  imports: [CommonModule, TaskCardComponent],
  templateUrl: './task-board.component.html',
  styleUrl: './task-board.component.css'
})
export class TaskBoardComponent {
  private taskService = inject(TaskService);
  
  tasks = this.taskService.getTasks();

  todoTasks = computed(() => 
    this.tasks().filter(task => task.status === 'todo')
  );

  inProgressTasks = computed(() => 
    this.tasks().filter(task => task.status === 'in-progress')
  );

  doneTasks = computed(() => 
    this.tasks().filter(task => task.status === 'done')
  );

  onStatusChange(taskId: number, newStatus: Task['status']) {
    this.taskService.updateTaskStatus(taskId, newStatus);
  }

  onDeleteTask(taskId: number) {
    this.taskService.deleteTask(taskId);
  }
}
