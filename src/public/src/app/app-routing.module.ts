import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'personal-communication',
    loadChildren: () => import('./modules/personal-communication/personal-communication.module').then(m => m.PersonalCommunicationModule),
    canActivate: [AuthGuard],

  },
  {
    path: 'project-communication',
    loadChildren: () => import('./modules/project-communication/project-communication.module').then(m => m.ProjectCommunicationModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'landing',
    loadChildren: () => import('./modules/landing/landing.module').then(m => m.LandingModule)
  },
  {
    path: '',
    redirectTo: '/landing',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
