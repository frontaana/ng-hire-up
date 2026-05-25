import { Routes } from '@angular/router';

export const INTERVIEW_TOOLS_ROUTES: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'resume-screener',
        pathMatch: 'full',
      },
      {
        path: 'resume-screener',
        title: 'Hire-Up | Скрининг резюме',
        loadComponent: () => import('./resume-screener/resume-screener.component').then((m) => m.ResumeScreenerComponent),
      },
      {
        path: 'mock-interview',
        title: 'Hire-Up | Мок-интервью',
        loadComponent: () => import('./mock-interview/mock-interview.component').then((m) => m.MockInterviewComponent),
      }
    ]
  },

];