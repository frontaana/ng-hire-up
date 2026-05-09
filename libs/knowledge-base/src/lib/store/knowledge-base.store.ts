import { computed, inject } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop'; // Обязательно импортируем этот хелпер
import { pipe, switchMap, tap } from 'rxjs';

import { Difficulty, Question, Technology } from '../models/question';
import { QuestionService } from '../services/question.service';

export const KnowledgeBaseStore = signalStore(
  { providedIn: 'root' },
  withState({
    questions: [] as Question[],
    isLoading: false,
    filter: {
      technology: null as Technology | null,
      difficulty: null as Difficulty | null,
    },
  }),
  withComputed(({ questions, filter }) => ({
    filteredQuestions: computed(() => {
      const t = filter.technology();
      const d = filter.difficulty();
      return questions().filter(
        (a) => (!t || a.technology === t) && (!d || a.difficulty === d)
      );
    }),
  })),
  withMethods((store, service = inject(QuestionService)) => {
    // 1. Сначала объявляем rxMethod как независимую константу
    const loadAll = rxMethod<void>(
      pipe(
        tap(() => patchState(store, { isLoading: true })),
        switchMap(() =>
          service.getQuestions().pipe(
            tap({
              next: (data) =>
                patchState(store, { questions: data, isLoading: false }),
              error: () => patchState(store, { isLoading: false }),
            })
          )
        )
      )
    );

    // 2. Возвращаем объект со всеми методами наружу
    return {
      updateFilter(
        technology: Technology | null,
        difficulty: Difficulty | null
      ) {
        patchState(store, { filter: { technology, difficulty } });
      },

      // Экспортируем наш метод загрузки
      loadAll,

      // Внутри addQuestion теперь можно безопасно вызывать loadAll
      addQuestion: rxMethod<Omit<Question, 'id'>>(
        pipe(
          tap(() => patchState(store, { isLoading: true })),
          switchMap((newQuestion) =>
            service.addQuestion(newQuestion).pipe(
              tap({
                next: () => {
                  // Вызываем локальную константу, TypeScript гарантированно увидит тип
                  loadAll();
                },
                error: () => patchState(store, { isLoading: false }),
              })
            )
          )
        )
      ),
    };
  })
);
