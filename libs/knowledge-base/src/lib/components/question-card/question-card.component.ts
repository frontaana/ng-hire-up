import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { Question } from '../../models/question';

@Component({
  selector: 'lib-question-card',
  standalone: true,
  imports: [CommonModule, MatChipsModule, MatExpansionModule, MatIconModule],
  templateUrl: './question-card.component.html',
  styleUrl: './question-card.component.scss',
})
export class QuestionCardComponent {
  question = input.required<Question>();
}
