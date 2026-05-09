import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { Article } from '../../models/article';

@Component({
  selector: 'lib-article-card',
  standalone: true,
  imports: [CommonModule, MatChipsModule, MatExpansionModule, MatIconModule],
  templateUrl: './article-card.component.html',
  styleUrl: './article-card.component.scss',
})
export class ArticleCardComponent {
  article = input.required<Article>();
}
