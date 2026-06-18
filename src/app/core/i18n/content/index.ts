import type { Locale } from '../translations';
import { mergeDeep } from '../merge';
import { commonUiContent } from './common-ui';
import { homeContent } from './home';
import { experienceContent } from './experience';
import { pricingContent } from './pricing';
import { communityContent } from './community';
import { contactExtraContent } from './contact-extra';
import { sedesIndexContent } from './sedes-index';
import { placeUiContent } from './place-ui';

const MODULES = [
  commonUiContent,
  homeContent,
  experienceContent,
  pricingContent,
  communityContent,
  contactExtraContent,
  sedesIndexContent,
  placeUiContent,
] as const;

export function extendLocale(base: Record<string, unknown>, locale: Locale): Record<string, unknown> {
  let out = { ...base };
  for (const mod of MODULES) {
    out = mergeDeep(out, mod[locale] as Record<string, unknown>);
  }
  return out;
}
