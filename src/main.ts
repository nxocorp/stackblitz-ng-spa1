import 'zone.js/dist/zone';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { SpaModule } from './spa.module';

platformBrowserDynamic()
  .bootstrapModule(SpaModule)
  .catch((err) => console.error(err));
