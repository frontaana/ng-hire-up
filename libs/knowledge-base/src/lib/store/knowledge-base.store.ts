import { HttpClient } from '@angular/common/http';
import { computed, inject } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { firstValueFrom } from 'rxjs';
import { Article, Difficulty, Technology } from '../models/article';

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
  withMethods((store, http = inject(HttpClient)) => ({
    async loadAll() {
      patchState(store, { isLoading: true });
      try {
        // Для GH Pages: если API нет, можно грузить из assets/db.json
        const data = await firstValueFrom(
          http.get<Article[]>('http://localhost:3000/articles')
        );
        patchState(store, { articles: data, isLoading: false });
      } catch {
        patchState(store, { isLoading: false });
      }
    },
    updateFilter(technology: Technology | null, difficulty: Difficulty | null) {
      patchState(store, { filter: { technology, difficulty } });
    },
    addArticle(article: Omit<Article, 'id'>) {
      const newArticle = { ...article, id: Date.now().toString() } as Article;
      patchState(store, { articles: [...store.articles(), newArticle] });
      // Здесь был бы POST запрос, но для GH Pages просто обновляем стейт
    },
  }))
);
