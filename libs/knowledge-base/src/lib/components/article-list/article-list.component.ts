import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { KnowledgeBaseStore } from '../../store/knowledge-base.store';
import { ArticleCardComponent } from '../article-card/article-card.component';
import { ArticleFilterComponent } from '../article-filter/article-filter.component';

@Component({
  selector: 'lib-article-list',
  standalone: true,
  imports: [
    CommonModule,
    ArticleFilterComponent,
    ArticleCardComponent,
    MatProgressSpinnerModule,
  ],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.scss',
})
export class ArticleListComponent {
  // Внедряем общий стор, созданный провайдером роутинга либы
  readonly store = inject(KnowledgeBaseStore);
}
