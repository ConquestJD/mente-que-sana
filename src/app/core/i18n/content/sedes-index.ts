import type { Locale } from '../translations';

export const sedesIndexContent: Record<Locale, Record<string, unknown>> = {
  es: {
    sedesIndex: {
    body: {
      eyebrow: 'Dos entornos · Una intención',
      title: 'Elige',
      titleEm: 'dónde sembrar.',
      lead: 'Altura andina o luz del sur: el mismo retiro, dos formas distintas de habitar el silencio.',
      contrast: {
        urubamba: {
          label: 'Urubamba',
          value: '2,870 m',
          hint: 'Valle Sagrado · frío seco',
        },
        tacna: {
          label: 'Tacna',
          value: '560 m',
          hint: 'Sur sereno · sol constante',
        },
      },
      badge: 'Sede insignia',
      cardCta: 'Conocer la sede',
      from: 'Desde',
    },
    },
  },
  en: {
    sedesIndex: {
    body: {
      eyebrow: 'Two settings · One intention',
      title: 'Choose',
      titleEm: 'where to sow.',
      lead: 'Andean altitude or southern light: the same retreat, two distinct ways to inhabit silence.',
      contrast: {
        urubamba: {
          label: 'Urubamba',
          value: '2,870 m',
          hint: 'Sacred Valley · dry cold',
        },
        tacna: {
          label: 'Tacna',
          value: '560 m',
          hint: 'Serene south · constant sun',
        },
      },
      badge: 'Flagship location',
      cardCta: 'Explore this location',
      from: 'From',
    },
    },
  },
};
