import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { LocationStatsComponent } from './location-stats/location-stats.component';
import { SpacesGalleryComponent } from './spaces-gallery/spaces-gallery.component';
import { AtmosphereComponent } from './atmosphere/atmosphere.component';
import { HowToGetThereComponent } from './how-to-get-there/how-to-get-there.component';
import { CtaBannerComponent } from '../experience/cta-banner/cta-banner.component';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { ParallaxDirective } from '../../shared/directives/parallax.directive';
import { getSede, Sede } from '../../shared/sedes';

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
    @if (sede(); as s) {
      <app-page-hero
        [eyebrow]="s.heroEyebrow"
        [title]="s.heroTitle"
        [subtitle]="s.heroSubtitle"
        backgroundVariant="cream"
        [image]="s.heroImage"
      />

      <app-location-stats [sede]="s" />

      <section class="placeestablish" aria-hidden="true">
        <div
          class="placeestablish__bg"
          appParallax
          [speed]="0.3"
          [style.background-image]="'url(' + s.place.establishImage + ')'"
        ></div>
        <div class="placeestablish__veil"></div>
        <div class="placeestablish__content container">
          <span class="placeestablish__eyebrow ui-data" appScrollReveal>Recorrido</span>
          <h2 class="placeestablish__title" appScrollReveal [delay]="120">
            A continuación, <em>el terreno se abre.</em>
          </h2>
          <p class="placeestablish__sub" appScrollReveal [delay]="280">
            {{ s.place.gallerySpaces.length }} espacios. {{ s.place.gallerySpaces.length }} pantallas.
            Una sola intención de presencia.
          </p>
        </div>
        <span class="placeestablish__arrow" aria-hidden="true">
          <span class="placeestablish__arrow-line"></span>
          <span class="placeestablish__arrow-label">Desliza</span>
        </span>
      </section>

      @for (item of [s]; track item.slug) {
        <app-spaces-gallery [sede]="item" />
      }

      <app-atmosphere [sede]="s" />

      <app-how-to-get-there [sede]="s" />

      <app-cta-banner
        eyebrow="Reserva tu espacio"
        [title]="'Diez personas. Una vez. ' + s.city + '.'"
        primaryLabel="Reservar mi lugar"
        [primaryLink]="'/contacto?sede=' + s.slug"
        secondaryLabel="Ver tarifas"
        secondaryLink="/tarifas"
      />
    }
  `,
  styleUrl: './place.component.scss',
})
export class PlaceComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  /** Resolved synchronously from the route snapshot so children never mount without data. */
  protected readonly sede = signal<Sede | undefined>(
    getSede(this.route.snapshot.paramMap.get('slug')),
  );

  constructor() {
    if (!this.sede()) {
      void this.router.navigate(['/sedes']);
    }

    this.route.paramMap.subscribe((params) => {
      const found = getSede(params.get('slug'));
      if (!found) {
        void this.router.navigate(['/sedes']);
        return;
      }
      this.sede.set(found);
    });
  }
}
