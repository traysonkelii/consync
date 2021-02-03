import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './guards/auth-guard.service';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
    // canActivate: [AuthGuardService],
  },
  {
    path: 'personal-communication',
    loadChildren: () => import('./modules/personal-communication/personal-communication.module').then(m => m.PersonalCommunicationModule),
    // canActivate: [AuthGuardService],
  },
  {
    path: 'project-communication',
    loadChildren: () => import('./modules/project-communication/project-communication.module').then(m => m.ProjectCommunicationModule),
    // canActivate: [AuthGuardService],
  },
  {
    path: 'landing',
    loadChildren: () => import('./modules/landing/landing.module').then(m => m.LandingModule),
    // canActivate: [AuthGuardService],
  },
  {
    path: 'project',
    loadChildren: () => import('./modules/project/project.module').then(m => m.ProjectModule),
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
