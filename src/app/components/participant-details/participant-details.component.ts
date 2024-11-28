import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ParticipantDetails, KPI } from '../../models/participant-details.model';

@Component({
  selector: 'app-participant-details',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatDialogModule],
  template: `
    <div class="participant-details">
      <h1>{{ participant.name }}</h1>
      
      <section class="kpi-grid">
        @for (kpi of participant.kpis; track kpi.name) {
          <div class="kpi-card">
            <h3>{{ kpi.name }}</h3>
            <div class="kpi-value">
              {{ kpi.value }}
              <span class="trend" [class]="kpi.trend">
                {{ kpi.trend === 'up' ? '↑' : kpi.trend === 'down' ? '↓' : '→' }}
              </span>
            </div>
            <p class="description">{{ kpi.description }}</p>
          </div>
        }
      </section>

      <section class="contributions">
        <h2>Today's Contributions</h2>
        <ul>
          @for (contribution of participant.todayContributions; track contribution) {
            <li>{{ contribution }}</li>
          }
        </ul>
      </section>

      <section class="historical-data">
        <h2>Historical Performance</h2>
        <!-- Add historical chart here -->
      </section>
    </div>
  `,
  styles: [`
    .participant-details {
      padding: 24px;
      max-width: 1200px;
      margin: 0 auto;
    }

    .kpi-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      margin: 24px 0;
    }

    .kpi-card {
      background: var(--bg-card);
      border-radius: var(--border-radius);
      padding: 20px;
    }

    .kpi-value {
      font-size: 2em;
      font-weight: bold;
      margin: 12px 0;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .trend {
      font-size: 0.7em;
      padding: 4px 8px;
      border-radius: 4px;
    }

    .trend.up { color: #4caf50; }
    .trend.down { color: #f44336; }
    .trend.stable { color: #ff9800; }

    .description {
      color: var(--text-secondary);
      font-size: 0.9em;
    }

    .contributions {
      background: var(--bg-card);
      border-radius: var(--border-radius);
      padding: 24px;
      margin: 24px 0;
    }

    .contributions ul {
      list-style: none;
      padding: 0;
    }

    .contributions li {
      padding: 12px 0;
      border-bottom: 1px solid var(--text-secondary);
    }

    .contributions li:last-child {
      border-bottom: none;
    }
  `]
})
export class ParticipantDetailsComponent implements OnInit {
  participant: ParticipantDetails = {
    id: '1',
    name: 'Sarah Johnson',
    kpis: [
      {
        name: 'Engagement Score',
        value: 85,
        trend: 'up',
        description: 'Overall meeting participation and interaction level'
      },
      {
        name: 'Contribution Rate',
        value: 92,
        trend: 'stable',
        description: 'Frequency and quality of meeting contributions'
      },
      {
        name: 'Task Completion',
        value: 78,
        trend: 'down',
        description: 'Percentage of assigned tasks completed on time'
      },
      {
        name: 'Team Collaboration',
        value: 88,
        trend: 'up',
        description: 'Effectiveness in team discussions and problem-solving'
      },
      {
        name: 'Meeting Attendance',
        value: 95,
        trend: 'stable',
        description: 'Percentage of meetings attended'
      },
      {
        name: 'Initiative Score',
        value: 82,
        trend: 'up',
        description: 'Proactiveness in discussions and task ownership'
      }
    ],
    todayContributions: [
      'Presented Q4 results overview',
      'Proposed new marketing campaign strategy',
      'Shared insights on customer feedback',
      'Led discussion on team objectives'
    ],
    historicalKPIs: []
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      // Fetch participant details using id
    });
  }
}