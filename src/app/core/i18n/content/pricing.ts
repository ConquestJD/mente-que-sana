import type { Locale } from '../translations';

export const pricingContent: Record<Locale, Record<string, unknown>> = {
  es: {
    pricing: {
    pricingCards: {
      eyebrow: 'Tres tarifas · Diez cupos',
      title: 'Elige el círculo',
      titleEm: 'que te corresponde.',
      lead: 'Tres en Sembradores, tres en Lanzamiento y cuatro en Regular. La cohorte fundadora se ofrece una sola vez.',
      dateLabel: 'Fecha del retiro',
      note: 'Todas las tarifas incluyen alojamiento, comida, prácticas y traslado desde Cusco. La reserva se confirma con el 50% del pago.',
      tiers: [
        {
          key: 'sembradores',
          name: 'Sembradores',
          tagline: 'Cohorte fundadora.',
          description:
            'Tarifa irrepetible para quienes confían primero y construyen el círculo desde la raíz.',
          price: 'S/ 790',
          oldPrice: 'S/ 1,290',
          unit: 'por persona',
          badge: 'IRREPETIBLE',
          marker: 'I',
          features: [
            'Tarifa exclusiva de la cohorte fundadora',
            'Acceso de por vida a futuros círculos como Sembrador',
            'Llamada 1-a-1 con el facilitador antes del retiro',
            'Kit completo de seguimiento 30 días',
            'Comida, alojamiento y traslados desde Cusco',
          ],
        },
        {
          key: 'lanzamiento',
          name: 'Lanzamiento',
          tagline: 'Inscripción anticipada.',
          description: 'Para quienes deciden temprano y se aseguran un cupo con descuento por lanzamiento.',
          price: 'S/ 990',
          oldPrice: 'S/ 1,290',
          unit: 'por persona',
          badge: 'RECOMENDADA',
          marker: 'II',
          features: [
            'Descuento por inscripción temprana',
            'Plan de pagos en 2 cuotas sin recargo',
            'Llamada de bienvenida personalizada',
            'Kit completo de seguimiento 30 días',
            'Comida, alojamiento y traslados desde Cusco',
          ],
        },
        {
          key: 'regular',
          name: 'Regular',
          tagline: 'Tarifa estándar.',
          description: 'Para quienes llegan a su tiempo. Misma experiencia, sin descuentos por anticipación.',
          price: 'S/ 1,290',
          unit: 'por persona',
          marker: 'III',
          features: [
            'Tarifa de cohorte abierta',
            'Plan de pagos disponible',
            'Kit de seguimiento 30 días',
            'Comida, alojamiento y traslados desde Cusco',
          ],
        },
      ],
    },
    pricingCard: {
      plan: 'Plan',
      before: 'Antes',
      spotAvailable: 'cupo disponible',
      spotsAvailable: 'cupos disponibles',
      reserveCta: 'Reservar mi lugar',
      reserveAriaPrefix: 'Reservar tarifa',
    },
    includesDetail: {
      eyebrow: 'Lo que incluye',
      title: 'Cada tarifa cubre',
      titleEm: 'lo esencial',
      titleEnd: ' de la experiencia.',
      lead: 'Sin extras escondidos. Sin sorpresas. Todo lo que necesitas para vivir dos días sin pensar en logística está incluido.',
      groups: [
        {
          title: 'Hospedaje',
          description: 'Donde el cuerpo descansa.',
          items: [
            'Habitaciones compartidas de 2 personas',
            'Habitación individual con costo adicional',
            'Agua caliente',
          ],
        },
        {
          title: 'Cocina',
          description: 'Lo que sostiene la altura.',
          items: [
            '3 comidas + 2 colaciones por día',
            'Ingredientes locales del Valle Sagrado',
            'Té de coca y hierbas naturales',
          ],
        },
        {
          title: 'Prácticas',
          description: 'Donde la mente se mueve.',
          items: [
            'Yoga, respiración y meditación guiadas',
            'Caminatas conscientes por el terreno',
            'Círculo de palabra alrededor del fuego',
          ],
        },
        {
          title: 'Seguimiento',
          description: 'Lo que sigue después.',
          items: [
            'Llamada de bienvenida pre-retiro',
            'Bitácora física + ebook de prácticas',
            'Llamada grupal a los 7 días',
            'Círculo virtual de cierre a los 30 días',
          ],
        },
      ],
    },
    paymentInfo: {
      eyebrow: 'Reserva',
      title: 'Se reserva con el',
      titleEm: '50% del pago.',
      lead: 'Aseguras tu cupo con el 50% del total de la tarifa elegida. Te confirmamos tu lugar y coordinamos el resto contigo.',
      methodsEyebrow: 'Métodos aceptados',
      methodsDesc: 'Aceptamos los principales métodos de pago locales e internacionales.',
      methods: ['Yape', 'Plin', 'Transferencia bancaria', 'USD efectivo'],
    },
    whatsappCta: {
      eyebrow: 'Más rápido por WhatsApp',
      title: '¿Tienes una pregunta?',
      titleEm: 'Escríbenos.',
      sub: 'Te respondemos en menos de 2 horas, todos los días entre 8am y 9pm (Lima/Cusco).',
      btnLabel: 'Conversar por WhatsApp',
      btnAria: 'Conversar por WhatsApp',
      message:
        'Hola, me interesa el retiro Mente que Sana. ¿Podrías contarme más sobre las próximas fechas?',
    },
    faqs: [
      {
        q: '¿Qué pasa si no puedo asistir después de reservar?',
        a: 'Si avisas con más de 21 días de anticipación, el 80% es transferible a la próxima cohorte. Si avisas con menos, se transfiere el 50%. No realizamos devoluciones en efectivo.',
      },
      {
        q: '¿El retiro es para principiantes en yoga o meditación?',
        a: 'Sí. Las prácticas están diseñadas para cualquier nivel. No necesitas experiencia previa, solo apertura para vivirlo en el cuerpo.',
      },
      {
        q: '¿Cómo manejan el tema de altitud para personas que vienen de costa?',
        a: 'Recomendamos llegar a Cusco 24-48 horas antes. Tenemos protocolo de hidratación, oxígeno disponible y cero actividades exigentes el primer día.',
      },
      {
        q: '¿Puedo venir con alguien y compartir habitación?',
        a: 'Sí. Las habitaciones son dobles. Si vienes en pareja o con alguien, indícanos al reservar para asignarlos juntos.',
      },
      {
        q: '¿Qué tipo de alimentación se sirve?',
        a: 'Cocina antiinflamatoria con base vegetariana. Adaptamos a celíaco, veganos y alergias específicas. Avísanos al reservar.',
      },
    ],
    },
  },
  en: {
    pricing: {
    pricingCards: {
      eyebrow: 'Three tiers · Ten spots',
      title: 'Choose the circle',
      titleEm: 'that fits you.',
      lead: 'Three in Sembradores, three in Launch, and four in Regular. The founding cohort is offered only once.',
      dateLabel: 'Retreat date',
      note: 'All tiers include lodging, meals, practices, and transfer from Cusco. Booking is confirmed with 50% payment.',
      tiers: [
        {
          key: 'sembradores',
          name: 'Sembradores',
          tagline: 'Founding cohort.',
          description: 'A once-only rate for those who trust first and build the circle from the root.',
          price: 'S/ 790',
          oldPrice: 'S/ 1,290',
          unit: 'per person',
          badge: 'ONCE ONLY',
          marker: 'I',
          features: [
            'Exclusive founding cohort rate',
            'Lifetime access to future circles as a Sembrador',
            '1-on-1 call with the facilitator before the retreat',
            'Full 30-day follow-up kit',
            'Meals, lodging, and transfers from Cusco',
          ],
        },
        {
          key: 'lanzamiento',
          name: 'Launch',
          tagline: 'Early registration.',
          description: 'For those who decide early and secure a spot with launch discount.',
          price: 'S/ 990',
          oldPrice: 'S/ 1,290',
          unit: 'per person',
          badge: 'RECOMMENDED',
          marker: 'II',
          features: [
            'Early registration discount',
            '2-installment payment plan with no surcharge',
            'Personalized welcome call',
            'Full 30-day follow-up kit',
            'Meals, lodging, and transfers from Cusco',
          ],
        },
        {
          key: 'regular',
          name: 'Regular',
          tagline: 'Standard rate.',
          description: 'For those who arrive in their own time. Same experience, no early-bird discounts.',
          price: 'S/ 1,290',
          unit: 'per person',
          marker: 'III',
          features: [
            'Open cohort rate',
            'Payment plan available',
            '30-day follow-up kit',
            'Meals, lodging, and transfers from Cusco',
          ],
        },
      ],
    },
    pricingCard: {
      plan: 'Plan',
      before: 'Was',
      spotAvailable: 'spot available',
      spotsAvailable: 'spots available',
      reserveCta: 'Reserve my spot',
      reserveAriaPrefix: 'Book tier',
    },
    includesDetail: {
      eyebrow: 'What’s included',
      title: 'Every tier covers',
      titleEm: 'the essentials',
      titleEnd: ' of the experience.',
      lead: 'No hidden extras. No surprises. Everything you need to live two days without thinking about logistics is included.',
      groups: [
        {
          title: 'Lodging',
          description: 'Where the body rests.',
          items: [
            'Shared rooms for 2 people',
            'Private room available at additional cost',
            'Hot water',
          ],
        },
        {
          title: 'Cuisine',
          description: 'What sustains you at altitude.',
          items: [
            '3 meals + 2 snacks per day',
            'Local ingredients from the Sacred Valley',
            'Coca tea and natural herbs',
          ],
        },
        {
          title: 'Practices',
          description: 'Where the mind moves.',
          items: [
            'Guided yoga, breathwork, and meditation',
            'Mindful walks across the land',
            'Words circle around the fire',
          ],
        },
        {
          title: 'Follow-up',
          description: 'What comes after.',
          items: [
            'Pre-retreat welcome call',
            'Physical journal + practices ebook',
            'Group call at 7 days',
            'Virtual closing circle at 30 days',
          ],
        },
      ],
    },
    paymentInfo: {
      eyebrow: 'Booking',
      title: 'Book with',
      titleEm: '50% down.',
      lead: 'Secure your spot with 50% of your chosen tier. We confirm your place and coordinate the rest with you.',
      methodsEyebrow: 'Accepted methods',
      methodsDesc: 'We accept major local and international payment methods.',
      methods: ['Yape', 'Plin', 'Bank transfer', 'Cash USD'],
    },
    whatsappCta: {
      eyebrow: 'Faster on WhatsApp',
      title: 'Have a question?',
      titleEm: 'Write us.',
      sub: 'We reply within 2 hours, every day between 8am and 9pm (Lima/Cusco time).',
      btnLabel: 'Chat on WhatsApp',
      btnAria: 'Chat on WhatsApp',
      message:
        'Hi, I’m interested in the Mente que Sana retreat. Could you tell me more about upcoming dates?',
    },
    faqs: [
      {
        q: 'What if I cannot attend after booking?',
        a: 'If you notify us more than 21 days in advance, 80% is transferable to the next cohort. With less notice, 50% transfers. We do not issue cash refunds.',
      },
      {
        q: 'Is the retreat for yoga or meditation beginners?',
        a: 'Yes. Practices are designed for any level. No prior experience needed — only openness to live it in the body.',
      },
      {
        q: 'How do you handle altitude for people coming from sea level?',
        a: 'We recommend arriving in Cusco 24–48 hours early. We have a hydration protocol, oxygen available, and no demanding activities on day one.',
      },
      {
        q: 'Can I come with someone and share a room?',
        a: 'Yes. Rooms are doubles. If you come as a couple or with someone, tell us when booking so we can assign you together.',
      },
      {
        q: 'What kind of food is served?',
        a: 'Anti-inflammatory cuisine with a vegetarian base. We adapt for celiac, vegan, and specific allergies. Let us know when booking.',
      },
    ],
    },
  },
};
