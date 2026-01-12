import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent implements OnInit {
  @Input() task: Task | null = null;
  @Output() submitTask = new EventEmitter<{ title: string; description: string }>();
  @Output() cancel = new EventEmitter<void>();

  title = '';
  description = '';

  ngOnInit() {
    if (this.task) {
      this.title = this.task.title;
      this.description = this.task.description;
    }
  }

  onSubmit() {
    if (this.title.trim()) {
      this.submitTask.emit({
        title: this.title.trim(),
        description: this.description.trim()
      });
      this.resetForm();
    }
  }

  onCancel() {
    this.resetForm();
    this.cancel.emit();
  }

  private resetForm() {
    this.title = '';
    this.description = '';
  }
}
