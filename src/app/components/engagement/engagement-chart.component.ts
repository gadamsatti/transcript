import { Component, Input, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { Participant } from '../../models/transcript.model';

Chart.register(...registerables);

@Component({
  selector: 'app-engagement-chart',
  standalone: true,
  template: `
    <div class="chart-container">
      <canvas #chartCanvas></canvas>
    </div>
  `,
  styles: [`
    .chart-container {
      height: 200px;
      margin: 20px 0;
      background: rgba(123, 104, 238, 0.1);
      border-radius: var(--border-radius);
      padding: 16px;
    }
  `]
})
export class EngagementChartComponent implements AfterViewInit, OnDestroy {
  @Input() participants: Participant[] = [];
  @ViewChild('chartCanvas') chartCanvas!: ElementRef<HTMLCanvasElement>;
  private chart?: Chart;

  ngAfterViewInit() {
    if (this.participants.length > 0) {
      this.createChart();
    }
  }

  ngOnDestroy() {
    if (this.chart) {
      this.chart.destroy();
    }
  }

  private createChart() {
    const canvas = this.chartCanvas.nativeElement;
    const ctx = canvas.getContext('2d');
    
    if (ctx) {
      this.chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: this.participants.map(p => p.name),
          datasets: [{
            label: 'Contributions',
            data: this.participants.map(p => p.contributions.length),
            backgroundColor: 'rgba(123, 104, 238, 0.6)',
            borderColor: 'rgba(123, 104, 238, 1)',
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              grid: {
                color: 'rgba(255, 255, 255, 0.1)'
              },
              ticks: {
                color: 'rgba(255, 255, 255, 0.7)'
              }
            },
            x: {
              grid: {
                display: false
              },
              ticks: {
                color: 'rgba(255, 255, 255, 0.7)'
              }
            }
          }
        }
      });
    }
  }
}