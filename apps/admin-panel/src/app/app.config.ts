import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { KNOWLEDGE_BASE_URL } from '@ng-hire-up/knowledge-base';
import { withNgxsReduxDevtoolsPlugin } from '@ngxs/devtools-plugin'; // Разработчики NGXS добавили слово Redux,
import { provideStore } from '@ngxs/store';
import { environment } from '../environments/environment';
import { appRoutes } from './app.routes';
import { firebaseInterceptor } from './services/interceptor/firebase.interceptor';
// чтобы подчеркнуть совместимость с расширением браузера Redux DevTools,
// и чтобы избежать путаницы с другими возможными плагинами отладки
// import { QuestionsState } from './store/questions.state'; // создадим позже для NGXS

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimationsAsync(),
    provideHttpClient(withInterceptors([firebaseInterceptor])),
    provideRouter(appRoutes),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideStore(
      [], // Сюда позже добавим NGXS стейты
      withNgxsReduxDevtoolsPlugin()
    ),
    // Signal Store не требует глобальной регистрации,
    // он работает через DI в компонентах или через providedIn: 'root'
    {
      provide: KNOWLEDGE_BASE_URL,
      useValue: environment.apiBaseUrl,
    },
  ],
};
