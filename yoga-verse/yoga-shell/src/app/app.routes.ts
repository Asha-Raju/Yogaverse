import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { YogaClassesComponent } from '../../../classes-mfe/src/app/yoga-classes/yoga-classes.component';

export const routes: Routes = [
  {
    path: 'classes',
    loadComponent: () =>
      import('../../../classes-mfe/src/app/yoga-classes/yoga-classes.component').then((m) => m.YogaClassesComponent),
  },
  {
    path: '',
    redirectTo: 'classes',
    pathMatch: 'full',
  },
];
