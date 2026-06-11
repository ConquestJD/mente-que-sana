/**
 * Sedes registry — Yachaytambo
 *
 * Cada sede incluye el contenido completo de su vista inmersiva (/sedes/:slug).
 */

import { IMG } from './images';

export interface SedeStat {
  value: string;
  label: string;
  hint: string;
}

export interface SedeGallerySpace {
  category: string;
  name: string;
  lead: string;
  body: string;
  highlights: string[];
  meta: { label: string; value: string }[];
  image: string;
}

export interface SedeSense {
  label: string;
  text: string;
}

export interface SedeTravelStep {
  index: string;
  title: string;
  description: string;
}

export interface SedeClimate {
  label: string;
  value: string;
  hint: string;
}

export interface TextSegment {
  text: string;
  em?: boolean;
}

export interface SedeFacilitator {
  name: string;
  role: string;
  portrait: string;
}

export interface SedePlaceContent {
  establishImage: string;
  panoramaImage: string;
  panoramaEyebrow: string;
  panoramaTitle: string;
  panoramaTitleEm: string;
  stats: SedeStat[];
  gallerySpaces: SedeGallerySpace[];
  atmosphereBg: string;
  atmosphereHeadline: TextSegment[];
  atmosphereSubtitle: string;
  senses: SedeSense[];
  travelSteps: SedeTravelStep[];
  climate: SedeClimate[];
  climateTitle: string;
  climateNote: string;
}

export interface Sede {
  slug: string;
  city: string;
  region: string;
  flagship: boolean;
  status: 'open' | 'soon';
  tagline: string;
  intro: string;
  heroEyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  ambiance: string;
  altitude: string;
  climate: string;
  distance: string;
  highlights: string[];
  coords: { lat: number; lng: number };
  mapQuery: string;
  nextDate: string;
  facilitator: SedeFacilitator;
  whatsapp: string;
  priceFrom: string;
  place: SedePlaceContent;
}

