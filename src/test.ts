

import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

declare const require: any;

// Tout d'abord, initialisez l'environnement de test Angular.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
// Ensuite, nous trouvons tous les tests.
const context = require.context('./', true, /\.spec\.ts$/);
// charger les modules
context.keys().map(context);
