import type { Locale } from '../translations';

export const contactExtraContent: Record<Locale, Record<string, unknown>> = {
  es: {
    contactExtra: {
    whatsappCard: {
      strip: [
        { strong: '< 2 h', text: 'en horario activo' },
        { strong: 'Persona real', text: '· sin bots' },
        { strong: '10 cupos', text: 'por cohorte' },
      ],
      eyebrow: 'Atención humana',
      title: 'El número que',
      titleEm: 'siempre responde.',
      numberLabel: 'WhatsApp',
      sub: 'Respondemos en menos de dos horas en horario activo. Si nos escribes fuera del horario, te contestamos a primera hora del día siguiente.',
      hours: [
        { day: 'Lunes a viernes', hours: '08:00 – 21:00' },
        { day: 'Sábados', hours: '09:00 – 18:00' },
        { day: 'Domingos', hours: '10:00 – 14:00' },
      ],
      suggestedLabel: 'Mensaje sugerido',
      suggestedQuote:
        'Hola, soy {tu nombre}. Estoy interesado en el retiro Mente que Sana, quería saber si quedan cupos y conocer las próximas fechas.',
      quickSend: 'Enviar este mensaje',
      defaultMessage:
        'Hola, estoy interesado en el retiro Mente que Sana. ¿Quedan cupos en alguna tarifa?',
    },
    },
  },
  en: {
    contactExtra: {
    whatsappCard: {
      strip: [
        { strong: '< 2 h', text: 'during active hours' },
        { strong: 'Real person', text: '· no bots' },
        { strong: '10 spots', text: 'per cohort' },
      ],
      eyebrow: 'Human support',
      title: 'The number that',
      titleEm: 'always replies.',
      numberLabel: 'WhatsApp',
      sub: 'We reply within two hours during active hours. If you write outside those hours, we answer first thing the next day.',
      hours: [
        { day: 'Monday to Friday', hours: '8:00 AM – 9:00 PM' },
        { day: 'Saturdays', hours: '9:00 AM – 6:00 PM' },
        { day: 'Sundays', hours: '10:00 AM – 2:00 PM' },
      ],
      suggestedLabel: 'Suggested message',
      suggestedQuote:
        'Hi, I’m {your name}. I’m interested in the Mente que Sana retreat — I wanted to know if spots are still available and learn about upcoming dates.',
      quickSend: 'Send this message',
      defaultMessage:
        'Hi, I’m interested in the Mente que Sana retreat. Are there spots available in any tier?',
    },
    },
  },
};
