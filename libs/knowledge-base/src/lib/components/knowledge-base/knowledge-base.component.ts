import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { KnowledgeBaseStore } from '../../store/knowledge-base.store';

@Component({
  selector: 'lib-knowledge-base',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
  ],
  templateUrl: './knowledge-base.component.html',
  styleUrl: './knowledge-base.component.scss',
  providers: [KnowledgeBaseStore],
})
export class KnowledgeBaseComponent implements OnInit {
  // Внедряем стор, который был создан провайдером роута
  readonly store = inject(KnowledgeBaseStore);

  ngOnInit(): void {
    // Загружаем данные ОДИН раз при входе в раздел базы знаний
    this.store.loadAll();
  }
}
