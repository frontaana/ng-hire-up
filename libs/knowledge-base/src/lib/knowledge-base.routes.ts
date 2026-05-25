import { Routes } from '@angular/router';
import { KnowledgeBaseComponent } from './components/knowledge-base/knowledge-base.component';
import { KnowledgeBaseStore } from './store/knowledge-base.store';

export const KNOWLEDGE_BASE_ROUTES: Routes = [
  {
    path: '',
    component: KnowledgeBaseComponent,
    // Регистрируем стор здесь, делая его общим для всей ветки роутов
    providers: [KnowledgeBaseStore],
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      {
        path: 'list',
        title: 'Hire-Up | База вопросов',
        loadComponent: () =>
          import('./components/question-list/question-list.component').then(
            (m) => m.QuestionListComponent
          ),
      },
      {
        path: 'add',
        loadComponent: () =>
          import('./components/question-form/question-form.component').then(
            (m) => m.QuestionFormComponent
          ),
      },
    ],
  },
];
