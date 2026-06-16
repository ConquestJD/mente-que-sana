import { RenderMode, ServerRoute } from '@angular/ssr';
import { VISIBLE_SEDES } from './shared/sedes';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'sedes/:slug',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return VISIBLE_SEDES.map((s) => ({ slug: s.slug }));
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
