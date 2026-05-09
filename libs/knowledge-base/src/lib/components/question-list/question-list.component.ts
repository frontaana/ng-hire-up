import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { KnowledgeBaseStore } from '../../store/knowledge-base.store';
import { QuestionCardComponent } from '../question-card/question-card.component';
import { QuestionFilterComponent } from '../question-filter/question-filter.component';

@Component({
  selector: 'lib-question-list',
  standalone: true,
  imports: [
    CommonModule,
    QuestionFilterComponent,
    QuestionCardComponent,
    MatProgressSpinnerModule,
  ],
  templateUrl: './question-list.component.html',
  styleUrl: './question-list.component.scss',
})
export class QuestionListComponent {
  // Внедряем общий стор, созданный провайдером роутинга либы
  readonly store = inject(KnowledgeBaseStore);
}
