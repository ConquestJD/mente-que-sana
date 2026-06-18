import {
  ApplicationRef,
  Injectable,
  PLATFORM_ID,
  inject,
  signal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TRANSLATIONS, type Locale } from './translations';
import { extendLocale } from './content';

export type { Locale };

const ES_BASE = TRANSLATIONS.es as Record<string, unknown>;
const EN_BASE = TRANSLATIONS.en as Record<string, unknown>;

export const LOCALIZED_TRANSLATIONS: Record<Locale, Record<string, unknown>> = {
  es: extendLocale(ES_BASE, 'es'),
  en: extendLocale(EN_BASE, 'en'),
};

const STORAGE_KEY = 'mqs-locale';

@Injectable({ providedIn: 'root' })
export class LocaleService {
  private readonly appRef = inject(ApplicationRef);
  private readonly platformId = inject(PLATFORM_ID);

  readonly locale = signal<Locale>('es');

  constructor() {
    if (!isPlatformBrowser(this.platformId)) return;
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'en' || saved === 'es') {
      this.applyLocale(saved, false);
    }
  }

  t(key: string): string {
    const node = this.resolve(key);
    return typeof node === 'string' ? node : key;
  }

  tObject<T = Record<string, unknown>>(key: string): T | undefined {
    const node = this.resolve(key);
    return node != null && typeof node === 'object' ? (node as T) : undefined;
  }

  tArray(key: string): string[] {
    const node = this.resolve(key);
    return Array.isArray(node) ? node.map(String) : [];
  }

  tInterpolate(key: string, vars: Record<string, string>): string {
    let text = this.t(key);
    for (const [name, value] of Object.entries(vars)) {
      text = text.replaceAll(`{{${name}}}`, value);
    }
    return text;
  }

  setLocale(locale: Locale): void {
    this.applyLocale(locale, true);
  }

  toggle(): void {
    this.setLocale(this.locale() === 'es' ? 'en' : 'es');
  }

  private applyLocale(locale: Locale, persist: boolean): void {
    this.locale.set(locale);

    if (!isPlatformBrowser(this.platformId)) return;

    document.documentElement.lang = locale;
    if (persist) localStorage.setItem(STORAGE_KEY, locale);
    this.appRef.tick();
  }

  private resolve(key: string): unknown {
    const parts = key.split('.');
    let node: unknown = LOCALIZED_TRANSLATIONS[this.locale()];

    for (const part of parts) {
      if (node == null || typeof node !== 'object') return key;
      node = (node as Record<string, unknown>)[part];
    }

    return node;
  }
}
