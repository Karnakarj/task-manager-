import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskBoardComponent } from './components/task-board/task-board.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TaskBoardComponent],
  template: `
    <div class="app-container">
      <header class="app-header">
        <div>
          <p class="eyebrow">Task Manager</p>
          <h1>Keep your work organized</h1>
          <p class="subtitle">Simple Kanban-style board for tracking tasks.</p>
        </div>
      </header>
      <app-task-board></app-task-board>
    </div>
  `,
  styles: [
    `
      .app-container {
        min-height: 100vh;
        padding: 2rem;
        background: radial-gradient(circle at 20% 20%, #f5f8ff, #ffffff);
        color: #1f2937;
        font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      }

      .app-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1.5rem;
      }

      .eyebrow {
        text-transform: uppercase;
        letter-spacing: 0.1em;
        font-size: 0.75rem;
        color: #6366f1;
        font-weight: 700;
        margin: 0 0 0.5rem;
      }

      h1 {
        margin: 0;
        font-size: 2rem;
        color: #111827;
      }

      .subtitle {
        margin: 0.35rem 0 0;
        color: #4b5563;
        max-width: 420px;
      }

      @media (max-width: 768px) {
        .app-container {
          padding: 1.25rem;
        }

        h1 {
          font-size: 1.5rem;
        }
      }
    `
  ]
})
export class AppComponent {}
