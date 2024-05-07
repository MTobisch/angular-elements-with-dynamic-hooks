import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { DynamicHooksModule } from 'ngx-dynamic-hooks';
import { FishComponent } from './fishComponent/fish.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(DynamicHooksModule.forRoot({
      globalParsers: [
        {component: FishComponent}
      ]
    }))
  ]
};
