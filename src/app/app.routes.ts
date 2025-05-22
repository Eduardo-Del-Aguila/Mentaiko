import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'home',
    loadComponent:()=>import('../app/components/home/home.component').then(m=> m.HomeComponent)
  },
  {
    path: 'navigate',
    loadComponent:()=>import('../app/components/shared/navigate/navigate.component').then(m=>m.NavigateComponent)
  },
  {
    path: '', pathMatch: 'full', redirectTo: 'home'
  },
  {
    path: '**', pathMatch: 'full', redirectTo: 'home'
  }
];
