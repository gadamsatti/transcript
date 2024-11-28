import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe],
  template: `
    <div class="app-container">
      <button 
        class="mode-toggle" 
        (click)="themeService.toggleTheme()"
      >
        {{ (themeService.isDarkMode$ | async) ? 'Light' : 'Dark' }} Mode
      </button>
      
      <h1>Teams Transcript Analysis</h1>
      
      <router-outlet />
    </div>
  `,
  styles: [`
    .app-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 40px 20px;
      position: relative;
    }

    h1 {
      font-size: 2.5rem;
      color: var(--accent-purple);
      margin-bottom: 40px;
      text-align: center;
    }

    .mode-toggle {
      position: absolute;
      top: 20px;
      right: 20px;
      padding: 8px 16px;
      background: var(--bg-card);
      border: 1px solid var(--text-secondary);
      border-radius: var(--border-radius);
      color: var(--text-primary);
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .mode-toggle:hover {
      background: var(--accent-purple);
      color: white;
      border-color: var(--accent-purple);
    }

    @media (max-width: 768px) {
      h1 {
        font-size: 2rem;
      }
    }
  `]
})
export class AppComponent {
  constructor(public themeService: ThemeService) {}
}