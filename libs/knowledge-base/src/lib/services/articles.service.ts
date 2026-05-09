import { inject, Injectable } from '@angular/core';
import { ItemsService } from '@ng-highcharts-canvas/shared'; // Твой алиас на shared
import { map, Observable } from 'rxjs';
import { Article } from '../models/article'; // Твои модели
import { KNOWLEDGE_BASE_URL } from '../services/api-url.token'; // Токен из текущей либы

@Injectable({ providedIn: 'root' })
export class ArticlesService extends ItemsService {
  // Получаем базовый URL из DI-токена, который прокинул проект app
  private readonly baseUrl = inject(KNOWLEDGE_BASE_URL);

  /**
   * Динамически формирует URL в зависимости от окружения
   */
  private getTargetUrl(): string {
    const isFirebase = this.baseUrl.includes('firebaseio.com');

    if (isFirebase) {
      // Для удаленной Firebase RTDB стучимся в конкретную ноду с .json в конце
      return `${this.baseUrl}/articles.json`;
    } else {
      // Для локального json-server стучимся строго по имени ресурса без расширений
      // Результат: '/api/articles' -> проксирует в 'http://localhost:3000/articles'
      return `${this.baseUrl}/articles`;
    }
  }

  // 1. Получение всех статей
  getArticles(): Observable<Article[]> {
    const url = this.getTargetUrl();
    console.log('ArticlesService getArticles URL:', url);

    // Вызываем унаследованный метод getItems и передаем сформированный URL
    // Добавляем маппинг на случай, если Firebase вернул объект, а не массив
    return this.getItems(url).pipe(
      map((res: any) => {
        if (!res) return [];

        // Если это Firebase, придет объект {"1": {...}, "2": {...}}
        // Если json-server, придет чистый массив [{...}, {...}]
        const rawArticles = Array.isArray(res)
          ? res
          : Object.keys(res).map((key) => ({
              ...(res[key] as object),
              id: key,
            }));

        // Фильтруем метаданные ($schema)
        return rawArticles.filter(
          (item) =>
            item && typeof item === 'object' && !item.hasOwnProperty('$schema')
        ) as Article[];
      })
    );
  }

  // 2. Добавление новой статьи
  addArticle(article: Omit<Article, 'id'>): Observable<Article> {
    const url = this.getTargetUrl();
    console.log('ArticlesService addArticle URL:', url);
    return this.addItem(url, article);
  }

  // 3. Удаление статьи (если понадобится в админке)
  deleteArticle(id: string): Observable<void> {
    const isFirebase = this.baseUrl.includes('firebaseio.com');
    const deleteUrl = isFirebase
      ? `${this.baseUrl}/articles/${id}.json`
      : `${this.baseUrl}/articles/${id}`;

    console.log('ArticlesService deleteArticle URL:', deleteUrl);
    return this.deleteItem(deleteUrl, id);
  }
}
