import { TranscriptAnalysis, Participant, Task } from '../models/transcript.model';

export const dummyParticipants: Participant[] = [
  {
    name: 'Sarah Johnson',
    engagementLevel: 'Active',
    contributions: [
      'Presented Q4 results',
      'Discussed marketing strategy',
      'Proposed new campaign ideas'
    ]
  },
  {
    name: 'Michael Chen',
    engagementLevel: 'Passive',
    contributions: [
      'Provided feedback on design',
      'Asked about timeline'
    ]
  },
  {
    name: 'Emily Rodriguez',
    engagementLevel: 'Active',
    contributions: [
      'Led technical discussion',
      'Shared project updates',
      'Answered team questions',
      'Proposed solutions'
    ]
  },
  {
    name: 'David Kim',
    engagementLevel: 'Neutral',
    contributions: [
      'Shared department updates',
      'Responded to queries'
    ]
  }
];

export const dummyTasks: Task[] = [
  {
    description: 'Create marketing campaign proposal',
    assignee: 'Sarah Johnson',
    dueDate: new Date('2024-02-15'),
    priority: 'High'
  },
  {
    description: 'Review Q1 design mockups',
    assignee: 'Michael Chen',
    dueDate: new Date('2024-02-10'),
    priority: 'Medium'
  },
  {
    description: 'Update technical documentation',
    assignee: 'Emily Rodriguez',
    dueDate: new Date('2024-02-20'),
    priority: 'Low'
  },
  {
    description: 'Schedule team training session',
    assignee: 'David Kim',
    dueDate: new Date('2024-02-12'),
    priority: 'Medium'
  }
];

export const dummyAnalysis: TranscriptAnalysis = {
  summary: 'In this quarterly planning meeting, the team discussed Q4 results and outlined strategies for Q1 2024. Key points included marketing campaign proposals, design review processes, and technical documentation updates. Sarah presented the Q4 performance metrics, while Emily led the technical discussion segment. The team agreed on several action items with specific deadlines. Meeting engagement was notably high, with active participation from most team members. Several key decisions were made regarding project timelines and resource allocation.',
  participants: dummyParticipants,
  tasks: dummyTasks
};