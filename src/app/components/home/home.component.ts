import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { FileUploadComponent } from '../file-upload/file-upload.component';
import { SummaryComponent } from '../summary/summary.component';
import { EngagementComponent } from '../engagement/engagement.component';
import { TasksComponent } from '../tasks/tasks.component';
import { ThemeService } from '../../services/theme.service';
import { TranscriptAnalysis } from '../../models/transcript.model';
import { dummyAnalysis } from '../../data/dummy-data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    AsyncPipe,
    FileUploadComponent,
    SummaryComponent,
    EngagementComponent,
    TasksComponent
  ],
  template: `
    <div class="content-grid">
      <app-file-upload />
      <app-summary [summary]="analysis.summary" />
      <app-engagement [participants]="analysis.participants" />
      <app-tasks [tasks]="analysis.tasks" />
    </div>
  `,
  styles: [`
    .content-grid {
      display: grid;
      gap: 24px;
    }
  `]
})
export class HomeComponent {
  analysis: TranscriptAnalysis = dummyAnalysis;
}