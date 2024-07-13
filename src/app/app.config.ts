import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {MatPaginatorModule} from '@angular/material/paginator';
import { provideHttpClient } from '@angular/common/http';


export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
   provideRouter(routes), provideClientHydration(),
    importProvidersFrom(MatPaginatorModule)
  ]
};
