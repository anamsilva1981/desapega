import { ApplicationConfig } from '@angular/core';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { HttpWrapperService } from './services/http-wrapper.service';

export const coreConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(
      withInterceptors([
      ])
    ),
    HttpWrapperService,
  ]
};
