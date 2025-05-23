import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'home',
    loadComponent:()=>import('../app/components/home/home.component').then(m=> m.HomeComponent)
  },
  {
    path: 'navigate',
    loadChildren:()=>import('../app/components/shared/navigate/navigate.component').then( m => m.NavigateComponent)
  },
  {
    path: 'menu',
    loadComponent: ()=> import('./components/Bienvenida/menu/menu.component').then( m=>m.MenuComponent),

    children: [
    {
        path: 'about',
        loadChildren: () => import('./components/Bienvenida/about/about.component').then( m => m.AboutComponent)
    },
    {
      path: 'menu',
      loadChildren:() => import('./components/Bienvenida/menu/menu.component').then( m => m.MenuComponent)
    },
    {
      path: 'servicio',
      loadChildren: () => import('./components/Bienvenida/servicio/servicios.component').then(m => m.ServiciosComponent)
    },
    {
      path: 'contact',
      loadChildren: () => import ('../app/components/Bienvenida/contact/contact.component').then(m=> m.ContactComponent)
    }
      ],
  },
  {
    path: '', pathMatch: 'full', redirectTo: 'home'
  },
  {
    path: '**', pathMatch: 'full', redirectTo: 'home'
  }
];
