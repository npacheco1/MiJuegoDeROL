import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    loadComponent: () => import('./pages/inicio/inicio.page').then( m => m.InicioPage)
  },
  {
    path: 'personaje',
    loadComponent: () => import('./pages/personaje/personaje.page').then( m => m.PersonajePage)
  },
  {
    path: 'mapa',
    loadComponent: () => import('./pages/mapa/mapa.page').then( m => m.MapaPage)
  },
  {
    path: 'combate',
    loadComponent: () => import('./pages/combate/combate.page').then( m => m.CombatePage)
  },
  {
    path: 'inventario',
    loadComponent: () => import('./pages/inventario/inventario.page').then( m => m.InventarioPage)
  },
];
