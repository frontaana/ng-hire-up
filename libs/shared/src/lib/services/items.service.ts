import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ItemsService {
  private http = inject(HttpClient);

  getItems(url: string): Observable<any[]> {
    console.log('ItemsService getItems', url);
    return this.http.get<any[]>(url).pipe(
      map((res) => {
        if (!res) return [];

        // 1. Превращаем в массив (универсально для Firebase и json-server)
        const rawItems = Array.isArray(res)
          ? res
          : Object.keys(res).map((key) => ({
              ...(res[key] as object),
              id: key,
            }));

        // 2. ЗАЧИСТКА: убираем всё, что не является объектом задачи
        // (удаляем строку $schema и возможные null)
        return rawItems.filter(
          (item) =>
            item && typeof item === 'object' && !item.hasOwnProperty('$schema')
        ) as any[];
      })
    );
  }

  addItem(url: string, item: any): Observable<any> {
    console.log('addItem', item);

    return this.http.post<any>(url, item).pipe(
      map((res) => {
        // 1. Если пришел ответ от Firebase (объект с полем name)
        if (res && res.name) {
          return { ...item, id: res.name };
        }

        // 2. Если пришел ответ от локального json-server (весь объект с id)
        return res as any;
      })
    );
  }

  deleteItem(url: string, id: string): Observable<void> {
    return this.http.delete<void>(`${url}/${id}`);
  }

  // Обновить задачу (UPDATE)
  updateItem(url: string, item: any): Observable<any> {
    return this.http.put<any>(`${url}/${item.id}`, item);
  }
}
