import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatChipListboxChange, MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { Difficulty, Technology } from '../../models/question';
import { KnowledgeBaseStore } from '../../store/knowledge-base.store';

@Component({
  selector: 'lib-question-filter',
  standalone: true,
  imports: [CommonModule, MatChipsModule, MatFormFieldModule, MatSelectModule],
  templateUrl: './question-filter.component.html',
  styleUrl: './question-filter.component.scss',
})
export class QuestionFilterComponent {
  readonly store = inject(KnowledgeBaseStore);

  technologies = Object.values(Technology);
  difficulties = Object.values(Difficulty);

  onTechChange(event: MatChipListboxChange): void {
    // Обновляем только технологию, сохраняя текущую сложность
    this.store.updateFilter(event.value, this.store.filter.difficulty());
  }

  onDiffChange(event: MatSelectChange): void {
    // Обновляем только сложность, сохраняя текущую технологию
    this.store.updateFilter(this.store.filter.technology(), event.value);
  }
}
