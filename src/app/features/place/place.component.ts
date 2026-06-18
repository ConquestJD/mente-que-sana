import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { LocationStatsComponent } from './location-stats/location-stats.component';
import { SpacesGalleryComponent } from './spaces-gallery/spaces-gallery.component';
import { AtmosphereComponent } from './atmosphere/atmosphere.component';
import { HowToGetThereComponent } from './how-to-get-there/how-to-get-there.component';
import { SedeDatesComponent } from './sede-dates/sede-dates.component';
import { CtaBannerComponent } from '../experience/cta-banner/cta-banner.component';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { ParallaxDirective } from '../../shared/directives/parallax.directive';
import { LocaleService, TranslatePipe } from '../../core/i18n';
import { getLocalizedSede } from '../../shared/localized-sedes';
import { Sede } from '../../shared/sedes';
import { getNextRetreatForSede, RetreatSedeSlug } from '../../shared/retreat-dates';

@Component({
  selector: 'app-place',
  standalone: true,
  imports: [
    PageHeroComponent,
    LocationStatsComponent,
    SpacesGalleryComponent,
    AtmosphereComponent,
    HowToGetThereComponent,
    SedeDatesComponent,
    CtaBannerComponent,
    ScrollRevealDirective,
    ParallaxDirective,
    TranslatePipe,
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
          <span class="placeestablish__eyebrow ui-data" appScrollReveal>{{ s.place.establish.eyebrow }}</span>
          <h2 class="placeestablish__title" appScrollReveal [delay]="120">
            {{ s.place.establish.title }} <em>{{ s.place.establish.titleEm }}</em>
          </h2>
          <p class="placeestablish__sub" appScrollReveal [delay]="280">
            {{ s.place.establish.lead }}
          </p>
        </div>
        <span class="placeestablish__arrow" aria-hidden="true">
          <span class="placeestablish__arrow-line"></span>
          <span class="placeestablish__arrow-label">{{ 'placeUi.sections.scroll' | translate }}</span>
        </span>
      </section>

      @for (item of [s]; track item.slug) {
        <app-spaces-gallery [sede]="item" />
      }

      <app-atmosphere [sede]="s" />

      <app-how-to-get-there [sede]="s" />

      <app-sede-dates [sede]="s" />

      <app-cta-banner
        [eyebrow]="'placeUi.ctaBanner.eyebrow' | translate"
        [title]="('placeUi.ctaBanner.titlePrefix' | translate) + ' ' + s.city + '.'"
        [primaryLabel]="'placeUi.ctaBanner.primaryLabel' | translate"
        [primaryLink]="contactLink(s)"
        [secondaryLabel]="'placeUi.ctaBanner.secondaryLabel' | translate"
        [secondaryLink]="'/calendario?sede=' + s.slug"
      />
    }
  `,
  styleUrl: './place.component.scss',
})
export class PlaceComponent {
  private readonly i18n = inject(LocaleService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  protected readonly slug = signal<string | null>(this.route.snapshot.paramMap.get('slug'));

  protected readonly sede = computed(() => {
    this.i18n.locale();
    return getLocalizedSede(this.slug(), this.i18n.locale());
  });

  constructor() {
    if (!this.sede()) {
      void this.router.navigate(['/sedes']);
    }

    this.route.paramMap.subscribe((params) => {
      const slug = params.get('slug');
      this.slug.set(slug);
      if (!getLocalizedSede(slug, this.i18n.locale())) {
        void this.router.navigate(['/sedes']);
      }
    });
  }

  protected contactLink(s: Sede): string {
    const next = getNextRetreatForSede(s.slug as RetreatSedeSlug);
    if (next) {
      return `/contacto?sede=${s.slug}&fecha=${next.id}`;
    }
    return `/contacto?sede=${s.slug}`;
  }
}
