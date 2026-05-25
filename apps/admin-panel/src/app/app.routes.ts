import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'knowledge', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./pages/dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),
  },
  // {
  //   path: 'knowledge',
  //   // Вместо loadComponent используем loadChildren для подтягивания всех маршрутов либы
  //   loadChildren: () =>
  //     import('@ng-highcharts/knowledge-base').then(
  //       (m) => m.knowledgeBaseRoutes
  //     ),
  // },
];
