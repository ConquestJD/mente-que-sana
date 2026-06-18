import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { CtaBannerComponent } from '../experience/cta-banner/cta-banner.component';
import { TranslatePipe } from '../../core/i18n';
import { VISIBLE_SEDES } from '../../shared/sedes';

/**
 * Índice de sedes — Urubamba y Tacna.
 */
@Component({
  selector: 'app-sedes',
  standalone: true,
  imports: [DecimalPipe, RouterLink, PageHeroComponent, ScrollRevealDirective, CtaBannerComponent, TranslatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-page-hero
      [eyebrow]="'pages.sedes.eyebrow' | translate"
      [title]="'pages.sedes.title' | translate"
      [subtitle]="'pages.sedes.subtitle' | translate"
      backgroundVariant="cream"
      [image]="heroImage"
    />

    <section class="sedes" aria-labelledby="sedes-title">
      <div class="sedes__bg" aria-hidden="true"></div>

      <div class="container sedes__inner">
        <header class="sedes__head" appScrollReveal>
          <span class="title-md sedes__eyebrow">Dos entornos · Una intención</span>
          <h2 id="sedes-title" class="sedes__title">
            Elige <em>dónde sembrar.</em>
          </h2>
          <p class="body-lg sedes__lead">
            Altura andina o luz del sur: el mismo retiro, dos formas distintas de habitar el silencio.
          </p>
        </header>

        <div class="sedes__contrast" appScrollReveal [delay]="100">
          <div class="sedes__contrast-block">
            <span class="sedes__contrast-label">Urubamba</span>
            <span class="sedes__contrast-value">2,870 m</span>
            <span class="sedes__contrast-hint">Valle Sagrado · frío seco</span>
          </div>
          <span class="sedes__contrast-divider" aria-hidden="true"></span>
          <div class="sedes__contrast-block">
            <span class="sedes__contrast-label">Tacna</span>
            <span class="sedes__contrast-value">560 m</span>
            <span class="sedes__contrast-hint">Sur sereno · sol constante</span>
          </div>
        </div>

        <ul class="sedes__grid">
          @for (sede of sedes; track sede.slug; let i = $index) {
            <li
              class="sedes__cell"
              [class.is-flagship]="sede.flagship"
              appScrollReveal
              [delay]="180 + i * 130"
            >
              <a class="sedecard" [routerLink]="['/sedes', sede.slug]">
                <div
                  class="sedecard__img"
                  [style.background-image]="'url(' + sede.heroImage + ')'"
                  aria-hidden="true"
                ></div>
                <div class="sedecard__veil" aria-hidden="true"></div>
                <span class="sedecard__index" aria-hidden="true">{{ i + 1 | number: '2.0-0' }}</span>

                @if (sede.flagship) {
                  <span class="sedecard__badge">Sede insignia</span>
                }

                <div class="sedecard__body">
                  <span class="sedecard__region ui-data">{{ sede.region }}</span>
                  <h3 class="sedecard__city">{{ sede.city }}</h3>
                  <p class="sedecard__tagline body-md">{{ sede.tagline }}</p>

                  <ul class="sedecard__highlights" role="list">
                    @for (item of sede.highlights.slice(0, 2); track item) {
                      <li class="sedecard__highlight">{{ item }}</li>
                    }
                  </ul>

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
      [eyebrow]="'pages.sedes.ctaEyebrow' | translate"
      [title]="'pages.sedes.ctaTitle' | translate"
      [primaryLabel]="'pages.sedes.ctaPrimaryLabel' | translate"
      primaryLink="/contacto"
      [secondaryLabel]="'pages.sedes.ctaSecondaryLabel' | translate"
      secondaryLink="/experiencia"
    />
  `,
  styleUrl: './sedes.component.scss',
})
export class SedesComponent {
  protected readonly sedes = VISIBLE_SEDES;
  protected readonly heroImage = VISIBLE_SEDES[0].heroImage;
}
