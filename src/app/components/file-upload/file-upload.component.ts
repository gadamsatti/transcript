import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { UploadDialogComponent } from '../upload-dialog/upload-dialog.component';

@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [MatButtonModule],
  template: `
    <div class="upload-container">
      <button mat-raised-button color="primary" (click)="openUploadDialog()">
        Upload Transcript
      </button>
    </div>
  `,
  styles: [`
    .upload-container {
      background: var(--bg-card);
      border-radius: var(--border-radius);
      padding: 24px;
      text-align: center;
    }
  `]
})
export class FileUploadComponent {
  constructor(private dialog: MatDialog) {}

  openUploadDialog() {
    const dialogRef = this.dialog.open(UploadDialogComponent, {
      width: '500px',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Upload data:', result);
        // Handle the upload result
      }
    });
  }
}