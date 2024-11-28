export interface Participant {
  name: string;
  engagementLevel: 'Active' | 'Passive' | 'Neutral';
  contributions: string[];
}

export interface Task {
  description: string;
  assignee: string;
  dueDate?: Date;
  priority?: string;
}

export interface TranscriptAnalysis {
  summary: string;
  participants: Participant[];
  tasks: Task[];
}