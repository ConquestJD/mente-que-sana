import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { LocationStatsComponent } from './location-stats/location-stats.component';
import { SpacesGalleryComponent } from './spaces-gallery/spaces-gallery.component';
import { AtmosphereComponent } from './atmosphere/atmosphere.component';
import { HowToGetThereComponent } from './how-to-get-there/how-to-get-there.component';
import { CtaBannerComponent } from '../experience/cta-banner/cta-banner.component';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { ParallaxDirective } from '../../shared/directives/parallax.directive';
import { IMG } from '../../shared/images';

@Component({
  selector: 'app-place',
  standalone: true,
  imports: [
    PageHeroComponent,
    LocationStatsComponent,
    SpacesGalleryComponent,
    AtmosphereComponent,
    HowToGetThereComponent,
    CtaBannerComponent,
    ScrollRevealDirective,
    ParallaxDirective,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-page-hero
      eyebrow="El Lugar"
      title="Terreno familiar sobre el Valle Sagrado."
      subtitle="Una mirada panorámica a Cusco, paredes de piedra antigua y un campo verde donde el tiempo se mueve más despacio."
      backgroundVariant="cream"
      [image]="heroImg"
    />

    <app-location-stats />

    <!-- Cinematic transition: full-bleed establishing shot -->
    <section class="placeestablish" aria-hidden="true">
      <div
        class="placeestablish__bg"
        appParallax
        [speed]="0.3"
        [style.background-image]="'url(' + establishImg + ')'"
      ></div>
      <div class="placeestablish__veil"></div>
      <div class="placeestablish__content container">
        <span class="placeestablish__eyebrow ui-data" appScrollReveal>Recorrido</span>
        <h2 class="placeestablish__title" appScrollReveal [delay]="120">
          A continuación, <em>el terreno se abre.</em>
        </h2>
        <p class="placeestablish__sub" appScrollReveal [delay]="280">
          Seis espacios. Seis pantallas. Una sola intención de presencia.
        </p>
      </div>
      <span class="placeestablish__arrow" aria-hidden="true">
        <span class="placeestablish__arrow-line"></span>
        <span class="placeestablish__arrow-label">Desliza</span>
      </span>
    </section>

    <app-spaces-gallery />

    <app-atmosphere />

    <app-how-to-get-there />

    <app-cta-banner
      eyebrow="Reserva tu espacio"
      title="Diez personas. Una vez. Aquí."
      primaryLabel="Reservar mi lugar"
      primaryLink="/contacto"
      secondaryLabel="Ver tarifas"
      secondaryLink="/tarifas"
    />
  `,
  styleUrl: './place.component.scss',
})
export class PlaceComponent {
  protected readonly heroImg = IMG.cuscoVista;
  protected readonly establishImg = IMG.morningMist;
}
