import type { Locale } from '../core/i18n/translations';
import { mergeDeep } from '../core/i18n/merge';
import { SEDES, Sede, getVisibleSede, isSedeVisible } from './sedes';
import { SEDE_EN_OVERLAYS } from './sedes-en';

function mergeSede(base: Sede, overlay: Record<string, unknown>): Sede {
  return mergeDeep(base as unknown as Record<string, unknown>, overlay) as unknown as Sede;
}

export function getLocalizedSede(slug: string | null | undefined, locale: Locale): Sede | undefined {
  const base = getVisibleSede(slug);
  if (!base) return undefined;
  if (locale === 'es') return base;
  const overlay = SEDE_EN_OVERLAYS[base.slug];
  return overlay ? mergeSede(base, overlay as Record<string, unknown>) : base;
}

export function getVisibleSedes(locale: Locale): Sede[] {
  return SEDES.filter(isSedeVisible).map((s) => {
    if (locale === 'es') return s;
    const overlay = SEDE_EN_OVERLAYS[s.slug];
    return overlay ? mergeSede(s, overlay as Record<string, unknown>) : s;
  });
}

export function getLocalizedSedeBySlug(slug: string, locale: Locale): Sede | undefined {
  return getLocalizedSede(slug, locale);
}
