import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'home',
    loadComponent:()=>import('../app/components/home/home.component').then(m=> m.HomeComponent)
  },
  {
    path: 'navigate',
    loadComponent:()=>import('../app/components/shared/navigate/navigate.component').then( m => m.NavigateComponent)
  },
    {
    path: 'menu',
    loadComponent: ()=> import('./components/Bienvenida/menu/menu.component').then( m=>m.MenuComponent),
    },
    {
        path: 'about',
        loadComponent: () => import('./components/Bienvenida/about/about.component').then( m => m.AboutComponent)
    },
    {
      path: 'menu',
      loadComponent:() => import('./components/Bienvenida/menu/menu.component').then( m => m.MenuComponent)
    },
    {
      path: 'servicio',
      loadComponent: () => import('./components/Bienvenida/servicio/servicios.component').then(m => m.ServiciosComponent)
    },
    {
      path: 'contact',
      loadComponent: () => import ('../app/components/Bienvenida/contact/contact.component').then(m=> m.ContactComponent)
    },
    // {
    //   path: 'servicio/:id',
    //   loadComponent:()=> import('')
    // }
  {
    path: '', pathMatch: 'full', redirectTo: 'menu'
  },
  {
    path: '**', pathMatch: 'full', redirectTo: 'menu'
  }
];
