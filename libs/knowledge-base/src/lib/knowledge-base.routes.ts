import { Routes } from '@angular/router';
import { KnowledgeBaseComponent } from './components/knowledge-base/knowledge-base.component';
import { KnowledgeBaseStore } from './store/knowledge-base.store';

export const knowledgeBaseRoutes: Routes = [
  {
    path: '',
    component: KnowledgeBaseComponent,
    // Регистрируем стор здесь, делая его общим для всей ветки роутов
    providers: [KnowledgeBaseStore],
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      {
        path: 'list',
        loadComponent: () =>
          import('./components/article-list/article-list.component').then(
            (m) => m.ArticleListComponent
          ),
      },
      {
        path: 'add',
        loadComponent: () =>
          import('./components/article-form/article-form.component').then(
            (m) => m.ArticleFormComponent
          ),
      },
    ],
  },
];
