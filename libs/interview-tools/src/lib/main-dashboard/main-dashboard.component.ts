import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter, startWith } from 'rxjs/operators';

@Component({
  selector: 'lib-main-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './main-dashboard.component.html',
  styleUrl: './main-dashboard.component.scss',
})
export class MainDashboardComponent {
  private readonly router = inject(Router);

  // 1. Создаем сигнал, который триггерится на каждое успешное завершение навигации
  private readonly navigationEnd = toSignal(
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      startWith(null) // Чтобы получить начальное значение при загрузке
    )
  );

  // 2. Вычисляем текущий title дочернего роута на основе изменения навигации
  readonly currentTitle = computed(() => {
    // 1. Просто читаем значение сигнала (без вызова как функции, если TS ругается, 
    // либо сохраняем в переменную, чтобы Angular зарегистрировал зависимость)
    const _trigger = this.navigationEnd(); 

    // 2. Начинаем обход дерева роутов с самого корня
    let route = this.router.routerState.snapshot.root;
    
    // Спускаемся до самого глубокого активного дочернего маршрута
    while (route.firstChild) {
      route = route.firstChild;
    }
    
    // Возвращаем title текущего роута
    return route.title || 'Hire-Up | Карьерный ассистент';
  });
}
