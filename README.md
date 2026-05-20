# Mente que Sana

Sitio web del retiro vivencial **Mente que Sana** — Valle Sagrado, Cusco, Perú.
Dos días de psiconeuroinmunología, neurociencia y sabiduría andina, a 2,870 m s.n.m.

> *"El pensamiento que te enferma también puede sanarte."*

---

## Stack

- **Angular 20** (compatible 17+) con standalone components
- **Angular Router** con lazy loading en todas las rutas (`loadComponent`)
- **Angular Animations** (`@angular/animations`) para transiciones de ruta y micro-interacciones
- **SCSS** con tokens via `@use` (`_variables`, `_mixins`, `_typography`)
- **Reactive Forms** (`ReactiveFormsModule`) en el formulario de contacto
- **Sin librerías UI externas** — todo el diseño es 100% custom
- **Google Fonts** vía `styles.scss`: Cormorant Garamond, Cinzel, Lato, Space Mono
- **SSR + Prerendering** activado (las 6 rutas se generan estáticamente en build)

## Identidad visual

Estética **Tierra Viva** — naturaleza andina de lujo sensorial.

Tipografía jerárquica de cuatro voces:

| Familia              | Rol                       |
| -------------------- | ------------------------- |
| Cormorant Garamond   | Headlines emocionales     |
| Cinzel               | Subtítulos arquitectónicos|
| Lato                 | Cuerpo                    |
| Space Mono           | Etiquetas, precios, datos |

Paleta principal en `src/styles/_variables.scss` (también expuesta como CSS custom properties en `:root`).

## Estructura

```
src/
  app/
    core/components/        navbar/ · footer/
    features/
      home/                 hero · why · place · pricing · testimonial (previews)
      experience/           intro-science · program-timeline · includes-grid · cta-banner
      place/                location-stats · spaces-gallery · atmosphere · how-to-get-there
      community/            manifesto · testimonials-grid · spots-counter · founder-message
      pricing/              pricing-cards · includes-detail · payment-info · faq-accordion · whatsapp-cta
      contact/              whatsapp-card · contact-form · faq-full · location-map
    shared/
      animations/           route-transitions.ts
      components/           page-hero · section-header · button · card · countdown
      directives/           scroll-reveal.directive.ts
  styles/
    _variables.scss
    _mixins.scss
    _typography.scss
  styles.scss               (entrada global)
```

## Rutas

| URL             | Componente          | Animation key |
| --------------- | ------------------- | ------------- |
| `/`             | HomeComponent       | home          |
| `/experiencia`  | ExperienceComponent | experience    |
| `/lugar`        | PlaceComponent      | place         |
| `/comunidad`    | CommunityComponent  | community     |
| `/tarifas`      | PricingComponent    | pricing       |
| `/contacto`     | ContactComponent    | contact       |

Cada ruta usa `loadComponent` (lazy) y carga su chunk separado. La transición entre rutas es un fade + slide controlado por `@routeAnimations` en `app.html`.

## Características destacadas

- **`ScrollRevealDirective`** (`appScrollReveal`) con `IntersectionObserver`. Inputs:
  - `[delay]` (ms) para stagger
  - `direction` (`'up' | 'left' | 'right'`)
  - `[threshold]` (0..1) y `[once]` (bool)
- **`PageHeroComponent`** reutilizable con tres `backgroundVariant`: `dark` · `medium` · `light`.
- **Navbar adaptativa** — transparente arriba, dorada-frost al hacer scroll, hamburguesa con animación slide-down en mobile.
- **`PricingCardComponent`** standalone consume un objeto `PricingTier` por `@Input()`.
- **`FaqAccordionComponent`** con expand/collapse animado y `single-open` opcional.
- **`ContactFormComponent`** con `Validators` y submit que abre WhatsApp con el mensaje pre-llenado (sin backend).
- **`CountdownComponent`** y **`SpotsCounterComponent`** con contadores animados (RAF + IntersectionObserver).
- **Reduce-motion** respetado a nivel global en `styles.scss`.

## Comandos

```bash
npm install         # instala dependencias
npm start           # dev server en http://localhost:4200
npm run build       # build producción + prerender SSR de las 6 rutas
npm test            # tests unitarios con Karma
```

## Cambio de placeholders por fotos reales

Los espacios visuales del retiro están renderizados con gradientes temáticos en `_mixins.scss`:
`placeholder-gradient('mountain' | 'verde' | 'sauna' | 'sky')`.

Para sustituirlos por fotografía real:

1. Agrega tus imágenes a `public/images/lugar/`.
2. En los componentes `place-preview`, `spaces-gallery` y `pricing-card`, reemplaza el `<div class="…__media">` (que usa el mixin) por un `<img>` con `loading="lazy"` y `decoding="async"`.
3. Mantén la relación de aspecto (`aspect-ratio` definido en los SCSS) para no romper el grid masonry.

## Próximos pasos sugeridos

- Reemplazar gradientes placeholder por fotografía profesional del terreno
- Integrar el formulario con un endpoint propio (Formspree / Resend / Edge function) si se requiere persistir
- Embed real de Google Maps en `LocationMapComponent`
- Análisis y eventos (GA4, Plausible) — actualmente el sitio no tiene tracking
- Configurar fecha real del retiro en `CountdownComponent`

---

© Mente que Sana · Cusco, Perú · Hecho con piedra, viento y ciencia.
