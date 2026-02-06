import { Routes } from '@angular/router';
import { loadRemoteEntry, loadRemoteModule } from '@angular-architects/module-federation';

export const routes: Routes = [
  {
    path: 'classes',
    loadChildren: () =>
      loadRemoteModule({
        type: 'manifest',
        remoteName: 'classes-mfe',
        exposedModule: './YogaClassesRoutes',
      }).then((m) => m.routes),
  },
  // {
  //   path: 'classes',
  //   loadComponent: () =>
  //     loadRemoteModule({
  //       type: 'module',
  //       remoteEntry: 'http://localhost:4201/remoteEntry.js',
  //       exposedModule: './YogaClassesComponent',
  //     }).then((m) => {
  //       console.log('REMOTE EXPORTS:', m);
  //       return m.YogaClassesComponent;
  //     }),
  // },
  {
    path: '',
    redirectTo: 'classes',
    pathMatch: 'full',
  },
];
