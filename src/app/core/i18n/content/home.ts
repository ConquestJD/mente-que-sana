import type { Locale } from '../translations';

export const homeContent: Record<Locale, Record<string, unknown>> = {
  es: {
    home: {
    stickyNarrative: {
      eyebrow: 'Por qué este retiro',
      title: 'Tres puentes hacia',
      titleEm: 'la misma orilla.',
      lead:
        'Donde la ciencia más reciente y la sabiduría más antigua coinciden, ahí construimos la experiencia.',
      quote:
        'La depresión, la ansiedad y el dolor crónico son lenguajes del cuerpo cuando la mente no ha podido decir lo que necesita decir.',
      quoteAttrName: 'Dr. Bessel van der Kolk',
      quoteAttrRole: 'Psiquiatra · The Body Keeps the Score',
      cta: 'Conoce el programa completo',
      stages: [
        {
          eyebrow: '01 — Psiconeuroinmunología',
          title: 'Tu mente habla con tu sistema inmune.',
          body: 'El estrés crónico altera tu microbiota, eleva la inflamación y silencia tu vitalidad. La PNI nos enseña a revertirlo desde adentro.',
          badge: 'CIENCIA',
        },
        {
          eyebrow: '02 — Neurociencia',
          title: 'Tu cerebro cambia a cualquier edad.',
          body: 'La neuroplasticidad es la prueba: cada hábito nuevo reescribe circuitos. Lo que practicas con consciencia, se vuelve quien eres.',
          badge: 'PRÁCTICA',
        },
        {
          eyebrow: '03 — Sabiduría Andina',
          title: 'Mil años cuidando el espíritu.',
          body: 'La cosmovisión quechua entiende la salud como reciprocidad: con el cuerpo, con la tierra, con la comunidad. Ayni.',
          badge: 'TRADICIÓN',
        },
      ],
    },
    placePreview: {
      header: {
        eyebrow: 'El Lugar',
        title: 'Una terraza privada sobre el Valle Sagrado.',
        lead: 'Terreno familiar a 2,870 m s.n.m., con vista total a Cusco. Piedra, viento andino y silencio de altura.',
      },
      tablistAria: 'Espacios del lugar',
      spaces: [
        {
          index: '01',
          name: 'Mirador panorámico',
          caption: 'Vista total a Cusco',
          description: 'Terraza de piedra a 2,870 m. Cusco se ve completo, en silencio.',
          detail: 'Amanecer y atardecer · bancas de piedra · sin ruido',
        },
        {
          index: '02',
          name: 'Sala de yoga',
          caption: 'Madera y luz natural',
          description: 'Espacio cubierto con piso de madera y ventanal hacia el valle.',
          detail: 'Capacidad 12 · calefacción · esterillas incluidas',
        },
        {
          index: '03',
          name: 'Campo verde',
          caption: 'Pradera abierta',
          description: 'Tres hectáreas para prácticas al aire libre y caminatas conscientes.',
          detail: 'Apto para ceremonias · sin contaminación lumínica',
        },
        {
          index: '04',
          name: 'Comedor andino',
          caption: 'Mesa compartida',
          description: 'Mesa larga bajo techo de teja, calefacción a leña, cocina antiinflamatoria.',
          detail: '3 comidas + 2 infusiones · vegetariano + omnívoro local',
        },
        {
          index: '05',
          name: 'Zona de meditación',
          caption: 'Círculo de piedra',
          description: 'Espacio íntimo rodeado de árboles nativos para los círculos del retiro.',
          detail: 'Hoguera central · espacio cubierto y descubierto',
        },
      ],
      ctaTour: 'Recorrer el lugar completo',
      ctaReserve: 'Reservar mi lugar',
    },
    sedesPreview: {
      header: {
        eyebrow: 'Dos sedes',
        title: 'Un mismo programa,',
        titleEm: 'dos paisajes.',
        lead: 'Vive Mente que Sana donde más te resuene: la altura del Valle Sagrado o la calma luminosa del sur peruano.',
      },
      contrast: {
        urubamba: { num: '2,870', label: 'm · Valle Sagrado' },
        tacna: { num: '560', label: 'm · Sur sereno' },
      },
      badge: 'Sede insignia',
      cardCta: 'Conocer la sede',
      compareCta: 'Comparar las dos sedes',
      from: 'Desde',
    },
    datesPreview: {
      header: {
        eyebrow: 'Próximas fechas',
        title: 'Elige cuándo',
        titleEm: 'sembrar.',
        lead: 'Retiros alternados entre Urubamba y Tacna. Reserva con sede y fecha o explora el calendario completo.',
      },
      featuredLabel: 'Siguiente cohorte',
      reserveFeatured: 'Reservar esta fecha →',
      fullCalendar: 'Ver calendario completo',
    },
    quoteFeature: {
      quoteLine1: 'Llegué buscando descansar',
      quoteLine2: 'y volví con una forma distinta de',
      quoteEm: 'respirar.',
      attribution: 'Valentina Mendoza · Psicóloga clínica · Arequipa',
    },
    statsMarquee: {
      aria: 'Datos del retiro',
      items: [
        { number: '10', label: 'personas en círculo' },
        { number: '2', label: 'días vivenciales' },
        { number: '30', label: 'días de seguimiento' },
        { number: '2,870m', label: 'sobre el nivel del mar' },
        { number: '3', label: 'hectáreas privadas' },
        { number: '45m', label: 'desde Cusco' },
        { number: '12 años', label: 'de práctica del facilitador' },
      ],
    },
    timelinePreview: {
      header: {
        eyebrow: 'El recorrido',
        title: 'Dos días vividos ·',
        titleEm: 'treinta días sembrados.',
        lead: 'Cada hora del programa está diseñada para que el cuerpo y la mente se hablen de otra manera.',
      },
      stops: [
        {
          index: 'DÍA 1 · 15:00',
          title: 'Ceremonia del agua',
          description:
            'Llegamos. Limpia simbólica con agua de manantial. Te recibimos con una infusión andina y el círculo se forma por primera vez.',
        },
        {
          index: 'DÍA 1 · 18:00',
          title: 'Yoga + respiración consciente',
          description:
            'En la sala de piedra, abrimos cuerpo y respiración. Práctica restaurativa para aterrizar en el presente.',
        },
        {
          index: 'DÍA 1 · 21:00',
          title: 'Fuego y palabra honesta',
          description:
            'Círculo nocturno al aire libre con vista a las luces de Cusco. Cada quien deja algo en el fuego.',
        },
        {
          index: 'DÍA 2 · 06:30',
          title: 'Saludo al sol sobre el valle',
          description: 'Despertar con yoga dinámico mirando el amanecer sobre Pisac y Urubamba.',
        },
        {
          index: 'DÍA 2 · 14:00',
          title: 'Almuerzo en el campo',
          description: 'Mesa larga sobre la pradera, mirando el valle. Sabores locales, risas y silencios elegidos.',
        },
        {
          index: 'POST · 30 DÍAS',
          title: 'Acompañamiento sostenido',
          description:
            'Llamada grupal a los 7 días, micro-tareas diarias y círculo de cierre a los 30 días. No te dejamos solo.',
        },
      ],
      cta: 'Ver el programa hora a hora',
    },
    testimonialPreview: {
      header: {
        eyebrow: 'Voces',
        title: 'Sembradores que ya caminaron',
        titleEm: 'este sendero.',
      },
      items: [
        {
          text: 'Volví con un cuerpo que no conocía. Más despacio. Más mío.',
          who: 'Ricardo A.',
          role: 'Médico · Lima',
        },
        {
          text: 'El círculo curó cosas que la terapia individual no toca.',
          who: 'Andrés M.',
          role: 'Coach · Trujillo',
        },
        {
          text: 'Volví a mi aula sin gritar. Eso ya es transformación.',
          who: 'Liz C.',
          role: 'Maestra · Cusco',
        },
      ],
      cta: 'Ver todas las voces',
    },
    pricingPreview: {
      header: {
        eyebrow: 'Tarifas',
        title: 'Tres maneras de entrar al círculo.',
        lead: 'Solo 10 lugares. La tarifa Sembradores acompaña a la cohorte fundadora y no volverá a abrirse.',
      },
      strip: [
        { num: '10', label: 'Cupos totales' },
        { num: '3', label: 'Tarifas' },
        { num: '1', label: 'Cohorte fundadora' },
      ],
      tiers: [
        {
          key: 'sembradores',
          name: 'Sembradores',
          description: 'Cohorte fundadora — irrepetible.',
          price: 'S/ 890',
          spots: '2 / 3 cupos',
          marker: 'I',
          savings: '−36% vs regular',
          badge: 'IRREPETIBLE',
          scarcity: true,
        },
        {
          key: 'lanzamiento',
          name: 'Lanzamiento',
          description: 'Inscripción anticipada con beneficios.',
          price: 'S/ 1,090',
          spots: '3 / 4 cupos',
          marker: 'II',
          savings: '−22% vs regular',
          featured: true,
          badge: 'RECOMENDADA',
        },
        {
          key: 'regular',
          name: 'Regular',
          description: 'Tarifa de cohorte abierta.',
          price: 'S/ 1,390',
          spots: '2 / 3 cupos',
          marker: 'III',
        },
      ],
      ctaNote: 'Incluye alojamiento, comida, prácticas y traslado desde Cusco.',
      cta: 'Ver tarifas completas',
    },
    closingCta: {
      eyebrow: 'Tu siguiente paso',
      title: 'La cohorte fundadora',
      titleEm: 'se forma una sola vez.',
      sub: 'Diez personas. Dos días. Treinta días sostenidos. Una decisión que solo tú puedes tomar.',
      primaryCta: 'Reservar mi lugar',
      secondaryCta: 'Ver tarifas e inversión',
      strip: [
        { num: '7', label: 'de 10 cupos disponibles' },
        { num: '50%', label: 'reservas con plan de pagos' },
      ],
    },
    },
  },
  en: {
    home: {
    stickyNarrative: {
      eyebrow: 'Why this retreat',
      title: 'Three bridges to',
      titleEm: 'the same shore.',
      lead:
        'Where the latest science and the oldest wisdom meet — that is where we build the experience.',
      quote:
        'Depression, anxiety, and chronic pain are the body’s language when the mind has not been able to say what it needs to say.',
      quoteAttrName: 'Dr. Bessel van der Kolk',
      quoteAttrRole: 'Psychiatrist · The Body Keeps the Score',
      cta: 'Explore the full program',
      stages: [
        {
          eyebrow: '01 — Psychoneuroimmunology',
          title: 'Your mind speaks to your immune system.',
          body: 'Chronic stress alters your microbiome, raises inflammation, and quiets your vitality. PNI teaches us to reverse it from within.',
          badge: 'SCIENCE',
        },
        {
          eyebrow: '02 — Neuroscience',
          title: 'Your brain changes at any age.',
          body: 'Neuroplasticity is the proof: every new habit rewires circuits. What you practice with awareness becomes who you are.',
          badge: 'PRACTICE',
        },
        {
          eyebrow: '03 — Andean Wisdom',
          title: 'A thousand years caring for the spirit.',
          body: 'Quechua cosmology understands health as reciprocity: with the body, with the land, with community. Ayni.',
          badge: 'TRADITION',
        },
      ],
    },
    placePreview: {
      header: {
        eyebrow: 'The Place',
        title: 'A private terrace over the Sacred Valley.',
        lead: 'Family land at 2,870 m above sea level, with full views of Cusco. Stone, Andean wind, and the silence of altitude.',
      },
      tablistAria: 'Spaces at the location',
      spaces: [
        {
          index: '01',
          name: 'Panoramic lookout',
          caption: 'Full view of Cusco',
          description: 'Stone terrace at 2,870 m. Cusco in full view, in silence.',
          detail: 'Sunrise and sunset · stone benches · no noise',
        },
        {
          index: '02',
          name: 'Yoga hall',
          caption: 'Wood and natural light',
          description: 'Covered space with wooden floors and windows facing the valley.',
          detail: 'Capacity 12 · heating · mats included',
        },
        {
          index: '03',
          name: 'Green field',
          caption: 'Open meadow',
          description: 'Three hectares for outdoor practice and mindful walks.',
          detail: 'Suitable for ceremonies · no light pollution',
        },
        {
          index: '04',
          name: 'Andean dining room',
          caption: 'Shared table',
          description: 'Long table under a tile roof, wood heating, anti-inflammatory cuisine.',
          detail: '3 meals + 2 infusions · vegetarian + local omnivore options',
        },
        {
          index: '05',
          name: 'Meditation area',
          caption: 'Stone circle',
          description: 'Intimate space surrounded by native trees for the retreat circles.',
          detail: 'Central fire pit · covered and open-air space',
        },
      ],
      ctaTour: 'Tour the full location',
      ctaReserve: 'Reserve my spot',
    },
    sedesPreview: {
      header: {
        eyebrow: 'Two locations',
        title: 'One program,',
        titleEm: 'two landscapes.',
        lead: 'Experience Mente que Sana where it resonates most: the altitude of the Sacred Valley or the luminous calm of southern Peru.',
      },
      contrast: {
        urubamba: { num: '2,870', label: 'm · Sacred Valley' },
        tacna: { num: '560', label: 'm · Serene south' },
      },
      badge: 'Flagship location',
      cardCta: 'Explore this location',
      compareCta: 'Compare both locations',
      from: 'From',
    },
    datesPreview: {
      header: {
        eyebrow: 'Upcoming dates',
        title: 'Choose when to',
        titleEm: 'sow.',
        lead: 'Retreats alternate between Urubamba and Tacna. Book with location and date, or explore the full calendar.',
      },
      featuredLabel: 'Next cohort',
      reserveFeatured: 'Book this date →',
      fullCalendar: 'View full calendar',
    },
    quoteFeature: {
      quoteLine1: 'I came looking to rest',
      quoteLine2: 'and left with a different way of',
      quoteEm: 'breathing.',
      attribution: 'Valentina Mendoza · Clinical psychologist · Arequipa',
    },
    statsMarquee: {
      aria: 'Retreat facts',
      items: [
        { number: '10', label: 'people in the circle' },
        { number: '2', label: 'experiential days' },
        { number: '30', label: 'days of follow-up' },
        { number: '2,870m', label: 'above sea level' },
        { number: '3', label: 'private hectares' },
        { number: '45m', label: 'from Cusco' },
        { number: '12 years', label: 'of facilitator practice' },
      ],
    },
    timelinePreview: {
      header: {
        eyebrow: 'The journey',
        title: 'Two days lived ·',
        titleEm: 'thirty days sown.',
        lead: 'Every hour of the program is designed so body and mind speak to each other differently.',
      },
      stops: [
        {
          index: 'DAY 1 · 3:00 PM',
          title: 'Water ceremony',
          description:
            'We arrive. Symbolic cleansing with spring water. We welcome you with an Andean infusion and the circle forms for the first time.',
        },
        {
          index: 'DAY 1 · 6:00 PM',
          title: 'Yoga + conscious breathing',
          description:
            'In the stone hall, we open body and breath. Restorative practice to land in the present.',
        },
        {
          index: 'DAY 1 · 9:00 PM',
          title: 'Fire and honest words',
          description:
            'Outdoor night circle with views of Cusco’s lights. Each person leaves something in the fire.',
        },
        {
          index: 'DAY 2 · 6:30 AM',
          title: 'Sun salutation over the valley',
          description: 'Wake with dynamic yoga watching sunrise over Pisac and Urubamba.',
        },
        {
          index: 'DAY 2 · 2:00 PM',
          title: 'Lunch in the field',
          description: 'Long table on the meadow, facing the valley. Local flavors, laughter, and chosen silences.',
        },
        {
          index: 'POST · 30 DAYS',
          title: 'Sustained accompaniment',
          description:
            'Group call at 7 days, daily micro-tasks, and closing circle at 30 days. We do not leave you alone.',
        },
      ],
      cta: 'View the hour-by-hour program',
    },
    testimonialPreview: {
      header: {
        eyebrow: 'Voices',
        title: 'Sembradores who already walked',
        titleEm: 'this path.',
      },
      items: [
        {
          text: 'I came back with a body I did not know. Slower. More mine.',
          who: 'Ricardo A.',
          role: 'Physician · Lima',
        },
        {
          text: 'The circle heals things individual therapy does not touch.',
          who: 'Andrés M.',
          role: 'Coach · Trujillo',
        },
        {
          text: 'I returned to my classroom without shouting. That is transformation.',
          who: 'Liz C.',
          role: 'Teacher · Cusco',
        },
      ],
      cta: 'Read all voices',
    },
    pricingPreview: {
      header: {
        eyebrow: 'Pricing',
        title: 'Three ways to enter the circle.',
        lead: 'Only 10 spots. The Sembradores tier supports the founding cohort and will not open again.',
      },
      strip: [
        { num: '10', label: 'Total spots' },
        { num: '3', label: 'Tiers' },
        { num: '1', label: 'Founding cohort' },
      ],
      tiers: [
        {
          key: 'sembradores',
          name: 'Sembradores',
          description: 'Founding cohort — once only.',
          price: 'S/ 890',
          spots: '2 / 3 spots',
          marker: 'I',
          savings: '−36% vs regular',
          badge: 'ONCE ONLY',
          scarcity: true,
        },
        {
          key: 'lanzamiento',
          name: 'Launch',
          description: 'Early registration with benefits.',
          price: 'S/ 1,090',
          spots: '3 / 4 spots',
          marker: 'II',
          savings: '−22% vs regular',
          featured: true,
          badge: 'RECOMMENDED',
        },
        {
          key: 'regular',
          name: 'Regular',
          description: 'Open cohort rate.',
          price: 'S/ 1,390',
          spots: '2 / 3 spots',
          marker: 'III',
        },
      ],
      ctaNote: 'Includes lodging, meals, practices, and transfer from Cusco.',
      cta: 'View full pricing',
    },
    closingCta: {
      eyebrow: 'Your next step',
      title: 'The founding cohort',
      titleEm: 'forms only once.',
      sub: 'Ten people. Two days. Thirty days sustained. A decision only you can make.',
      primaryCta: 'Reserve my spot',
      secondaryCta: 'View pricing & investment',
      strip: [
        { num: '7', label: 'of 10 spots available' },
        { num: '50%', label: 'bookings with payment plans' },
      ],
    },
    },
  },
};
