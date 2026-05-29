import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { KNOWLEDGE_BASE_URL } from '@ng-hire-up/knowledge-base';
import { environment } from '../environments/environment';
import { appRoutes } from './app.routes';
import { firebaseInterceptor } from './services/interceptor/firebase.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideHttpClient(withInterceptors([firebaseInterceptor])),
    // provideAnimationsAsync(),
    // provideStore(
    //   [], // Сюда позже добавим NGXS стейты
    //   withNgxsReduxDevtoolsPlugin()
    // ),
    // // Signal Store не требует глобальной регистрации,
    // // он работает через DI в компонентах или через providedIn: 'root'
    {
      provide: KNOWLEDGE_BASE_URL,
      useValue: environment.apiBaseUrl,
    },
  ],
};
