import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'personal-communication',
    loadChildren: () => import('./modules/personal-communication/personal-communication.module').then(m => m.PersonalCommunicationModule),
  },
  {
    path: 'project-communication',
    loadChildren: () => import('./modules/project-communication/project-communication.module').then(m => m.ProjectCommunicationModule),
  },
  {
    path: 'landing',
    loadChildren: () => import('./modules/landing/landing.module').then(m => m.LandingModule)
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
