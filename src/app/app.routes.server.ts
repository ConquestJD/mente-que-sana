import { RenderMode, ServerRoute } from '@angular/ssr';
import { SEDES } from './shared/sedes';

export const serverRoutes: ServerRoute[] = [
  {
    // Sede insignia: ruta estática (PlaceComponent). Más específica que :slug.
    path: 'sedes/urubamba',
    renderMode: RenderMode.Prerender,
  },
  {
    // Resto de sedes: prerenderizar una página por slug (excluye la insignia).
    path: 'sedes/:slug',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return SEDES.filter((s) => !s.flagship).map((s) => ({ slug: s.slug }));
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
