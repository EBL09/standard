import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Provider } from '@angular/core';
import { AuthInterceptor } from './http-request-interceptor.interceptor';

export const httpInterceptorProviders: Provider[] = [
	{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];