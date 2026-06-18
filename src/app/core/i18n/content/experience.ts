import type { Locale } from '../translations';

export const experienceContent: Record<Locale, Record<string, unknown>> = {
  es: {
    experience: {
    introScience: {
      eyebrow: 'El punto de partida',
      title: 'El dolor que cargas',
      titleEm: 'no es tuyo solamente',
      titleEnd: ', es de una mente que aún no encontró dónde descansar.',
      photoCaptionLabel: 'Mente · Cuerpo',
      photoCaption: 'Una sola fisiología, un solo lenguaje.',
      badgeEyebrow: 'Diseño del programa',
      badgeText: '3 disciplinas · 1 propósito',
      paragraphs: [
        'La psiconeuroinmunología demostró lo que tu cuerpo ya sospechaba: el estrés crónico no es un estado emocional, es una inflamación silenciosa que altera tu microbiota, tu sueño y la forma en que percibes el mundo.',
        'La neuroplasticidad te devuelve la autoridad: cada práctica sostenida — respiración, atención, comunidad, naturaleza — reescribe los circuitos que aprendiste a la fuerza. Sanar no es un milagro: es repetición consciente.',
        'Y la sabiduría andina añade lo que la ciencia recién está recordando: el cuerpo se ordena en círculo, con otros, en la tierra que pisa.',
      ],
      stats: [
        { number: '70%', label: 'de la serotonina vive en tu intestino' },
        { number: '21 días', label: 'consolidan un nuevo hábito neural' },
        { number: '2,870m', label: 'la altitud que expande tu fisiología' },
      ],
    },
    experienceIntent: {
      eyebrow: 'Tres movimientos',
      title: 'Lo que viene a',
      titleEm: 'cambiar',
      titleEnd: ' viene en tres pasos.',
      pillars: [
        {
          index: '01',
          title: 'Reconocer',
          body: 'Antes de cambiar nada, hay que mirarse sin pelearse. El primer día te recibimos para que el cuerpo se acuerde de que está cansado — y de que tiene permiso para descansar.',
        },
        {
          index: '02',
          title: 'Transformar',
          body: 'El segundo día practicamos. Yoga, respiración, neurociencia aplicada y palabra honesta. No se trata de aprender — se trata de vivirlo lo suficiente para que el cuerpo recuerde el camino.',
        },
        {
          index: '03',
          title: 'Sembrar',
          body: 'Treinta días después del retiro seguimos contigo. Una llamada grupal, una bitácora, un cierre. Porque la mente nueva necesita testigos que confirmen que no era un sueño.',
        },
      ],
    },
    includesGrid: {
      eyebrow: 'Todo está cuidado',
      title: 'Lo que incluye el retiro ·',
      titleEm: 'todo.',
      lead: 'Diseñado para que sólo tengas que estar presente. La logística, la mesa, la cama y el silencio: nosotros los preparamos.',
      stripNum: '8',
      stripText: 'elementos incluidos · logística cero · solo presencia',
      items: [
        {
          title: 'Alojamiento de altura',
          description: 'Habitaciones de piedra con ropa de cama natural y vista al valle.',
        },
        {
          title: 'Cocina viva',
          description: 'Tres comidas + colaciones con ingredientes locales y opciones veganas.',
        },
        {
          title: 'Prácticas de cuerpo',
          description: 'Yoga restaurativo, respiración y meditación guiadas.',
        },
        {
          title: 'Círculo de fuego',
          description: 'Noche de palabra honesta alrededor del fuego, con vista a Cusco.',
        },
        {
          title: 'Material físico',
          description: 'Cuaderno de bitácora, mapa de hábitos y carta a los 30 días.',
        },
        {
          title: 'Círculo íntimo',
          description: 'Sólo 10 personas — un círculo donde nadie es invisible.',
        },
        {
          title: 'Acompañamiento 30 días',
          description: 'Llamadas grupales y micro-tareas para sostener la transformación.',
        },
        {
          title: 'Atención previa',
          description: 'Llamada de bienvenida para conocernos antes del retiro.',
        },
      ],
    },
    programTimeline: {
      eyebrow: 'Recorrido',
      title: 'Dos días vividos ·',
      titleEm: 'treinta sembrados.',
      lead: 'Cada hora del programa está diseñada para que cuerpo y mente se hablen de otra manera.',
      strip: [
        { num: '2', label: 'Días en sede' },
        { num: '30', label: 'Días de seguimiento' },
        { num: '14', label: 'Momentos del programa' },
      ],
      days: [
        {
          label: 'Día 1',
          title: 'Reconocer',
          intent: 'Aterrizar en el cuerpo. Mirar lo que cargas sin pelearlo.',
          highlight: '5 actividades · de 15:00 a 22:00',
          activities: [
            {
              time: '15:00',
              title: 'Llegada y ceremonia del agua',
              description:
                'Recepción con infusión andina, presentación del círculo y limpia simbólica con agua de manantial.',
              tag: 'Apertura',
            },
            {
              time: '16:30',
              title: 'Marco PNI: cuerpo-mente-comunidad',
              description: 'Sesión teórico-vivencial. Mapeamos cómo tu historia se aloja en tu fisiología.',
              tag: 'Ciencia',
            },
            {
              time: '18:00',
              title: 'Yoga restaurativo + respiración consciente',
              description: 'Práctica suave para reconectar con la respiración profunda en la sala de piedra.',
              tag: 'Cuerpo',
            },
            {
              time: '19:30',
              title: 'Cena andina compartida',
              description: 'Comida ceremonial con ingredientes locales y tiempo lento de conversación.',
              tag: 'Comunidad',
            },
            {
              time: '21:00',
              title: 'Fuego sagrado y palabra honesta',
              description:
                'Círculo nocturno al aire libre con vista a las luces de Cusco. Cada quien deja algo en el fuego.',
              tag: 'Ritual',
            },
          ],
        },
        {
          label: 'Día 2',
          title: 'Transformar',
          intent: 'Practicar la mente nueva. Sembrar el hábito que sostiene.',
          highlight: '6 actividades · de 06:30 a 17:30',
          activities: [
            {
              time: '06:30',
              title: 'Saludo al sol sobre el valle',
              description: 'Despertar con yoga dinámico mirando amanecer sobre Pisac y Urubamba.',
              tag: 'Inicio',
            },
            {
              time: '08:00',
              title: 'Desayuno funcional',
              description: 'Alimentación antiinflamatoria con productos de la zona y café especial.',
              tag: 'Nutrición',
            },
            {
              time: '09:30',
              title: 'Neurociencia del hábito y plan personal',
              description: 'Diseñamos tu protocolo de 30 días con base en evidencia y tu historia.',
              tag: 'Estrategia',
            },
            {
              time: '14:00',
              title: 'Almuerzo en el campo',
              description: 'Mesa larga sobre la pradera. Sabores, risas, silencios elegidos.',
              tag: 'Pausa',
            },
            {
              time: '16:00',
              title: 'Integración: tu carta a los 30 días',
              description: 'Escritura guiada que te entregas a ti mismo cuando termine el ciclo.',
              tag: 'Cierre',
            },
            {
              time: '17:30',
              title: 'Ceremonia de cierre y despedida',
              description: 'Compromiso colectivo y entrega del kit de seguimiento.',
              tag: 'Sello',
            },
          ],
        },
        {
          label: 'Post-retiro',
          title: '30 días sembrando',
          intent: 'No te dejamos solo. La mente nueva necesita testigos.',
          highlight: 'Llamadas grupales · bitácora · cierre',
          activities: [
            {
              time: 'Semana 1',
              title: 'Llamada grupal de integración',
              description: 'Encuentro virtual a los 7 días para sostener lo aprendido.',
              tag: 'Acompañamiento',
            },
            {
              time: 'Semana 2-3',
              title: 'Plan personal en práctica',
              description: 'Micro-tareas diarias con recordatorios suaves y bitácora compartida.',
              tag: 'Hábito',
            },
            {
              time: 'Día 30',
              title: 'Círculo de cierre 30 días',
              description: 'Volvemos a reunirnos a leer la carta y celebrar el camino recorrido.',
              tag: 'Sello',
            },
          ],
        },
      ],
    },
    },
  },
  en: {
    experience: {
    introScience: {
      eyebrow: 'The starting point',
      title: 'The pain you carry',
      titleEm: 'is not yours alone',
      titleEnd: ' — it belongs to a mind that has not yet found where to rest.',
      photoCaptionLabel: 'Mind · Body',
      photoCaption: 'One physiology, one language.',
      badgeEyebrow: 'Program design',
      badgeText: '3 disciplines · 1 purpose',
      paragraphs: [
        'Psychoneuroimmunology confirmed what your body already suspected: chronic stress is not an emotional state — it is silent inflammation that alters your microbiome, your sleep, and the way you perceive the world.',
        'Neuroplasticity returns authority to you: every sustained practice — breath, attention, community, nature — rewires the circuits you learned under pressure. Healing is not a miracle: it is conscious repetition.',
        'And Andean wisdom adds what science is only now remembering: the body finds order in circle, with others, on the land beneath your feet.',
      ],
      stats: [
        { number: '70%', label: 'of serotonin lives in your gut' },
        { number: '21 days', label: 'to consolidate a new neural habit' },
        { number: '2,870m', label: 'the altitude that expands your physiology' },
      ],
    },
    experienceIntent: {
      eyebrow: 'Three movements',
      title: 'What comes to',
      titleEm: 'change',
      titleEnd: ' arrives in three steps.',
      pillars: [
        {
          index: '01',
          title: 'Recognize',
          body: 'Before changing anything, you must look at yourself without fighting. On the first day we receive you so the body remembers it is tired — and that it has permission to rest.',
        },
        {
          index: '02',
          title: 'Transform',
          body: 'On the second day we practice. Yoga, breath, applied neuroscience, and honest words. It is not about learning — it is about living it long enough for the body to remember the way.',
        },
        {
          index: '03',
          title: 'Sow',
          body: 'Thirty days after the retreat we stay with you. A group call, a journal, a closing. Because the new mind needs witnesses to confirm it was not a dream.',
        },
      ],
    },
    includesGrid: {
      eyebrow: 'Everything is cared for',
      title: 'What the retreat includes ·',
      titleEm: 'everything.',
      lead: 'Designed so you only need to be present. Logistics, meals, bed, and silence — we prepare them.',
      stripNum: '8',
      stripText: 'included elements · zero logistics · just presence',
      items: [
        {
          title: 'High-altitude lodging',
          description: 'Stone rooms with natural bedding and valley views.',
        },
        {
          title: 'Living cuisine',
          description: 'Three meals + snacks with local ingredients and vegan options.',
        },
        {
          title: 'Body practices',
          description: 'Restorative yoga, breathwork, and guided meditation.',
        },
        {
          title: 'Fire circle',
          description: 'An evening of honest words around the fire, with views of Cusco.',
        },
        {
          title: 'Physical materials',
          description: 'Journal notebook, habit map, and letter to your 30-day self.',
        },
        {
          title: 'Intimate circle',
          description: 'Only 10 people — a circle where no one is invisible.',
        },
        {
          title: '30-day accompaniment',
          description: 'Group calls and micro-tasks to sustain the transformation.',
        },
        {
          title: 'Pre-retreat care',
          description: 'Welcome call to get to know each other before the retreat.',
        },
      ],
    },
    programTimeline: {
      eyebrow: 'The journey',
      title: 'Two days lived ·',
      titleEm: 'thirty sown.',
      lead: 'Every hour of the program is designed so body and mind speak to each other differently.',
      strip: [
        { num: '2', label: 'Days on site' },
        { num: '30', label: 'Days of follow-up' },
        { num: '14', label: 'Program moments' },
      ],
      days: [
        {
          label: 'Day 1',
          title: 'Recognize',
          intent: 'Land in the body. Look at what you carry without fighting it.',
          highlight: '5 activities · 3:00 PM to 10:00 PM',
          activities: [
            {
              time: '3:00 PM',
              title: 'Arrival and water ceremony',
              description:
                'Welcome with Andean infusion, circle introduction, and symbolic cleansing with spring water.',
              tag: 'Opening',
            },
            {
              time: '4:30 PM',
              title: 'PNI framework: body-mind-community',
              description: 'Theory-and-experience session. We map how your story lives in your physiology.',
              tag: 'Science',
            },
            {
              time: '6:00 PM',
              title: 'Restorative yoga + conscious breathing',
              description: 'Gentle practice to reconnect with deep breath in the stone hall.',
              tag: 'Body',
            },
            {
              time: '7:30 PM',
              title: 'Shared Andean dinner',
              description: 'Ceremonial meal with local ingredients and slow conversation.',
              tag: 'Community',
            },
            {
              time: '9:00 PM',
              title: 'Sacred fire and honest words',
              description:
                'Outdoor night circle with views of Cusco’s lights. Each person leaves something in the fire.',
              tag: 'Ritual',
            },
          ],
        },
        {
          label: 'Day 2',
          title: 'Transform',
          intent: 'Practice the new mind. Sow the habit that sustains.',
          highlight: '6 activities · 6:30 AM to 5:30 PM',
          activities: [
            {
              time: '6:30 AM',
              title: 'Sun salutation over the valley',
              description: 'Wake with dynamic yoga watching sunrise over Pisac and Urubamba.',
              tag: 'Start',
            },
            {
              time: '8:00 AM',
              title: 'Functional breakfast',
              description: 'Anti-inflammatory food with local products and specialty coffee.',
              tag: 'Nutrition',
            },
            {
              time: '9:30 AM',
              title: 'Neuroscience of habit and personal plan',
              description: 'We design your 30-day protocol based on evidence and your story.',
              tag: 'Strategy',
            },
            {
              time: '2:00 PM',
              title: 'Lunch in the field',
              description: 'Long table on the meadow. Flavors, laughter, chosen silences.',
              tag: 'Pause',
            },
            {
              time: '4:00 PM',
              title: 'Integration: your letter to day 30',
              description: 'Guided writing you deliver to yourself when the cycle ends.',
              tag: 'Closing',
            },
            {
              time: '5:30 PM',
              title: 'Closing ceremony and farewell',
              description: 'Collective commitment and delivery of the follow-up kit.',
              tag: 'Seal',
            },
          ],
        },
        {
          label: 'Post-retreat',
          title: '30 days of sowing',
          intent: 'We do not leave you alone. The new mind needs witnesses.',
          highlight: 'Group calls · journal · closing',
          activities: [
            {
              time: 'Week 1',
              title: 'Group integration call',
              description: 'Virtual gathering at 7 days to sustain what was learned.',
              tag: 'Accompaniment',
            },
            {
              time: 'Weeks 2–3',
              title: 'Personal plan in practice',
              description: 'Daily micro-tasks with gentle reminders and shared journal.',
              tag: 'Habit',
            },
            {
              time: 'Day 30',
              title: '30-day closing circle',
              description: 'We reunite to read the letter and celebrate the path traveled.',
              tag: 'Seal',
            },
          ],
        },
      ],
    },
    },
  },
};
