import { bootstrapApplication, createApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { createCustomElement } from '@angular/elements';
import { TestComponent } from './app/testComponent/test.component';
import { Injector, importProvidersFrom } from '@angular/core';
import { DynamicHooksModule } from 'ngx-dynamic-hooks';
import { FishComponent } from './app/fishComponent/fish.component';


// Run Angular normally (not needed, just for demonstration purposes!) 
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));

// Register TestComponent as a web component
(async () => {
  const app = await createApplication({
    providers: [
      /* your global providers here */
      importProvidersFrom(DynamicHooksModule.forRoot({
        globalParsers: [
          {component: FishComponent}
        ]
      }))
    ],
  });

  const TestComponentElement = createCustomElement(TestComponent, {
    injector: app.injector,
  });

  customElements.define('my-webtestcomponent', TestComponentElement);
})();

const eventName = 'onClick';
document.querySelector('my-webtestcomponent')!.addEventListener(eventName, event => {
  console.log('custom event:', eventName, event);
});