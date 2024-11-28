import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { Task } from '../../models/transcript.model';
import { TaskCardComponent } from './task-card.component';
import { TaskDialogComponent } from './task-dialog.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, MatButtonModule, TaskCardComponent],
  template: `
    <section class="tasks">
      <div class="header">
        <h2>Action Items</h2>
        <button mat-raised-button color="primary" (click)="openTaskDialog()">
          Add to Azure DevOps
        </button>
      </div>
      <div class="task-list">
        @for (task of tasks; track task.description) {
          <app-task-card 
            [task]="task" 
            (click)="editTask(task)"
          />
        }
      </div>
    </section>
  `,
  styles: [`
    .tasks {
      background: var(--bg-card);
      border-radius: var(--border-radius);
      padding: 24px;
      margin: 20px 0;
    }
    
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 24px;
    }

    .task-list {
      display: grid;
      gap: 16px;
    }

    h2 {
      color: var(--text-primary);
      margin: 0;
    }
  `]
})
export class TasksComponent {
  @Input() tasks: Task[] = [];

  constructor(private dialog: MatDialog) {}

  openTaskDialog(task?: Task) {
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      data: task || null,
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Task data:', result);
        // Handle task creation/update in Azure DevOps
      }
    });
  }

  editTask(task: Task) {
    this.openTaskDialog(task);
  }
}