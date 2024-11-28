import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ParticipantDetailsComponent } from './components/participant-details/participant-details.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'participant/:id', component: ParticipantDetailsComponent },
  { path: '**', redirectTo: '' }
];