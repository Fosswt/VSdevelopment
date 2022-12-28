import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './main-module/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
