import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="summary">
      <h2>Meeting Summary</h2>
      <div class="summary-content">
        <p>{{ summary }}</p>
      </div>
    </section>
  `,
  styles: [`
    .summary {
      background: var(--bg-card);
      border-radius: var(--border-radius);
      padding: 24px;
      margin: 20px 0;
    }

    .summary-content {
      background: var(--bg-dark);
      border-radius: var(--border-radius);
      padding: 20px;
      margin-top: 16px;
    }

    h2 {
      color: var(--text-primary);
      margin-bottom: 16px;
    }

    p {
      color: var(--text-secondary);
      line-height: 1.6;
    }
  `]
})
export class SummaryComponent {
  @Input() summary: string = '';
}