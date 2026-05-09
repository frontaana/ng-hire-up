import { CommonModule } from '@angular/common';
import { Component, inject, ViewChild } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import {
  ArticleTopic,
  Company,
  Difficulty,
  Technology,
} from '../../models/article';
import { KnowledgeBaseStore } from '../../store/knowledge-base.store';

interface ArticleForm {
  title: FormControl<string>;
  question: FormControl<string>;
  answer: FormControl<string>;
  description: FormControl<string>;
  company: FormControl<Company>;
  technology: FormControl<Technology>;
  topic: FormControl<ArticleTopic>;
  difficulty: FormControl<Difficulty>;
}

@Component({
  selector: 'lib-article-form',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
  templateUrl: './article-form.component.html',
  styleUrl: './article-form.component.scss',
})
export class ArticleFormComponent {
  private readonly fb = inject(NonNullableFormBuilder); // NonNullableFormBuilder
  readonly store = inject(KnowledgeBaseStore);

  // Получаем доступ к директиве формы из шаблона
  @ViewChild(FormGroupDirective) formDirective!: FormGroupDirective;

  companies = Object.values(Company);
  technologies = Object.values(Technology);
  difficulties = Object.values(Difficulty);

  public form = this.fb.group<ArticleForm>({
    title: this.fb.control('', {
      validators: [Validators.required],
    }),
    question: this.fb.control('', {
      validators: [Validators.required, Validators.minLength(5)],
    }),
    answer: this.fb.control('', {
      validators: [Validators.required],
    }),
    description: this.fb.control(''),
    company: this.fb.control(Company.none, {
      validators: [Validators.required],
    }),
    technology: this.fb.control(Technology.JS, {
      validators: [Validators.required],
    }),
    topic: this.fb.control('', { validators: [Validators.required] }),
    difficulty: this.fb.control(Difficulty.Junior),
  });

  onSubmit(): void {
    if (this.form.valid) {
      this.store.addArticle(this.form.getRawValue());

      this.form.reset({
        technology: Technology.JS,
        difficulty: Difficulty.Junior,
      });

      if (this.formDirective) {
        this.formDirective.resetForm();
      }
    }
  }
}
