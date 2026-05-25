import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'knowledge-base',
    pathMatch: 'full'
  },
  {
    path: 'knowledge-base',
    loadChildren: () => import('@ng-highcharts/knowledge-base').then(m => m.KNOWLEDGE_BASE_ROUTES)
  },
  {
    path: 'tools',
    loadChildren: () => import('@ng-highcharts/interview-tools').then(m => m.INTERVIEW_TOOLS_ROUTES)
  }
  // {
  //   path: 'tools',
  //   loadChildren: () => 
  //     import('@ng-highcharts/interview-tools').then(m => m.INTERVIEW_TOOLS_ROUTES)
  // }
];
