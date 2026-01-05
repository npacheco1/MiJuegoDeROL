import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    // 1. Redirige la ruta vacía (al iniciar la app) a 'inicio'
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    // 2. Carga perezosa del componente InicioPage (standalone)
    loadComponent: () => import('./pages/inicio/inicio.page').then(m => m.InicioPage),
  },
  {
    path: 'personaje',
    loadComponent: () => import('./pages/personaje/personaje.page').then(m => m.PersonajePage)
  },
  {
    path: 'mapa',
    loadComponent: () => import('./pages/mapa/mapa.page').then(m => m.MapaPage)
  },
  {
    path: 'combate',
    loadComponent: () => import('./pages/combate/combate.page').then(m => m.CombatePage)
  },
  {
    path: 'inventario',
    loadComponent: () => import('./pages/inventario/inventario.page').then(m => m.InventarioPage)
  },
];
