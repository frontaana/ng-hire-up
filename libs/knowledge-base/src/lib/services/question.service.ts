import { inject, Injectable } from '@angular/core';
import { ItemsService } from '@ng-hire-up/shared'; // Твой алиас на shared
import { map, Observable } from 'rxjs';
import { Question } from '../models/question'; // Твои модели
import { KNOWLEDGE_BASE_URL } from './api-url.token'; // Токен из текущей либы

@Injectable({ providedIn: 'root' })
export class QuestionService extends ItemsService {
  // Получаем базовый URL из DI-токена, который прокинул проект app
  private readonly baseUrl = inject(KNOWLEDGE_BASE_URL);

  /**
   * Динамически формирует URL в зависимости от окружения
   * 
   *   private getTargetUrl(): string {
    const isFirebase = this.baseUrl.includes('firebaseio.com');

    if (isFirebase) {
      // Для удаленной Firebase RTDB стучимся в конкретную ноду с .json в конце
      return `${this.baseUrl}/questions.json`;
    } else {
      // Для локального json-server стучимся строго по имени ресурса без расширений
      // Результат: '/api/questions' -> проксирует в 'http://localhost:3000/questions'
      return `${this.baseUrl}/questions`;
    }
  }
   */

  // 1. Получение всех статей
  getQuestions(): Observable<Question[]> {
    // Вызываем унаследованный метод getItems и передаем сформированный URL
    // Добавляем маппинг на случай, если Firebase вернул объект, а не массив
    return this.getItems(`${this.baseUrl}/questions`).pipe(
      map((res: any) => {
        if (!res) return [];

        // Если это Firebase, придет объект {"1": {...}, "2": {...}}
        // Если json-server, придет чистый массив [{...}, {...}]
        const rawQuestions = Array.isArray(res)
          ? res
          : Object.keys(res).map((key) => ({
              ...(res[key] as object),
              id: key,
            }));

        // Фильтруем метаданные ($schema)
        return rawQuestions.filter(
          (item) =>
            item && typeof item === 'object' && !item.hasOwnProperty('$schema')
        ) as Question[];
      })
    );
  }

  // 2. Добавление новой статьи
  addQuestion(question: Omit<Question, 'id'>): Observable<Question> {
    return this.addItem(`${this.baseUrl}/questions`, question);
  }

  // 3. Удаление статьи (если понадобится в админке)
  deleteQuestion(id: string): Observable<void> {
    const isFirebase = this.baseUrl.includes('firebaseio.com');
    const deleteUrl = isFirebase
      ? `${this.baseUrl}/questions/${id}.json`
      : `${this.baseUrl}/questions/${id}`;

    console.log('QuestionsService deleteQuestion URL:', deleteUrl);
    return this.deleteItem(deleteUrl, id);
  }
}
