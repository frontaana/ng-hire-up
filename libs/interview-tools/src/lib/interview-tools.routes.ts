import { provideHttpClient } from '@angular/common/http';
import { Routes } from '@angular/router';

export const INTERVIEW_TOOLS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./main-dashboard/main-dashboard.component').then((m) => m.MainDashboardComponent),
    providers: [
      provideHttpClient() // 2. Этот HttpClient будет доступен для всех дочерних роутов либы!
    ],
    children: [
      {
        path: '',
        redirectTo: 'resume-screener',
        pathMatch:'full',
      },
      {
        path: 'resume-screener',
        title: 'Hire-Up | Скрининг резюме',
        loadComponent: () => import('./resume-screener/components/resume-screener-page/resume-screener-page.component').then((m) => m.ResumeScreenerPageComponent),
      },
      {
        path: 'contract-screener',
        title: 'Hire-Up | Скрининг договора',
        loadComponent: () => import('./contract-screener/components/contract-screener-page/contract-screener-page.component').then((m) => m.ContractScreenerPageComponent),
      },
      {
        path: 'mock-interview',
        title: 'Hire-Up | Мок-интервью',
        loadComponent: () => import('./mock-interview/mock-interview.component').then((m) => m.MockInterviewComponent),
        children: [
          {
            path: '',
            redirectTo: 'knowledge-base',
            pathMatch: 'full',
          },
          {
            path: 'knowledge-base',
            loadChildren: () => import('@ng-hire-up/knowledge-base').then(m => m.KNOWLEDGE_BASE_ROUTES)
          }
        ]
      }
    ]
  },
];
