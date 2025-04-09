import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'contacts',
  },
  {
    title: 'Contacts',
    path: 'contacts',
    loadComponent: () => import('./components/contacts/contacts.component'),
  },
  { path: '**', redirectTo: '' }, // Redirect unmatched routes
];
