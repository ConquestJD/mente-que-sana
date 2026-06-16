import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { CtaBannerComponent } from '../experience/cta-banner/cta-banner.component';
import { VISIBLE_SEDES } from '../../shared/sedes';

/**
 * Índice de sedes — presenta las cuatro ubicaciones del programa
 * Mente que Sana operado por Yachaytambo.
 */
@Component({
  selector: 'app-sedes',
  standalone: true,
  imports: [RouterLink, PageHeroComponent, ScrollRevealDirective, CtaBannerComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-page-hero
      eyebrow="Nuestras sedes"
      title="Un mismo programa, dos lugares."
      subtitle="Mente que Sana se vive en Urubamba, sobre el Valle Sagrado, y en Tacna, en el sur sereno del país."
      backgroundVariant="cream"
      [image]="heroImage"
    />

    <section class="sedes section section--cream" aria-labelledby="sedes-title">
      <div class="container">
        <header class="sedes__head" appScrollReveal>
          <span class="title-md">Dos entornos</span>
          <h2 id="sedes-title" class="display-lg sedes__title">
            Elige <em>dónde sembrar.</em>
          </h2>
        </header>

        <ul class="sedes__grid">
          @for (sede of sedes; track sede.slug; let i = $index) {
            <li class="sedes__cell" appScrollReveal [delay]="i * 90">
              <a class="sedecard" [routerLink]="['/sedes', sede.slug]">
                <div
                  class="sedecard__img"
                  [style.background-image]="'url(' + sede.heroImage + ')'"
                  aria-hidden="true"
                ></div>
                <div class="sedecard__veil" aria-hidden="true"></div>

                @if (sede.flagship) {
                  <span class="sedecard__badge">Sede insignia</span>
                }

                <div class="sedecard__body">
                  <span class="sedecard__region ui-data">{{ sede.region }}</span>
                  <h3 class="sedecard__city">{{ sede.city }}</h3>
                  <p class="sedecard__tagline body-md">{{ sede.tagline }}</p>
                  <span class="sedecard__meta ui-data">
                    {{ sede.altitude }} · Desde {{ sede.priceFrom }}
                  </span>
                  <span class="sedecard__cta">
                    Conocer la sede
                    <span class="sedecard__arrow" aria-hidden="true">→</span>
                  </span>
                </div>
              </a>
            </li>
          }
        </ul>
      </div>
    </section>

    <app-cta-banner
      eyebrow="¿Listo para empezar?"
      title="Reserva en la sede que elijas."
      primaryLabel="Hablar con el equipo"
      primaryLink="/contacto"
      secondaryLabel="Ver el programa"
      secondaryLink="/experiencia"
    />
  `,
  styleUrl: './sedes.component.scss',
})
export class SedesComponent {
  protected readonly sedes = VISIBLE_SEDES;
  protected readonly heroImage = VISIBLE_SEDES[0].heroImage;
}
