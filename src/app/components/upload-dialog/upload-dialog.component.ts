import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-upload-dialog',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule
  ],
  template: `
    <h2 mat-dialog-title>Upload Meeting Transcript</h2>
    <mat-dialog-content>
      <div class="upload-form">
        <mat-form-field appearance="fill">
          <mat-label>Meeting Date</mat-label>
          <input matInput [matDatepicker]="picker" [(ngModel)]="meetingDate">
          <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
          <mat-datepicker #picker></mat-datepicker>
        </mat-form-field>

        <div class="file-upload">
          <label>Transcript File</label>
          <input type="file" (change)="onTranscriptFileSelected($event)" accept=".txt,.doc,.docx">
        </div>

        <div class="file-upload">
          <label>Participant List</label>
          <input type="file" (change)="onParticipantListSelected($event)" accept=".txt,.csv">
        </div>
      </div>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>Cancel</button>
      <button mat-raised-button color="primary" (click)="submit()" [disabled]="!isValid">
        Submit
      </button>
    </mat-dialog-actions>
  `,
  styles: [`
    .upload-form {
      display: flex;
      flex-direction: column;
      gap: 20px;
      min-width: 400px;
      padding: 20px 0;
    }

    .file-upload {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .file-upload label {
      color: var(--text-secondary);
      font-size: 0.9em;
    }
  `]
})
export class UploadDialogComponent {
  meetingDate: Date = new Date();
  transcriptFile?: File;
  participantListFile?: File;

  constructor(private dialogRef: MatDialogRef<UploadDialogComponent>) {}

  onTranscriptFileSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.transcriptFile = file;
    }
  }

  onParticipantListSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.participantListFile = file;
    }
  }

  get isValid(): boolean {
    return !!this.meetingDate && !!this.transcriptFile && !!this.participantListFile;
  }

  submit() {
    if (this.isValid) {
      this.dialogRef.close({
        date: this.meetingDate,
        transcriptFile: this.transcriptFile,
        participantListFile: this.participantListFile
      });
    }
  }
}