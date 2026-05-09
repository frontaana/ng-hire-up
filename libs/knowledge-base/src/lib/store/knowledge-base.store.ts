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

import { Article, Difficulty, Technology } from '../models/article';
import { ArticlesService } from '../services/articles.service';

export const KnowledgeBaseStore = signalStore(
  { providedIn: 'root' },
  withState({
    articles: [] as Article[],
    isLoading: false,
    filter: {
      technology: null as Technology | null,
      difficulty: null as Difficulty | null,
    },
  }),
  withComputed(({ articles, filter }) => ({
    filteredArticles: computed(() => {
      const t = filter.technology();
      const d = filter.difficulty();
      return articles().filter(
        (a) => (!t || a.technology === t) && (!d || a.difficulty === d)
      );
    }),
  })),
  withMethods((store, service = inject(ArticlesService)) => {
    // 1. Сначала объявляем rxMethod как независимую константу
    const loadAll = rxMethod<void>(
      pipe(
        tap(() => patchState(store, { isLoading: true })),
        switchMap(() =>
          service.getArticles().pipe(
            tap({
              next: (data) =>
                patchState(store, { articles: data, isLoading: false }),
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

      // Внутри addArticle теперь можно безопасно вызывать loadAll
      addArticle: rxMethod<Omit<Article, 'id'>>(
        pipe(
          tap(() => patchState(store, { isLoading: true })),
          switchMap((newArticle) =>
            service.addArticle(newArticle).pipe(
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
