import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../models/transcript.model';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="task-card" [class]="task.priority?.toLowerCase()">
      <h3>{{ task.description }}</h3>
      <div class="task-details">
        <div class="detail">
          <span class="label">Assignee</span>
          <span class="value">{{ task.assignee }}</span>
        </div>
        @if (task.dueDate) {
          <div class="detail">
            <span class="label">Due Date</span>
            <span class="value">{{ task.dueDate | date:'mediumDate' }}</span>
          </div>
        }
        @if (task.priority) {
          <div class="detail">
            <span class="label">Priority</span>
            <span class="value priority-badge" [class]="task.priority.toLowerCase()">
              {{ task.priority }}
            </span>
          </div>
        }
      </div>
    </div>
  `,
  styles: [`
    .task-card {
      background: var(--bg-dark);
      border-radius: var(--border-radius);
      padding: 20px;
      border-left: 4px solid var(--accent-purple);
      cursor: pointer;
      transition: transform 0.2s ease;
    }

    .task-card:hover {
      transform: translateY(-2px);
    }

    .task-details {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 16px;
      margin-top: 16px;
    }

    .detail {
      display: flex;
      flex-direction: column;
    }

    .label {
      color: var(--text-secondary);
      font-size: 0.9em;
    }

    .value {
      color: var(--text-primary);
      font-weight: 500;
      margin-top: 4px;
    }

    .priority-badge {
      display: inline-block;
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 0.8em;
      text-transform: uppercase;
    }

    .high { 
      border-left-color: #f44336;
      .priority-badge { background: rgba(244, 67, 54, 0.1); color: #f44336; }
    }
    
    .medium { 
      border-left-color: #ff9800;
      .priority-badge { background: rgba(255, 152, 0, 0.1); color: #ff9800; }
    }
    
    .low { 
      border-left-color: #4caf50;
      .priority-badge { background: rgba(76, 175, 80, 0.1); color: #4caf50; }
    }
  `]
})
export class TaskCardComponent {
  @Input() task!: Task;
}