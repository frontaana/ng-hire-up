import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { KnowledgeBaseStore } from '../../store/knowledge-base.store';
import { ArticleFilterComponent } from '../article-filter/article-filter.component.component';
import { ArticleFormComponent } from '../article-form/article-form.component.component';
import { ArticleListComponent } from '../article-list/article-list.component.component';

@Component({
  selector: 'lib-knowledge-base',
  standalone: true,
  imports: [
    CommonModule,
    ArticleFilterComponent,
    ArticleFormComponent,
    ArticleListComponent,
    MatProgressSpinnerModule,
  ],
  templateUrl: './knowledge-base.component.html',
  styleUrl: './knowledge-base.component.scss',
  providers: [KnowledgeBaseStore],
})
export class KnowledgeBaseComponent {
  readonly store = inject(KnowledgeBaseStore);

  ngOnInit(): void {
    this.store.loadAll();
  }
}
