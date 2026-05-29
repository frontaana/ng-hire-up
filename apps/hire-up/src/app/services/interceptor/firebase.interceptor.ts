import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../../environments/environment';

export const firebaseInterceptor: HttpInterceptorFn = (req, next) => {
  if (
    environment.production &&
    req.url.includes(environment.apiBaseUrl) &&
    !req.url.endsWith('.json')
  ) {
    const firebaseReq = req.clone({
      url: `${req.url}.json`,
    });

    return next(firebaseReq);
  }

  return next(req);
};
