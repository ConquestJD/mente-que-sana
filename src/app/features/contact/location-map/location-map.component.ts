import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';

interface Coordinate { label: string; value: string; }

@Component({
  selector: 'app-location-map',
  standalone: true,
  imports: [ScrollRevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="lmap section section--cream" aria-labelledby="lmap-title">
      <div class="container">
        <header class="lmap__head" appScrollReveal>
          <span class="title-md">Ubicación</span>
          <h2 id="lmap-title" class="display-md">A 45 minutos de la Plaza de Armas.</h2>
        </header>

        <div class="lmap__grid">
          <figure class="lmap__map" appScrollReveal direction="left">
            <div class="lmap__map-bg" aria-hidden="true">
              <svg viewBox="0 0 600 400" class="lmap__map-svg" aria-hidden="true">
                <defs>
                  <pattern id="topo" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 0,20 Q 10,5 20,20 T 40,20" fill="none" stroke="rgba(74,124,47,0.18)" stroke-width="1"/>
                    <path d="M 0,30 Q 10,15 20,30 T 40,30" fill="none" stroke="rgba(74,124,47,0.12)" stroke-width="1"/>
                  </pattern>
                  <radialGradient id="glow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stop-color="#4A7C2F" stop-opacity="0.35"/>
                    <stop offset="100%" stop-color="#4A7C2F" stop-opacity="0"/>
                  </radialGradient>
                </defs>
                <rect width="600" height="400" fill="url(#topo)"/>
                <path d="M 100,250 L 200,180 L 350,220 L 500,160" fill="none" stroke="rgba(74,124,47,0.55)" stroke-width="2" stroke-dasharray="6 4"/>
                <circle cx="100" cy="250" r="60" fill="url(#glow)"/>
                <circle cx="100" cy="250" r="5" fill="#4A7C2F"/>
                <text x="115" y="245" font-family="Space Mono" font-size="11" fill="#2D4A23" letter-spacing="1.5">CUSCO</text>
                <circle cx="500" cy="160" r="80" fill="url(#glow)"/>
                <circle cx="500" cy="160" r="7" fill="#C9963B"/>
                <text x="450" y="140" font-family="Space Mono" font-size="11" fill="#A07A2A" letter-spacing="1.5">RETIRO</text>
              </svg>
            </div>
            <figcaption class="lmap__caption">
              <span class="title-sm">Coordenadas aproximadas</span>
              <span class="body-sm">-13.398° S · -71.857° W</span>
            </figcaption>
          </figure>

          <aside class="lmap__info" appScrollReveal direction="right">
            <h3 class="title-md">Información práctica</h3>
            <ul class="lmap__list">
              @for (c of coords; track c.label) {
                <li>
                  <span class="title-sm">{{ c.label }}</span>
                  <span class="body-md">{{ c.value }}</span>
                </li>
              }
            </ul>
            <a
              class="lmap__cta"
              href="https://www.google.com/maps/search/Valle+Sagrado+Cusco"
              target="_blank"
              rel="noopener noreferrer"
            >
              Abrir en Google Maps →
            </a>
          </aside>
        </div>
      </div>
    </section>
  `,
  styleUrl: './location-map.component.scss',
})
export class LocationMapComponent {
  protected readonly coords: Coordinate[] = [
    { label: 'Distancia desde Cusco',  value: '45 minutos en auto' },
    { label: 'Altitud del retiro',     value: '2,870 metros sobre el nivel del mar' },
    { label: 'Punto de recogida',      value: 'Plaza de Armas de Cusco, 13:30' },
    { label: 'Transporte',             value: 'Incluido — minivan privada' },
    { label: 'Aeropuerto más cercano', value: 'Velasco Astete (CUZ) · 50 min' },
  ];
}
