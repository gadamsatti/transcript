import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { Task } from '../../models/transcript.model';

@Component({
  selector: 'app-task-dialog',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatButtonModule
  ],
  template: `
    <h2 mat-dialog-title>{{ data ? 'Edit Task' : 'Add to Azure DevOps' }}</h2>
    <mat-dialog-content>
      <div class="task-form">
        <mat-form-field appearance="fill">
          <mat-label>Description</mat-label>
          <textarea matInput [(ngModel)]="task.description" required></textarea>
        </mat-form-field>

        <mat-form-field appearance="fill">
          <mat-label>Assignee</mat-label>
          <input matInput [(ngModel)]="task.assignee" required>
        </mat-form-field>

        <mat-form-field appearance="fill">
          <mat-label>Due Date</mat-label>
          <input matInput [matDatepicker]="picker" [(ngModel)]="task.dueDate">
          <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
          <mat-datepicker #picker></mat-datepicker>
        </mat-form-field>

        <mat-form-field appearance="fill">
          <mat-label>Priority</mat-label>
          <mat-select [(ngModel)]="task.priority" required>
            <mat-option value="High">High</mat-option>
            <mat-option value="Medium">Medium</mat-option>
            <mat-option value="Low">Low</mat-option>
          </mat-select>
        </mat-form-field>
      </div>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>Cancel</button>
      <button mat-raised-button color="primary" (click)="submit()" [disabled]="!isValid">
        {{ data ? 'Update' : 'Add to Azure' }}
      </button>
    </mat-dialog-actions>
  `,
  styles: [`
    .task-form {
      display: flex;
      flex-direction: column;
      gap: 16px;
      min-width: 400px;
      padding: 16px 0;
    }
  `]
})
export class TaskDialogComponent {
  task: Task;

  constructor(
    private dialogRef: MatDialogRef<TaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Task | null
  ) {
    this.task = data ? { ...data } : {
      description: '',
      assignee: '',
      dueDate: new Date(),
      priority: 'Medium'
    };
  }

  get isValid(): boolean {
    return !!(this.task.description && this.task.assignee && this.task.priority);
  }

  submit() {
    if (this.isValid) {
      this.dialogRef.close(this.task);
    }
  }
}