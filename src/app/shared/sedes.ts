/**
 * Sedes registry — Yachaytambo
 *
 * Yachaytambo es la marca/organización que opera el programa de retiro
 * "Mente que Sana" en cuatro sedes del Perú. El programa base es el mismo,
 * pero cada sede tiene su propio lugar, fechas, facilitador y contacto.
 *
 * NOTA: Urubamba (Valle Sagrado) es la sede insignia y tiene contenido real.
 * Las demás sedes usan contenido e imágenes provisionales — reemplázalos
 * cuando tengas fotos, fechas, precios y números de WhatsApp definitivos.
 */

import { IMG } from './images';

export interface SedeSpace {
  name: string;
  caption: string;
  image: string;
}

export interface SedeFacilitator {
  name: string;
  role: string;
  portrait: string;
}

export interface Sede {
  /** Identificador en la URL: /sedes/:slug */
  slug: string;
  /** Ciudad principal. */
  city: string;
  /** Región / referencia geográfica. */
  region: string;
  /** Sede insignia (usa la experiencia inmersiva completa en /lugar). */
  flagship: boolean;
  /** Estado comercial de la sede. */
  status: 'open' | 'soon';
  /** Frase corta editorial. */
  tagline: string;
  /** Párrafo introductorio del lugar. */
  intro: string;
  /** Imagen principal (16:9). */
  heroImage: string;
  /** Descripción sensorial del entorno. */
  ambiance: string;
  /** Altitud / referencia. */
  altitude: string;
  /** Clima predominante. */
  climate: string;
  /** Distancia / acceso desde la ciudad o aeropuerto. */
  distance: string;
  /** Lista de características destacadas. */
  highlights: string[];
  /** Espacios del lugar (galería). */
  spaces: SedeSpace[];
  /** Coordenadas para el mapa. */
  coords: { lat: number; lng: number };
  /** Consulta para el embed de Google Maps. */
  mapQuery: string;
  /** Próxima fecha de retiro. */
  nextDate: string;
  /** Facilitador principal de la sede. */
  facilitator: SedeFacilitator;
  /** WhatsApp en formato internacional sin signos (ej. 51998901054). */
  whatsapp: string;
  /** Precio desde (texto). */
  priceFrom: string;
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
      'Un terreno familiar a 2,870 m con vista panorámica a Cusco, paredes de piedra antigua y un campo verde donde el tiempo se mueve más despacio.',
    heroImage: IMG.valleMirador,
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
    spaces: [
      { name: 'Mirador panorámico', caption: 'Vista total a Cusco', image: IMG.miradorCusco },
      { name: 'Sala de yoga', caption: 'Madera y luz natural', image: IMG.yogaSalaInside },
      { name: 'Campo verde', caption: 'Pradera abierta', image: IMG.campoVerde },
      { name: 'Comedor andino', caption: 'Mesa compartida', image: IMG.diningTable },
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
    priceFrom: 'S/ 1,290',
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
    heroImage: IMG.cuscoVista,
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
    spaces: [
      { name: 'Patio de piedra', caption: 'Recogimiento colonial', image: IMG.andeStone },
      { name: 'Salón de práctica', caption: 'Luz y madera', image: IMG.yogaSunrise },
      { name: 'Mesa compartida', caption: 'Cocina andina', image: IMG.andineFood },
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
    priceFrom: 'S/ 1,290',
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
    spaces: [
      { name: 'Maloca', caption: 'Círculo bajo techo de palma', image: IMG.meditation },
      { name: 'Sendero verde', caption: 'Caminata consciente', image: IMG.forestPath },
      { name: 'Ribera', caption: 'Agua y silencio', image: IMG.greenField },
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
    priceFrom: 'S/ 1,290',
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
    heroImage: IMG.heroSunrise,
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
    spaces: [
      { name: 'Jardín soleado', caption: 'Calma del sur', image: IMG.greenField },
      { name: 'Salón de práctica', caption: 'Luz amplia', image: IMG.yogaSunrise },
      { name: 'Mesa compartida', caption: 'Cocina saludable', image: IMG.andineFood },
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
    priceFrom: 'S/ 1,290',
  },
];

export const DEFAULT_SEDE = SEDES[0];

export function getSede(slug: string | null | undefined): Sede | undefined {
  if (!slug) return undefined;
  return SEDES.find((s) => s.slug === slug);
}
