/**
 * Image registry — Mente que Sana
 *
 * Estos son placeholders provenientes de Unsplash. Tienen una relación
 * visual con el contenido (montañas andinas, yoga, sauna, naturaleza,
 * comunidad) y están listos para ser reemplazados por fotografía real
 * cuando esté disponible.
 *
 * Reemplazo:
 *  1. Sustituye la URL por una local en `public/images/...`
 *  2. Mantén proporciones similares (ratios señalados al lado).
 */

const U = (id: string, w = 1600, q = 80) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=${q}`;

export const IMG = {
  // ----------- HERO / LANDSCAPE (16:9 — full bleed) -------------
  heroMountain:    U('photo-1464822759023-fed622ff2c3b', 2400),   // valle verde con montañas
  heroSunrise:     U('photo-1506905925346-21bda4d32df4', 2400),   // amanecer cordillera
  heroValle:       U('photo-1526392060635-9d6019884377', 2400),   // valle sagrado
  cuscoVista:      U('photo-1531065208531-2cabd9c0e2cd', 1800),   // cusco panorámico
  facingMountain:  U('photo-1517021897933-0e0319cfbc28', 1800),   // persona mirando montaña
  forestPath:      U('photo-1441974231531-c6227db76b6e', 1800),   // bosque verde
  greenField:      U('photo-1500382017468-9049fed747ef', 1800),   // pradera verde
  hillsMist:       U('photo-1469474968028-56623f02e42e', 1800),   // colinas con niebla
  andeStone:       U('photo-1518391846015-55a9cc003b25', 1800),   // construcción andina piedra

  // ----------- LUGAR / ESPACIOS (full viewport — 2000w) --------
  yogaSalaInside:  '/images/yoga-naturaleza.jpg',                   // sala de yoga (foto local)
  yogaSunrise:     U('photo-1506126613408-eca07ce68773', 2000),   // yoga al amanecer
  saunaStone:      U('photo-1583416750470-cf6f8c25e1e2', 2000),   // sauna piedra
  saunaWarm:       U('photo-1554995207-c18c203602cb', 2000),       // espacio cálido leña
  meditation:      U('photo-1593811167562-9cef47bfc4d7', 2000),   // círculo meditación
  meditationGirl:  U('photo-1474418397713-7ede21d49118', 2000),   // mujer meditando
  campoVerde:      U('photo-1500382017468-9049fed747ef', 2000),   // pradera abierta
  diningTable:     U('photo-1414235077428-338989a2e8c0', 2000),   // mesa larga andina
  andineFood:      U('photo-1546069901-ba9599a7e63c', 2000),       // bowl saludable
  stoneTerrace:    U('photo-1505761671935-60b3a7427bad', 2000),   // terraza piedra
  starsAndes:      U('photo-1419242902214-272b3f66ee7a', 2000),   // cielo estrellado
  morningMist:     U('photo-1486325212027-8081e485255e', 2000),   // niebla matinal valle
  fireplace:       U('photo-1519074069390-98277fc02a5c', 2000),   // chimenea cálida
  valleMirador:    '/images/01-valle-sagrado-mirador.jpg',        // valle sagrado mirador (foto local)
  valleSagrado:    '/images/valle%20sagrado.jpg',                 // valle sagrado panorámico (foto local)
  miradorCusco:    '/images/mirador.avif',                         // vista a cusco (foto local)
  caminoPiedra:    '/images/camino%20de%20piedra.webp',          // camino de piedra andina (foto local)
  fuego:           '/images/fuego.jpeg',                           // círculo de fuego (foto local)
  habitaciones:    '/images/habitaciones.avif',                    // habitaciones (foto local)
  tacna:           '/images/tacna.jpg',                            // tacna paisaje (foto local)

  // ----------- COMUNIDAD / RETRATOS (1:1) ---------------------
  founderPortrait: '/images/armando-huaman.png',                  // facilitador (foto local)
  portraitWoman1:  U('photo-1438761681033-6461ffad8d80', 600),
  portraitMan1:    U('photo-1500648767791-00dcc994a43e', 600),
  portraitWoman2:  U('photo-1544005313-94ddf0286df2', 600),
  portraitMan2:    U('photo-1507003211169-0a1dd7228f2d', 600),
  handsTea:        U('photo-1556910103-1c02745aae4d', 1200),       // manos con té
  circleHands:     U('photo-1542838132-92c53300491e', 1200),       // manos en círculo

  // ----------- TEXTURAS / DETALLES (varios) -------------------
  textile:         U('photo-1554366347-897a5113f6ab', 1200),       // textil andino
  candle:          U('photo-1518110925495-b37653df3a4d', 1200),    // velas
  paperJournal:    U('photo-1517842645767-c639042777db', 1200),    // libreta
  herbs:           U('photo-1471193945509-9ad0617afabf', 1200),    // hierbas
  cupTea:          U('photo-1530968033775-2c92736b131e', 1200),    // taza humeante

  // ----------- CTA / FINAL ------------------------------------
  ctaBg:           U('photo-1506905925346-21bda4d32df4', 2200),    // panorámica final
  closing:         U('photo-1454496522488-7a8e488e8606', 2200),    // amanecer sereno
} as const;

export type ImgKey = keyof typeof IMG;
