import { RenderMode, ServerRoute } from '@angular/ssr';
import { SEDES } from './shared/sedes';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'sedes/:slug',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return SEDES.map((s) => ({ slug: s.slug }));
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