export const SEDES: Sede[] = [
  {
    slug: 'urubamba',
    city: 'Urubamba',
    region: 'Valle Sagrado, Cusco',
    flagship: true,
    status: 'open',
    tagline: 'La sede insignia, sobre el Valle Sagrado.',
    intro:
      'Una mirada panorámica a Cusco, paredes de piedra antigua y un campo verde donde el tiempo se mueve más despacio.',
    heroEyebrow: 'El Lugar · Urubamba',
    heroTitle: 'Terreno familiar sobre el Valle Sagrado.',
    heroSubtitle:
      'Una mirada panorámica a Cusco, paredes de piedra antigua y un campo verde donde el tiempo se mueve más despacio.',
    heroImage: IMG.urubambaFachada,
    ambiance:
      'Amaneceres dorados sobre la cordillera, silencio de altura y el aroma del eucalipto. El lugar donde nació Mente que Sana.',
    altitude: '2,870 m s.n.m.',
    climate: 'Templado de altura · días soleados, noches frías',
    distance: '45 min desde Cusco · 50 min del aeropuerto (CUZ)',
    highlights: [
      'Mirador panorámico de 180° sobre Cusco',
      'Sala de yoga con ventanal al valle',
      'Campo verde de 3.2 ha y zona de fuego',
      'Comedor andino con cocina antiinflamatoria',
    ],
    coords: { lat: -13.5200517, lng: -71.934648 },
    mapQuery: 'Yachaytambo Cusco',
    nextDate: 'Próxima fecha por confirmar',
    facilitator: {
      name: 'Armando Huamán Naula',
      role: 'Cirujano General y Oncológico · Ginecólogo Oncólogo · Especialista en Cirugía Colorrectal Mínimamente Invasiva',
      portrait: IMG.founderPortrait,
    },
    whatsapp: '51998901054',
    priceFrom: 'S/ 890',
    place: {
      establishImage: IMG.urubambaPatio,
      panoramaImage: IMG.urubambaMirador,
      panoramaEyebrow: '2.870 m · 13°31\'S · Valle Sagrado',
      panoramaTitle: 'Un terreno familiar',
      panoramaTitleEm: 'sobre el Valle Sagrado.',
      stats: [
        { value: '2,870', label: 'metros s.n.m.', hint: 'Altitud que expande consciencia y respiración.' },
        { value: '45 min', label: 'desde Cusco', hint: 'Por la ruta panorámica al Valle Sagrado.' },
        { value: '3.2 ha', label: 'de terreno privado', hint: 'Campos verdes, piedra andina y silencio.' },
        { value: '360°', label: 'de vista panorámica', hint: 'Cusco al norte, Urubamba al sur.' },
      ],
      gallerySpaces: [
        {
          category: 'El mirador',
          name: 'Vista a Cusco',
          lead: 'Donde la luz dorada sube desde la ciudad imperial.',
          body: 'Una terraza de piedra orientada al noreste. El primer punto del retiro: desde aquí se entiende por qué este terreno existe — la cordillera se abre 180° sobre la ciudad y el silencio se vuelve textura.',
          highlights: ['Panorámica de 180° sobre Cusco', 'Bancos de piedra para sentar la mirada', 'Punto privilegiado al amanecer y al ocaso'],
          meta: [{ label: 'Orientación', value: 'Noreste' }, { label: 'Mejor hora', value: '05:50 — 07:10' }],
          image: IMG.urubambaMirador,
        },
        {
          category: 'La práctica',
          name: 'Sala de yoga',
          lead: 'Piso de madera, ventanal al valle, una sola intención.',
          body: 'Un volumen cerrado pero abierto a la luz. El piso flotante de eucalipto absorbe los pasos. La ventana de cinco metros enmarca el valle como un cuadro en movimiento mientras la práctica avanza.',
          highlights: ['Capacidad para 10 esterillas con espacio amplio', 'Calefacción a leña para mañanas frías', 'Equipo de sonido tenue con cuencos andinos'],
          meta: [{ label: 'Superficie', value: '85 m²' }, { label: 'Aforo', value: '10 personas' }],
          image: IMG.urubambaJardin,
        },
        {
          category: 'El cuerpo del lugar',
          name: 'Campo verde',
          lead: 'Una pradera abierta donde el cuerpo recuerda a la tierra.',
          body: 'Hectárea y media de hierba andina baja, sin construcciones ni cables. El campo se usa para caminata consciente, ejercicios de respiración al aire libre y para la noche del cielo estrellado del día uno.',
          highlights: ['3.2 hectáreas de terreno privado', 'Sin contaminación visual ni acústica', 'Inclinación suave, accesible para todos'],
          meta: [{ label: 'Campo abierto', value: '1.4 ha' }, { label: 'Inclinación', value: 'Suave' }],
          image: IMG.urubambaPatio,
        },
        {
          category: 'El centro',
          name: 'Círculo de meditación',
          lead: 'Doce piedras puestas en círculo. Una sola dirección.',
          body: 'Un anillo de piedra rodeado de árboles nativos. El espacio donde la cohorte se sienta en silencio. Tiene una cubierta retráctil para la posibilidad de lluvia y un fogón central que solo se enciende para los círculos de la noche.',
          highlights: ['Doce asientos de piedra en círculo', 'Fogón central de piedra volcánica', 'Cubierta textil retráctil para lluvia'],
          meta: [{ label: 'Capacidad', value: '12 personas' }, { label: 'Uso', value: 'Círculo grupal' }],
          image: IMG.urubambaEntrada,
        },
        {
          category: 'La mesa',
          name: 'Comedor andino',
          lead: 'Una mesa larga donde se comparte lo que somos.',
          body: 'Bajo techo de teja, cuatro metros de mesa única, vajilla artesanal de Pucará y cocina con producto local. Cinco comidas pensadas con un nutricionista para sostener el cuerpo durante la altura y la intensidad del trabajo interior.',
          highlights: ['Mesa única de 4 metros', '80% de los productos a kilómetro cero', 'Calefacción a leña para las noches frías'],
          meta: [{ label: 'Comidas', value: '5 por retiro' }, { label: 'Origen', value: 'Valle Sagrado' }],
          image: IMG.urubambaSalon,
        },
        {
          category: 'El descanso',
          name: 'Habitaciones',
          lead: 'Descanso simple, cálido y sin distracciones.',
          body: 'Habitaciones dobles con ropa de cama de lana, calefacción y vista al valle. El descanso es parte del retiro: aquí se duerme profundo después del círculo.',
          highlights: ['Ropa de cama natural', 'Ambiente cálido y silencioso', 'Sin pantallas ni WiFi en dormitorios'],
          meta: [{ label: 'Tipo', value: 'Doble compartida' }, { label: 'Baño', value: 'Compartido / privado' }],
          image: IMG.urubambaDescanso,
        },
      ],
      atmosphereBg: IMG.urubambaHabitacion,
      atmosphereHeadline: [
        { text: 'Aquí se huele ' },
        { text: 'la leña fría', em: true },
        { text: ' de la mañana, se escucha el viento bajando del Ausangate y los astros se ven con una nitidez ' },
        { text: 'que recuerda por qué la mente necesita silencio.', em: true },
      ],
      atmosphereSubtitle:
        'No es un hotel. Es una casa familiar de piedra y barro, adaptada para que diez personas puedan habitar dos días con cuidado, calidez y un nivel de presencia que rara vez se permite la ciudad.',
      senses: [
        { label: 'Olfato', text: 'Eucalipto, muña fresca, leña que arde lento.' },
        { label: 'Oído', text: 'Viento, fuego crepitando, silencios largos.' },
        { label: 'Tacto', text: 'Piedra fría al amanecer, lana tibia al anochecer.' },
        { label: 'Vista', text: 'Cordillera abierta, cielo sin contaminación.' },
      ],
      travelSteps: [
        { index: '01', title: 'Llega a Cusco', description: 'Vuelo o bus a la ciudad imperial. Recomendamos llegar al menos 24h antes para aclimatar.' },
        { index: '02', title: 'Te recogemos', description: 'Punto de encuentro en Plaza de Armas a las 13:30. Transporte privado incluido.' },
        { index: '03', title: 'Camino panorámico', description: '45 minutos por la ruta del Valle Sagrado, mirando cómo se abre la cordillera.' },
        { index: '04', title: 'Bienvenida en el terreno', description: 'Llegada al retiro, infusión caliente y orientación. El círculo comienza.' },
      ],
      climate: [
        { label: 'Día', value: '18-22°C', hint: 'Sol intenso, llevar protección.' },
        { label: 'Noche', value: '4-8°C', hint: 'Frío seco. Recomendamos abrigo.' },
        { label: 'Humedad', value: '40%', hint: 'Hidratación importante por altitud.' },
      ],
      climateTitle: 'Clima en altura',
      climateNote:
        'Recomendamos llegar a Cusco con 24 a 48 horas de anticipación. Si tienes condiciones cardíacas o respiratorias, escríbenos y conversamos antes.',
    },
  },
  {
    slug: 'cusco',
    city: 'Cusco',
    region: 'Ciudad imperial, Cusco',
    flagship: false,
    status: 'open',
    tagline: 'El corazón andino, entre piedra y cielo.',
    intro:
      'Una casona serena cerca del centro histórico, pensada para parar en medio de la ciudad imperial sin perder el pulso de los Andes.',
    heroEyebrow: 'El Lugar · Cusco',
    heroTitle: 'Recogimiento en la ciudad imperial.',
    heroSubtitle:
      'Una casona serena cerca del centro histórico, pensada para parar en medio de la ciudad imperial sin perder el pulso de los Andes.',
    heroImage: IMG.caminoPiedra,
    ambiance:
      'Patios de piedra, campanas a lo lejos y el aire delgado de la altura. Recogimiento en el ombligo del mundo.',
    altitude: '3,400 m s.n.m.',
    climate: 'Frío de altura · luz intensa de día',
    distance: '15 min del aeropuerto (CUZ) · centro de Cusco',
    highlights: [
      'Patios y salones de piedra colonial',
      'Cercanía al centro histórico',
      'Espacios íntimos para círculos',
      'Cocina andina de estación',
    ],
    coords: { lat: -13.5319, lng: -71.9675 },
    mapQuery: 'Cusco, Perú',
    nextDate: 'Próxima fecha por confirmar',
    facilitator: {
      name: 'Equipo Mente que Sana',
      role: 'Facilitación clínica + acompañamiento andino',
      portrait: IMG.founderPortrait,
    },
    whatsapp: '51998901054',
    priceFrom: 'S/ 890',
    place: {
      establishImage: IMG.valleMirador,
      panoramaImage: IMG.caminoPiedra,
      panoramaEyebrow: '3.400 m · 13°31\'S · Cusco',
      panoramaTitle: 'Un refugio de piedra',
      panoramaTitleEm: 'en el ombligo del mundo.',
      stats: [
        { value: '3,400', label: 'metros s.n.m.', hint: 'Altitud de la ciudad imperial.' },
        { value: '15 min', label: 'del aeropuerto', hint: 'Acceso directo desde Velasco Astete (CUZ).' },
        { value: 'Casona', label: 'colonial restaurada', hint: 'Patios, salones y piedra andina.' },
        { value: 'Centro', label: 'histórico cercano', hint: 'A minutos de la Plaza de Armas.' },
      ],
      gallerySpaces: [
        {
          category: 'El patio',
          name: 'Patio de piedra',
          lead: 'Silencio colonial bajo el cielo delgado de Cusco.',
          body: 'Un patio central de piedra volcánica donde el círculo se forma al aire libre. Las paredes coloniales contienen el sonido y abren la mirada hacia el cielo andino.',
          highlights: ['Patio central de piedra', 'Acceso directo desde el salón', 'Ideal para ceremonias de bienvenida'],
          meta: [{ label: 'Capacidad', value: '12 personas' }, { label: 'Uso', value: 'Círculo de apertura' }],
          image: IMG.caminoPiedra,
        },
        {
          category: 'La práctica',
          name: 'Salón de yoga',
          lead: 'Luz de altura, madera cálida, respiración consciente.',
          body: 'Un salón amplio con piso de madera y ventanales orientados al este. La luz entra temprano y acompaña la práctica matinal mientras el cuerpo se aclimata a los 3,400 metros.',
          highlights: ['Piso de madera calefactado', 'Ventanales orientados al este', 'Equipamiento de sonido incluido'],
          meta: [{ label: 'Superficie', value: '70 m²' }, { label: 'Aforo', value: '10 personas' }],
          image: IMG.yogaSalaInside,
        },
        {
          category: 'El centro',
          name: 'Sala de círculo',
          lead: 'Intimidad para la palabra honesta.',
          body: 'Un espacio cerrado y acogedor, con fogón central y asientos en círculo. Diseñado para las noches de conversación profunda y el trabajo grupal que la ciudad no permite.',
          highlights: ['Fogón central de leña', 'Asientos en círculo completo', 'Aislamiento acústico natural'],
          meta: [{ label: 'Capacidad', value: '10 personas' }, { label: 'Uso', value: 'Círculo nocturno' }],
          image: IMG.fuego,
        },
        {
          category: 'La mesa',
          name: 'Comedor andino',
          lead: 'Sabores de estación en la mesa compartida.',
          body: 'Cocina con productos del mercado de San Pedro y del Valle Sagrado. Menú pensado para sostener el cuerpo en altura: caldo, quinua, tubérculos y hierbas andinas.',
          highlights: ['Productos del mercado local', 'Menú antiinflamatorio', 'Mesa única para la cohorte'],
          meta: [{ label: 'Comidas', value: '5 por retiro' }, { label: 'Origen', value: 'Cusco y Valle' }],
          image: IMG.andineFood,
        },
        {
          category: 'El descanso',
          name: 'Habitaciones',
          lead: 'Descanso simple, cálido y sin distracciones.',
          body: 'Habitaciones dobles con ropa de cama de lana, calefacción y vista a los tejados coloniales. El descanso es parte del retiro: aquí se duerme profundo.',
          highlights: ['Ropa de cama de lama y alpaca', 'Calefacción en habitación', 'Sin pantallas ni WiFi en dormitorios'],
          meta: [{ label: 'Tipo', value: 'Doble compartida' }, { label: 'Baño', value: 'Compartido / privado' }],
          image: IMG.habitaciones,
        },
      ],
      atmosphereBg: IMG.starsAndes,
      atmosphereHeadline: [
        { text: 'Aquí se escuchan ' },
        { text: 'las campanas lejanas', em: true },
        { text: ' del centro histórico, el aire es delgado y la luz de la tarde ' },
        { text: 'dibuja sombras largas sobre la piedra.', em: true },
      ],
      atmosphereSubtitle:
        'Una casona familiar adaptada para diez personas. No es hotel boutique: es un espacio de recogimiento donde la ciudad queda afuera y el trabajo interior puede empezar.',
      senses: [
        { label: 'Olfato', text: 'Muña, coca de mate, pan recién horneado del barrio.' },
        { label: 'Oído', text: 'Campanas distantes, lluvia sobre teja, silencio de patio.' },
        { label: 'Tacto', text: 'Piedra fría, lana gruesa, mate caliente entre las manos.' },
        { label: 'Vista', text: 'Tejados coloniales, cielo intenso, montañas al horizonte.' },
      ],
      travelSteps: [
        { index: '01', title: 'Llega a Cusco', description: 'Vuelo o bus a la ciudad imperial. Recomendamos 24–48h de aclimatación previa.' },
        { index: '02', title: 'Encuentro en el centro', description: 'Punto de encuentro en Plaza de Armas o en la casona, según coordinación previa.' },
        { index: '03', title: 'Traslado corto', description: '15 minutos desde el aeropuerto o el centro hasta la sede.' },
        { index: '04', title: 'Bienvenida', description: 'Mate de coca, orientación y formación del círculo. El retiro comienza.' },
      ],
      climate: [
        { label: 'Día', value: '15-20°C', hint: 'Sol fuerte, usar protector solar.' },
        { label: 'Noche', value: '0-5°C', hint: 'Frío intenso. Abrigo imprescindible.' },
        { label: 'Humedad', value: '45%', hint: 'Beber mucha agua por la altitud.' },
      ],
      climateTitle: 'Clima en altura',
      climateNote:
        'Cusco está a 3,400 m. Recomendamos llegar con anticipación para aclimatar. Si tienes condiciones cardíacas o respiratorias, escríbenos antes de reservar.',
    },
  },
  {
    slug: 'iquitos',
    city: 'Iquitos',
    region: 'Amazonía, Loreto',
    flagship: false,
    status: 'open',
    tagline: 'La selva que respira contigo.',
    intro:
      'Un refugio rodeado de selva amazónica junto al río, donde la naturaleza exuberante marca el ritmo del descanso y la introspección.',
    heroEyebrow: 'El Lugar · Iquitos',
    heroTitle: 'La selva como maestra.',
    heroSubtitle:
      'Un refugio rodeado de selva amazónica junto al río, donde la naturaleza exuberante marca el ritmo del descanso y la introspección.',
    heroImage: IMG.forestPath,
    ambiance:
      'Verde infinito, lluvia tibia y el coro de la selva al amanecer. Humedad fértil que invita a soltar.',
    altitude: '106 m s.n.m.',
    climate: 'Cálido y húmedo · selva tropical',
    distance: 'Acceso por río y carretera desde Iquitos',
    highlights: [
      'Maloca abierta entre la selva',
      'Senderos y río cercano',
      'Prácticas al amanecer en la naturaleza',
      'Alimentación amazónica viva',
    ],
    coords: { lat: -3.7491, lng: -73.2538 },
    mapQuery: 'Iquitos, Perú',
    nextDate: 'Próxima fecha por confirmar',
    facilitator: {
      name: 'Equipo Mente que Sana',
      role: 'Facilitación clínica + saberes amazónicos',
      portrait: IMG.founderPortrait,
    },
    whatsapp: '51998901054',
    priceFrom: 'S/ 890',
    place: {
      establishImage: IMG.forestPath,
      panoramaImage: IMG.forestPath,
      panoramaEyebrow: '106 m · 3°44\'S · Amazonía',
      panoramaTitle: 'Un refugio entre',
      panoramaTitleEm: 'la selva y el río.',
      stats: [
        { value: '106', label: 'metros s.n.m.', hint: 'Selva baja, calor húmedo constante.' },
        { value: 'Río', label: 'Itaya cercano', hint: 'Acceso a agua y caminata ribereña.' },
        { value: 'Selva', label: 'primaria circundante', hint: 'Biodiversidad y silencio verde.' },
        { value: '30 min', label: 'desde Iquitos', hint: 'Por carretera o embarcación.' },
      ],
      gallerySpaces: [
        {
          category: 'La maloca',
          name: 'Maloca ceremonial',
          lead: 'Círculo bajo techo de palma, en el corazón de la selva.',
          body: 'Una estructura abierta de madera y hoja de palma donde el grupo se reúne para meditar, compartir y escuchar la selva. El espacio central del retiro amazónico.',
          highlights: ['Estructura tradicional de maloca', 'Ventilación natural cruzada', 'Fogón central para círculos nocturnos'],
          meta: [{ label: 'Capacidad', value: '12 personas' }, { label: 'Uso', value: 'Círculo y meditación' }],
          image: IMG.meditation,
        },
        {
          category: 'La práctica',
          name: 'Deck de yoga',
          lead: 'Práctica al amanecer con el coro de la selva.',
          body: 'Una plataforma elevada de madera dura, abierta a tres lados. Al amanecer la selva despierta alrededor mientras el cuerpo se mueve entre árboles y cielo.',
          highlights: ['Plataforma elevada de madera', 'Vista a la copa de los árboles', 'Práctica al amanecer incluida'],
          meta: [{ label: 'Superficie', value: '60 m²' }, { label: 'Aforo', value: '10 personas' }],
          image: IMG.yogaSunrise,
        },
        {
          category: 'El sendero',
          name: 'Sendero consciente',
          lead: 'Caminata lenta entre la vegetación.',
          body: 'Un sendero señalizado de 800 metros atraviesa la vegetación secundaria. Se usa para caminata meditativa, ejercicios de respiración y reconexión con el cuerpo en movimiento.',
          highlights: ['800 m de sendero señalizado', 'Paradas de contemplación', 'Guía de flora local incluida'],
          meta: [{ label: 'Duración', value: '45 min caminata' }, { label: 'Dificultad', value: 'Suave' }],
          image: IMG.forestPath,
        },
        {
          category: 'La mesa',
          name: 'Comedor amazónico',
          lead: 'Sabores del río y la selva en la mesa.',
          body: 'Cocina con pescado de río, frutas tropicales, yuca y hierbas medicinales de la región. Menú diseñado para hidratar y nutrir en clima húmedo.',
          highlights: ['Pescado y productos de río', 'Frutas tropicales de estación', 'Infusiones medicinales locales'],
          meta: [{ label: 'Comidas', value: '5 por retiro' }, { label: 'Origen', value: 'Iquitos y río' }],
          image: IMG.andineFood,
        },
        {
          category: 'La ribera',
          name: 'Zona ribereña',
          lead: 'Agua, silencio y el horizonte del río.',
          body: 'Acceso directo a una zona de descanso junto al agua. Espacio para la ceremonia del agua, momentos de silencio individual y la contemplación del río al atardecer.',
          highlights: ['Acceso directo al agua', 'Hamacas y zona de descanso', 'Atardecer sobre el río'],
          meta: [{ label: 'Uso', value: 'Ceremonia del agua' }, { label: 'Mejor hora', value: '17:00 — 18:30' }],
          image: IMG.greenField,
        },
      ],
      atmosphereBg: IMG.forestPath,
      atmosphereHeadline: [
        { text: 'Aquí se respira ' },
        { text: 'el verde húmedo', em: true },
        { text: ' de la selva, se escucha el río de fondo y la lluvia ' },
        { text: 'marca el ritmo de cada tarde.', em: true },
      ],
      atmosphereSubtitle:
        'No es un lodge turístico. Es un refugio simple en la selva, adaptado para que diez personas habiten dos días con la naturaleza como única compañía constante.',
      senses: [
        { label: 'Olfato', text: 'Tierra mojada, flor de aguaje, humo de leña húmeda.' },
        { label: 'Oído', text: 'Grillos, río, lluvia sobre hoja, silencios verdes.' },
        { label: 'Tacto', text: 'Humedad cálida, madera lisa, agua del río en las manos.' },
        { label: 'Vista', text: 'Verde infinito, cielo amplio, reflejos en el agua.' },
      ],
      travelSteps: [
        { index: '01', title: 'Llega a Iquitos', description: 'Vuelo desde Lima (1h 50min). No hay carretera desde el resto del país.' },
        { index: '02', title: 'Te recogemos', description: 'Encuentro en el aeropuerto o muelle de Iquitos. Traslado incluido.' },
        { index: '03', title: 'Camino a la selva', description: '30 minutos por carretera o embarcación hasta el refugio.' },
        { index: '04', title: 'Bienvenida en la maloca', description: 'Infusión de hierbas, orientación y formación del círculo.' },
      ],
      climate: [
        { label: 'Día', value: '28-34°C', hint: 'Calor húmedo. Ropa ligera y repelente.' },
        { label: 'Noche', value: '22-26°C', hint: 'Cálido. Posible lluvia nocturna.' },
        { label: 'Humedad', value: '85%', hint: 'Hidratación constante. Protector solar.' },
      ],
      climateTitle: 'Clima tropical',
      climateNote:
        'La selva requiere repelente, ropa ligera de manga larga y calzado cerrado. Si tienes alergias o condiciones que requieran atención especial, avísanos antes.',
    },
  },
  {
    slug: 'tacna',
    city: 'Tacna',
    region: 'Sur del Perú',
    flagship: false,
    status: 'open',
    tagline: 'El sur sereno, entre desierto y sol.',
    intro:
      'Un espacio luminoso en el sur del país, de cielos despejados y horizontes amplios, ideal para una pausa cálida y reparadora.',
    heroEyebrow: 'El Lugar · Tacna',
    heroTitle: 'Luz del sur, calma profunda.',
    heroSubtitle:
      'Un espacio luminoso en el sur del país, de cielos despejados y horizontes amplios, ideal para una pausa cálida y reparadora.',
    heroImage: IMG.tacna,
    ambiance:
      'Luz limpia, clima templado y la calma del sur. Amplitud para respirar hondo.',
    altitude: '560 m s.n.m.',
    climate: 'Templado seco · cielos despejados todo el año',
    distance: '10 min del aeropuerto (TCQ) · ciudad de Tacna',
    highlights: [
      'Espacios amplios y luminosos',
      'Clima estable y soleado',
      'Entorno tranquilo para descansar',
      'Cocina saludable de estación',
    ],
    coords: { lat: -18.0066, lng: -70.2463 },
    mapQuery: 'Tacna, Perú',
    nextDate: 'Próxima fecha por confirmar',
    facilitator: {
      name: 'Equipo Mente que Sana',
      role: 'Facilitación clínica + acompañamiento',
      portrait: IMG.founderPortrait,
    },
    whatsapp: '51998901054',
    priceFrom: 'S/ 890',
    place: {
      establishImage: IMG.heroSunrise,
      panoramaImage: IMG.heroSunrise,
      panoramaEyebrow: '560 m · 18°00\'S · Sur del Perú',
      panoramaTitle: 'Un espacio de luz',
      panoramaTitleEm: 'en el sur sereno.',
      stats: [
        { value: '560', label: 'metros s.n.m.', hint: 'Clima templado, sin altitud extrema.' },
        { value: '10 min', label: 'del aeropuerto', hint: 'Acceso directo desde Coronel FAP (TCQ).' },
        { value: '300+', label: 'días de sol al año', hint: 'Cielos despejados y luz constante.' },
        { value: 'Jardín', label: 'y salones amplios', hint: 'Espacios abiertos para práctica y descanso.' },
      ],
      gallerySpaces: [
        {
          category: 'El jardín',
          name: 'Jardín soleado',
          lead: 'Práctica al aire libre bajo el cielo del sur.',
          body: 'Un jardín amplio con césped, árboles frutales y sombra natural. Espacio principal para yoga matinal, caminata consciente y momentos de silencio al sol.',
          highlights: ['300 m² de jardín privado', 'Sombras naturales de árboles', 'Práctica al amanecer incluida'],
          meta: [{ label: 'Superficie', value: '300 m²' }, { label: 'Uso', value: 'Yoga y caminata' }],
          image: IMG.greenField,
        },
        {
          category: 'La práctica',
          name: 'Salón de yoga',
          lead: 'Luz amplia, aire limpio, cuerpo presente.',
          body: 'Un salón luminoso con ventanales orientados al norte y piso de madera. La luz del sur entra generosa y sostiene la práctica durante todo el día.',
          highlights: ['Ventanales orientados al norte', 'Piso de madera', 'Ventilación cruzada natural'],
          meta: [{ label: 'Superficie', value: '75 m²' }, { label: 'Aforo', value: '10 personas' }],
          image: IMG.yogaSunrise,
        },
        {
          category: 'El centro',
          name: 'Sala de círculo',
          lead: 'Intimidad para la palabra compartida.',
          body: 'Un espacio acogedor con asientos en círculo y luz tenue. Diseñado para las conversaciones profundas del retiro y el trabajo grupal en un ambiente cálido y contenido.',
          highlights: ['Asientos en círculo completo', 'Iluminación regulable', 'Temperatura confortable'],
          meta: [{ label: 'Capacidad', value: '10 personas' }, { label: 'Uso', value: 'Círculo grupal' }],
          image: IMG.meditation,
        },
        {
          category: 'La mesa',
          name: 'Comedor del sur',
          lead: 'Cocina saludable con productos locales.',
          body: 'Mesa larga con productos del valle de Tacna y la costa sur. Menú antiinflamatorio con énfasis en vegetales, legumbres y pescado fresco de la región.',
          highlights: ['Productos del valle de Tacna', 'Menú antiinflamatorio', 'Opciones vegetarianas y de pescado'],
          meta: [{ label: 'Comidas', value: '5 por retiro' }, { label: 'Origen', value: 'Tacna y costa sur' }],
          image: IMG.andineFood,
        },
        {
          category: 'La terraza',
          name: 'Terraza al atardecer',
          lead: 'El cielo del sur se enciende al ocaso.',
          body: 'Una terraza elevada con vista a los cerros del sur. Punto de encuentro para el círculo de fuego, la contemplación del atardecer y los momentos de silencio al final del día.',
          highlights: ['Vista panorámica al ocaso', 'Fogón para círculo nocturno', 'Hamacas y zona de descanso'],
          meta: [{ label: 'Mejor hora', value: '17:30 — 19:00' }, { label: 'Uso', value: 'Círculo de fuego' }],
          image: IMG.fuego,
        },
      ],
      atmosphereBg: IMG.heroSunrise,
      atmosphereHeadline: [
        { text: 'Aquí la luz es ' },
        { text: 'generosa y limpia', em: true },
        { text: ', el aire es seco y cálido, y el silencio del sur ' },
        { text: 'invita a soltar lo que ya no se necesita.', em: true },
      ],
      atmosphereSubtitle:
        'Un espacio familiar en el sur del país, adaptado para diez personas. Sin lujo innecesario: calidez, luz y la calma que el desierto enseña.',
      senses: [
        { label: 'Olfato', text: 'Aire seco, hierbas del valle, tierra caliente al sol.' },
        { label: 'Oído', text: 'Viento suave, pájaros del sur, silencios amplios.' },
        { label: 'Tacto', text: 'Sol templado, brisa seca, madera caliente al tacto.' },
        { label: 'Vista', text: 'Cielo despejado, cerros lejanos, atardeceres intensos.' },
      ],
      travelSteps: [
        { index: '01', title: 'Llega a Tacna', description: 'Vuelo desde Lima (1h 40min) o bus desde el sur del país.' },
        { index: '02', title: 'Te recogemos', description: 'Encuentro en el aeropuerto Coronel FAP (TCQ) o en la ciudad.' },
        { index: '03', title: 'Traslado corto', description: '10 minutos desde el aeropuerto hasta la sede.' },
        { index: '04', title: 'Bienvenida', description: 'Infusión, orientación y formación del círculo. Comienza el retiro.' },
      ],
      climate: [
        { label: 'Día', value: '22-28°C', hint: 'Sol constante. Protección solar recomendada.' },
        { label: 'Noche', value: '12-16°C', hint: 'Templado. Una capa ligera basta.' },
        { label: 'Humedad', value: '35%', hint: 'Aire seco. Hidratarse con frecuencia.' },
      ],
      climateTitle: 'Clima del sur',
      climateNote:
        'Tacna tiene clima estable todo el año. Si tienes condiciones que requieran atención especial, escríbenos antes de reservar.',
    },
  },
];

export const DEFAULT_SEDE = SEDES[0];

export function getSede(slug: string | null | undefined): Sede | undefined {
  if (!slug) return undefined;
  return SEDES.find((s) => s.slug === slug);
}
