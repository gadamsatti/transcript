import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TranscriptAnalysis } from '../models/transcript.model';

@Injectable()
export class PerplexityService {
  private apiUrl = 'YOUR_PERPLEXITY_API_URL';

  constructor(private http: HttpClient) {}

  analyzeTranscript(transcript: string): Observable<TranscriptAnalysis> {
    return this.http.post<TranscriptAnalysis>(`${this.apiUrl}/analyze`, { transcript });
  }
}