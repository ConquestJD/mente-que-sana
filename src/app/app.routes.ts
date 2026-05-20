import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/home.component').then((m) => m.HomeComponent),
    data: { animation: 'home', title: 'Mente que Sana · Retiro Vivencial · Cusco' },
  },
  {
    path: 'experiencia',
    loadComponent: () =>
      import('./features/experience/experience.component').then(
        (m) => m.ExperienceComponent,
      ),
    data: { animation: 'experience', title: 'El Programa · Mente que Sana' },
  },
  {
    path: 'lugar',
    loadComponent: () =>
      import('./features/place/place.component').then((m) => m.PlaceComponent),
    data: { animation: 'place', title: 'El Lugar · Valle Sagrado' },
  },
  {
    path: 'comunidad',
    loadComponent: () =>
      import('./features/community/community.component').then(
        (m) => m.CommunityComponent,
      ),
    data: { animation: 'community', title: 'Sembradores · Comunidad' },
  },
  {
    path: 'tarifas',
    loadComponent: () =>
      import('./features/pricing/pricing.component').then(
        (m) => m.PricingComponent,
      ),
    data: { animation: 'pricing', title: 'Inversión · Mente que Sana' },
  },
  {
    path: 'contacto',
    loadComponent: () =>
      import('./features/contact/contact.component').then(
        (m) => m.ContactComponent,
      ),
    data: { animation: 'contact', title: 'Contacto · Mente que Sana' },
  },
  { path: '**', redirectTo: '' },
];
