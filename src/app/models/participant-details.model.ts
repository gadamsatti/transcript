export interface KPI {
  name: string;
  value: number;
  trend: 'up' | 'down' | 'stable';
  description: string;
}

export interface ParticipantDetails {
  id: string;
  name: string;
  kpis: KPI[];
  todayContributions: string[];
  historicalKPIs: {
    date: Date;
    kpis: KPI[];
  }[];
}