import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { publicGuard } from './core/guards/public.guard';
import { LoginComponent } from './features/auth/login/login.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./features/auth/login/login.component').then(m => LoginComponent),
    canActivate: [publicGuard]  
  },
  {
    path: 'register',
    loadComponent: () => import('./features/auth/register/register.component').then(m => RegisterComponent),
    canActivate: [publicGuard]
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./features/dashboard/dashboard.component').then(m => DashboardComponent),
    canActivate: [authGuard]  
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];
