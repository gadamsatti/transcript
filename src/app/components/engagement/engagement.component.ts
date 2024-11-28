import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Participant } from '../../models/transcript.model';
import { EngagementChartComponent } from './engagement-chart.component';

@Component({
  selector: 'app-engagement',
  standalone: true,
  imports: [CommonModule, RouterModule, EngagementChartComponent],
  template: `
    <section class="engagement">
      <h2>Meeting Engagement Overview</h2>
      <app-engagement-chart [participants]="participants" />
      <div class="participants">
        @for (participant of participants; track participant.name) {
          <div 
            class="participant-card" 
            [class]="participant.engagementLevel.toLowerCase()"
            [routerLink]="['/participant', participant.name]"
          >
            <h3>{{ participant.name }}</h3>
            <div class="engagement-stats">
              <div class="stat">
                <span class="label">Engagement</span>
                <span class="value">{{ participant.engagementLevel }}</span>
              </div>
              <div class="stat">
                <span class="label">Contributions</span>
                <span class="value">{{ participant.contributions.length }}</span>
              </div>
            </div>
          </div>
        }
      </div>
    </section>
  `,
  styles: [`
    .engagement {
      background: var(--bg-card);
      border-radius: var(--border-radius);
      padding: 24px;
      margin: 20px 0;
    }

    .participants {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 20px;
      margin-top: 20px;
    }

    .participant-card {
      background: var(--bg-dark);
      border-radius: var(--border-radius);
      padding: 20px;
      border-left: 4px solid transparent;
      cursor: pointer;
      transition: transform 0.2s ease;
    }

    .participant-card:hover {
      transform: translateY(-2px);
    }

    .engagement-stats {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
      margin-top: 16px;
    }

    .stat {
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

    .active { border-left-color: #4CAF50; }
    .passive { border-left-color: #FFC107; }
    .neutral { border-left-color: #9E9E9E; }
  `]
})
export class EngagementComponent {
  @Input() participants: Participant[] = [];
}