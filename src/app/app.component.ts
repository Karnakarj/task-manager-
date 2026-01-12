import { Component } from '@angular/core';
import { TaskBoardComponent } from './components/task-board/task-board.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TaskBoardComponent],
  template: `
    <h1>Task Manager</h1>
    <app-task-board></app-task-board>
  `,
  styles: []
})
export class AppComponent {
  title = 'task-manager';
}
