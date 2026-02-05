import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { YogaClassesComponent } from './yoga-classes/yoga-classes.component';

export const routes = [
  { path: '', component:YogaClassesComponent },
];
