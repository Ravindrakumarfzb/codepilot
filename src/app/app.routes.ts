import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/hero/hero').then(m => m.Hero),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./components/hero/hero').then(m => m.Hero),
  },
  {
    path: 'generator',
    loadComponent: () =>
      import('./components/generator/generator').then(m => m.Generator),
  },
  {
    path: 'pricing',
    loadComponent: () =>
      import('./components/pricing/pricing').then(m => m.Pricing),
  },
  {
    path: 'aboutus',
    loadComponent: () =>
      import('./components/about/about').then(m => m.About),
  },
  {
    path: 'contactus',
    loadComponent: () =>
      import('./components/contactus/contactus').then(m => m.Contactus),
  },
  {
    path: 'features',
    loadComponent: () =>
      import('./components/features/features').then(m => m.Features),
  },
  {
    path: 'blog',
    loadComponent: () =>
      import('./components/blog/blog').then(m => m.Blog),
  },
  {
    path: 'team',
    loadComponent: () =>
      import('./components/team/team').then(m => m.Team),
  },
  {
    path: '**',
    redirectTo: ''
  }
];
