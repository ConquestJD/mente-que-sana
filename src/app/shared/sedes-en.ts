import type { Sede } from './sedes';

type SedeTextOverlay = Partial<Omit<Sede, 'slug' | 'coords' | 'heroImage' | 'whatsapp' | 'facilitator' | 'place'>> & {
  facilitator?: { role: string };
  place?: Partial<
    Omit<
      Sede['place'],
      | 'establishImage'
      | 'panoramaImage'
      | 'atmosphereBg'
      | 'gallerySpaces'
      | 'stats'
      | 'senses'
      | 'travelSteps'
      | 'climate'
      | 'atmosphereHeadline'
    >
  > & {
    gallerySpaces?: Partial<Omit<Sede['place']['gallerySpaces'][number], 'image'>>[];
    stats?: Partial<Sede['place']['stats'][number]>[];
    senses?: Partial<Sede['place']['senses'][number]>[];
    travelSteps?: Partial<Sede['place']['travelSteps'][number]>[];
    climate?: Partial<Sede['place']['climate'][number]>[];
    atmosphereHeadline?: Partial<Sede['place']['atmosphereHeadline'][number]>[];
  };
};

export const SEDE_EN_OVERLAYS: Record<string, SedeTextOverlay> = {
  urubamba: {
    region: 'Sacred Valley, Cusco',
    tagline: 'The flagship retreat, overlooking the Sacred Valley.',
    intro:
      'A panoramic view of the Sacred Valley, ancient stone walls, and a green field where time moves more slowly.',
    heroEyebrow: 'The Place · Urubamba',
    heroTitle: 'A family homestead above the Sacred Valley.',
    heroSubtitle:
      'A panoramic view of the Sacred Valley, ancient stone walls, and a green field where time moves more slowly.',
    ambiance:
      'Golden sunrises over the cordillera, the silence of altitude, and the scent of eucalyptus. The place where Mente que Sana was born.',
    altitude: '2,870 m a.s.l.',
    climate: 'Highland temperate · sunny days, cold nights',
    distance: '45 min from Cusco · 50 min from the airport (CUZ)',
    highlights: [
      '180° panoramic lookout over Cusco',
      'Yoga room with floor-to-ceiling windows facing the valley',
      '3.2 ha green field and fire circle area',
      'Andean dining room with anti-inflammatory cuisine',
    ],
    mapQuery: 'Yachaytambo Cusco',
    nextDate: 'Next date to be confirmed',
    facilitator: {
      role: 'General and Oncological Surgeon · Gynecologic Oncologist · Minimally Invasive Colorectal Surgery Specialist',
    },
    priceFrom: 'S/ 790',
    place: {
      establish: {
        eyebrow: 'The Tour',
        title: 'Next,',
        titleEm: 'the house opens.',
        lead: 'Six real spaces in the Sacred Valley: patios with views of the cordillera, garden, wood-paneled hall, and simple rooms where you inhabit the retreat.',
      },
      panoramaEyebrow: '2,870 m · 13°31\'S · Sacred Valley',
      panoramaTitle: 'A family homestead',
      panoramaTitleEm: 'above the Sacred Valley.',
      stats: [
        { value: '2,870', label: 'meters a.s.l.', hint: 'Altitude that expands awareness and breath.' },
        { value: '45 min', label: 'from Cusco', hint: 'Via the scenic route to the Sacred Valley.' },
        { value: '360°', label: 'panoramic view', hint: 'Cusco to the north, Urubamba to the south.' },
      ],
      galleryIntro: {
        eyebrow: 'The Spaces',
        title: 'Six places.',
        titleEm: 'One shared intention.',
        lead: 'Every corner of Yachaytambo has a role in the retreat. Swipe through the venue one by one, as if you were walking the grounds.',
      },
      gallerySpaces: [
        {
          category: 'The setting',
          name: 'View of the cordillera',
          lead: 'The snow-capped peaks of the Sacred Valley from the retreat patio.',
          body: 'An adobe and tile patio with a direct view of the cordillera. The first moment of the retreat: an open sky, the silence of altitude, and snow-covered mountains in the distance.',
          highlights: ['View of the Andean snow peaks', 'Private patio with lawn', 'Meeting point on arrival'],
          meta: [{ label: 'Orientation', value: 'Sacred Valley' }, { label: 'Best time', value: '06:00 — 08:00' }],
        },
        {
          category: 'The practice',
          name: 'Practice garden',
          lead: 'Outdoor practice among flowers and adobe walls.',
          body: 'A garden path lined with roses and brick leading to a green space for stretching, breathing, and moving the body. The mountain stays in the background while the cohort practices.',
          highlights: ['Outdoor practice', 'Green, quiet surroundings', 'Room for 10 mats'],
          meta: [{ label: 'Surface', value: 'Open garden' }, { label: 'Capacity', value: '10 people' }],
        },
        {
          category: 'The heart of the place',
          name: 'Central patio',
          lead: 'Flowers, lawn, and colonial tile under the valley sky.',
          body: 'The patio that holds the house together: grass underfoot, bougainvillea in bloom, and stone walls framing the space. Here you walk slowly between sessions and breathe before the circle.',
          highlights: ['Central patio with garden', 'Andean stone walls', 'Transition and rest space'],
          meta: [{ label: 'Use', value: 'Rest and walking' }, { label: 'Setting', value: 'Outdoors' }],
        },
        {
          category: 'The welcome',
          name: 'Entrance portal',
          lead: 'The doorway where the retreat truly begins.',
          body: 'Wooden doors and stained glass that greet the group at dusk. The warm interior light anticipates the circle and the honest conversation that follows.',
          highlights: ['Main access to the retreat', 'Warm welcome light', 'First contact with the space'],
          meta: [{ label: 'Use', value: 'Welcome and circle' }, { label: 'Capacity', value: '12 people' }],
        },
        {
          category: 'The table',
          name: 'Dining hall',
          lead: 'Stone, wood, and overhead light above the shared table.',
          body: 'A double-height hall with a stone wall, wooden skylight, and a table where the cohort eats together. Light pours in from above while the body is restored with food from the valley.',
          highlights: ['Original stone wall', 'Natural wood skylight', 'Shared table for the cohort'],
          meta: [{ label: 'Meals', value: '5 per retreat' }, { label: 'Origin', value: 'Sacred Valley' }],
        },
        {
          category: 'Rest',
          name: 'Bedrooms',
          lead: 'Simple, warm rest without distractions.',
          body: 'Shared double rooms with wool bedding, natural wood, and soft light. Rest is part of the retreat: this is where you sleep deeply after the circle.',
          highlights: ['Natural bedding', 'Warm, quiet atmosphere', 'No screens or WiFi in bedrooms'],
          meta: [{ label: 'Type', value: 'Shared double' }, { label: 'Bathroom', value: 'Shared / private' }],
        },
      ],
      atmosphereHeadline: [
        { text: 'Here you smell ' },
        { text: 'cold firewood', em: true },
        { text: ' in the morning, hear the wind coming down from Ausangate, and see the stars with a clarity ' },
        { text: 'that reminds you why the mind needs silence.', em: true },
      ],
      atmosphereSubtitle:
        'It is not a hotel. It is a family home of stone and clay, adapted so ten people can inhabit two days with care, warmth, and a level of presence rarely allowed in the city.',
      senses: [
        { label: 'Smell', text: 'Eucalyptus, fresh muña, slow-burning firewood.' },
        { label: 'Sound', text: 'Wind, crackling fire, long silences.' },
        { label: 'Touch', text: 'Cold stone at dawn, warm wool at dusk.' },
        { label: 'Sight', text: 'Open cordillera, sky without light pollution.' },
      ],
      travelSteps: [
        { index: '01', title: 'Arrive in Cusco', description: 'Flight or bus to the imperial city. We recommend arriving at least 24h early to acclimatize.' },
        { index: '02', title: 'We pick you up', description: 'Meeting point at Plaza de Armas at 1:30 p.m. Private transport included.' },
        { index: '03', title: 'Scenic drive', description: '45 minutes along the Sacred Valley route, watching the cordillera open before you.' },
        { index: '04', title: 'Welcome on the grounds', description: 'Arrival at the retreat, hot infusion, and orientation. The circle begins.' },
      ],
      climate: [
        { label: 'Day', value: '18-22°C', hint: 'Intense sun; bring protection.' },
        { label: 'Night', value: '4-8°C', hint: 'Dry cold. We recommend warm layers.' },
        { label: 'Humidity', value: '40%', hint: 'Hydration is important at altitude.' },
      ],
      climateTitle: 'High-altitude climate',
      climateNote:
        'We recommend arriving in Cusco 24 to 48 hours in advance. If you have cardiac or respiratory conditions, write to us and we will talk before you book.',
    },
  },
  tacna: {
    region: 'Southern Peru',
    tagline: 'The serene south, between desert and sun.',
    intro:
      'A bright space in the south of the country, with clear skies and wide horizons, ideal for a warm, restorative pause.',
    heroEyebrow: 'The Place · Tacna',
    heroTitle: 'Southern light, deep calm.',
    heroSubtitle:
      'A bright space in the south of the country, with clear skies and wide horizons, ideal for a warm, restorative pause.',
    ambiance:
      'Clean light, mild climate, and the calm of the south. Room to breathe deeply.',
    altitude: '560 m a.s.l.',
    climate: 'Dry temperate · clear skies year-round',
    distance: '10 min from the airport (TCQ) · city of Tacna',
    highlights: [
      'Spacious, light-filled rooms',
      'Stable, sunny climate',
      'Quiet surroundings for rest',
      'Seasonal healthy cuisine',
    ],
    mapQuery: 'Tacna, Peru',
    nextDate: 'Next date to be confirmed',
    facilitator: {
      role: 'Clinical facilitation + guided support',
    },
    priceFrom: 'S/ 790',
    place: {
      establish: {
        eyebrow: 'The Tour',
        title: 'Next,',
        titleEm: 'the space opens.',
        lead: 'Five bright spaces in the south: garden, hall, circle room, dining room, and bedrooms under clear skies all year.',
      },
      panoramaEyebrow: '560 m · 18°00\'S · Southern Peru',
      panoramaTitle: 'A space of light',
      panoramaTitleEm: 'in the serene south.',
      stats: [
        { value: '560', label: 'meters a.s.l.', hint: 'Mild climate, no extreme altitude.' },
        { value: '10 min', label: 'from the airport', hint: 'Direct access from Coronel FAP (TCQ).' },
        { value: '300+', label: 'days of sun per year', hint: 'Clear skies and steady light.' },
        { value: 'Garden', label: 'and spacious halls', hint: 'Open spaces for practice and rest.' },
      ],
      galleryIntro: {
        eyebrow: 'The Spaces',
        title: 'Five places.',
        titleEm: 'One shared intention.',
        lead: 'Every corner of the Tacna venue has its purpose. Swipe through the retreat spaces in the south, one by one.',
      },
      gallerySpaces: [
        {
          category: 'The garden',
          name: 'Sunny garden',
          lead: 'Outdoor practice under the southern sky.',
          body: 'A spacious garden with lawn, fruit trees, and natural shade. The main space for morning yoga, mindful walking, and quiet moments in the sun.',
          highlights: ['300 m² private garden', 'Natural tree shade', 'Sunrise practice included'],
          meta: [{ label: 'Surface', value: '300 m²' }, { label: 'Use', value: 'Yoga and walking' }],
        },
        {
          category: 'The practice',
          name: 'Yoga hall',
          lead: 'Abundant light, clean air, a present body.',
          body: 'A bright hall with north-facing windows and a wooden floor. The southern light pours in generously and supports practice throughout the day.',
          highlights: ['North-facing windows', 'Wooden floor', 'Natural cross-ventilation'],
          meta: [{ label: 'Surface', value: '75 m²' }, { label: 'Capacity', value: '10 people' }],
        },
        {
          category: 'The center',
          name: 'Circle room',
          lead: 'Intimacy for shared conversation.',
          body: 'A welcoming space with seats in a full circle and soft light. Designed for the retreat\'s deep conversations and group work in a warm, contained atmosphere.',
          highlights: ['Full circle seating', 'Adjustable lighting', 'Comfortable temperature'],
          meta: [{ label: 'Capacity', value: '10 people' }, { label: 'Use', value: 'Group circle' }],
        },
        {
          category: 'The table',
          name: 'Southern dining room',
          lead: 'Healthy cuisine with local products.',
          body: 'A long table with products from the Tacna valley and the southern coast. Anti-inflammatory menu emphasizing vegetables, legumes, and fresh fish from the region.',
          highlights: ['Products from the Tacna valley', 'Anti-inflammatory menu', 'Vegetarian and fish options'],
          meta: [{ label: 'Meals', value: '5 per retreat' }, { label: 'Origin', value: 'Tacna and southern coast' }],
        },
        {
          category: 'The terrace',
          name: 'Sunset terrace',
          lead: 'The southern sky lights up at dusk.',
          body: 'A raised terrace with views of the southern hills. A meeting point for the fire circle, sunset contemplation, and quiet moments at the end of the day.',
          highlights: ['Panoramic sunset view', 'Fire pit for evening circle', 'Hammocks and rest area'],
          meta: [{ label: 'Best time', value: '17:30 — 19:00' }, { label: 'Use', value: 'Fire circle' }],
        },
      ],
      atmosphereHeadline: [
        { text: 'Here the light is ' },
        { text: 'generous and clear', em: true },
        { text: ', the air is dry and warm, and the silence of the south ' },
        { text: 'invites you to let go of what you no longer need.', em: true },
      ],
      atmosphereSubtitle:
        'A family space in the south of the country, adapted for ten people. No unnecessary luxury: warmth, light, and the calm the desert teaches.',
      senses: [
        { label: 'Smell', text: 'Dry air, valley herbs, sun-warmed earth.' },
        { label: 'Sound', text: 'Gentle wind, southern birds, wide silences.' },
        { label: 'Touch', text: 'Mild sun, dry breeze, warm wood to the touch.' },
        { label: 'Sight', text: 'Clear sky, distant hills, intense sunsets.' },
      ],
      travelSteps: [
        { index: '01', title: 'Arrive in Tacna', description: 'Flight from Lima (1h 40min) or bus from the south of the country.' },
        { index: '02', title: 'We pick you up', description: 'Meeting at Coronel FAP Airport (TCQ) or in the city.' },
        { index: '03', title: 'Short transfer', description: '10 minutes from the airport to the venue.' },
        { index: '04', title: 'Welcome', description: 'Infusion, orientation, and circle formation. The retreat begins.' },
      ],
      climate: [
        { label: 'Day', value: '22-28°C', hint: 'Steady sun. Sun protection recommended.' },
        { label: 'Night', value: '12-16°C', hint: 'Mild. A light layer is enough.' },
        { label: 'Humidity', value: '35%', hint: 'Dry air. Drink water frequently.' },
      ],
      climateTitle: 'Southern climate',
      climateNote:
        'Tacna has stable weather year-round. If you have conditions that require special attention, write to us before booking.',
    },
  },
};
