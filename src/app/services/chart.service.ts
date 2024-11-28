import { Injectable } from '@angular/core';
import { Chart, ChartConfiguration } from 'chart.js';
import { Participant } from '../models/transcript.model';

@Injectable({
  providedIn: 'root'
})
export class ChartService {
  createEngagementChart(canvas: HTMLCanvasElement, participants: Participant[]): Chart {
    const data = {
      labels: participants.map(p => p.name),
      datasets: [{
        label: 'Contributions',
        data: participants.map(p => p.contributions.length),
        backgroundColor: 'rgba(123, 104, 238, 0.6)',
        borderColor: 'rgba(123, 104, 238, 1)',
        borderWidth: 1
      }]
    };

    const config: ChartConfiguration = {
      type: 'line',
      data,
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    };

    return new Chart(canvas, config);
  }
}