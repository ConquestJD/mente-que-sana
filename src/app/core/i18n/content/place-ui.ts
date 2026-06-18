import type { Locale } from '../translations';

export const placeUiContent: Record<Locale, Record<string, unknown>> = {
  es: {
    placeUi: {
    sedeDates: {
      eyebrow: 'Fechas en {{city}}',
      title: 'Próximas cohortes en',
      titleEm: '{{city}}.',
      nextRetreat: 'Siguiente retiro:',
      reserve: 'Reservar →',
      fullCalendar: 'Ver calendario completo',
    },
    sections: {
      atmosphere: 'Atmósfera',
      scrollExplore: 'Desliza para explorar',
      scroll: 'Desliza',
      next: 'Siguiente',
      endTour: 'Fin del recorrido',
      thePath: 'El camino',
      howToGetThere: 'Cómo llegar al retiro.',
      acclimatization: 'Aclimatación:',
    },
    ctaBanner: {
      eyebrow: 'Reserva tu espacio',
      titlePrefix: 'Diez personas. Una vez.',
      primaryLabel: 'Reservar mi lugar',
      secondaryLabel: 'Ver calendario',
    },
    },
  },
  en: {
    placeUi: {
    sedeDates: {
      eyebrow: 'Dates in {{city}}',
      title: 'Upcoming cohorts in',
      titleEm: '{{city}}.',
      nextRetreat: 'Next retreat:',
      reserve: 'Book →',
      fullCalendar: 'View full calendar',
    },
    sections: {
      atmosphere: 'Atmosphere',
      scrollExplore: 'Swipe to explore',
      scroll: 'Scroll',
      next: 'Next',
      endTour: 'End of tour',
      thePath: 'The journey',
      howToGetThere: 'How to reach the retreat.',
      acclimatization: 'Acclimatization:',
    },
    ctaBanner: {
      eyebrow: 'Book your spot',
      titlePrefix: 'Ten people. Once.',
      primaryLabel: 'Reserve my spot',
      secondaryLabel: 'View calendar',
    },
    },
  },
};
