import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    // provideAnimationsAsync(),
    // provideHttpClient(withInterceptors([firebaseInterceptor])),
    // provideStore(
    //   [], // Сюда позже добавим NGXS стейты
    //   withNgxsReduxDevtoolsPlugin()
    // ),
    // // Signal Store не требует глобальной регистрации,
    // // он работает через DI в компонентах или через providedIn: 'root'
    // {
    //   provide: KNOWLEDGE_BASE_URL,
    //   useValue: environment.apiBaseUrl,
    // },
  ],
};
