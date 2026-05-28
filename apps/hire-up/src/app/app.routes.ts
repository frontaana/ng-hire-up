import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'tools',
    pathMatch: 'full'
  },
  {
    path: 'knowledge-base',
    loadChildren: () => import('@ng-hire-up/knowledge-base').then(m => m.KNOWLEDGE_BASE_ROUTES)
  },
  {
    path: 'tools',
    loadChildren: () => import('@ng-hire-up/interview-tools').then(m => m.INTERVIEW_TOOLS_ROUTES)
  }
  // {
  //   path: 'tools',
  //   loadChildren: () => 
  //     import('@ng-hire-up/interview-tools').then(m => m.INTERVIEW_TOOLS_ROUTES)
  // }
];
