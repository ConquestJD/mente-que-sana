import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';
import { LocaleService, TranslatePipe } from '../../../core/i18n';
import { getVisibleSedes } from '../../../shared/localized-sedes';

/**
 * Vista previa de sedes en el home — Urubamba y Tacna.
 */
@Component({
  selector: 'app-sedes-preview',
  standalone: true,
  imports: [RouterLink, ScrollRevealDirective, DecimalPipe, TranslatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="spreview" aria-labelledby="spreview-title">
      <div class="spreview__bg" aria-hidden="true"></div>

      <div class="container spreview__inner">
        @if (header(); as h) {
          <header class="spreview__head" appScrollReveal>
            <span class="title-md spreview__eyebrow">{{ h.eyebrow }}</span>
            <h2 id="spreview-title" class="spreview__title">
              {{ h.title }}<br> <em>{{ h.titleEm }}</em>
            </h2>
            <p class="body-lg spreview__lead">{{ h.lead }}</p>
          </header>
        }

        @if (contrast(); as c) {
          <div class="spreview__contrast" appScrollReveal [delay]="100">
            <div class="spreview__contrast-item">
              <span class="spreview__contrast-num">{{ c.urubamba.num }}</span>
              <span class="spreview__contrast-label">{{ c.urubamba.label }}</span>
            </div>
            <span class="spreview__contrast-vs" aria-hidden="true">↔</span>
            <div class="spreview__contrast-item">
              <span class="spreview__contrast-num">{{ c.tacna.num }}</span>
              <span class="spreview__contrast-label">{{ c.tacna.label }}</span>
            </div>
          </div>
        }

        <ul class="spreview__grid">
          @for (sede of sedes(); track sede.slug; let i = $index) {
            <li
              class="spreview__cell"
              [class.is-flagship]="sede.flagship"
              appScrollReveal
              [delay]="160 + i * 140"
            >
              <a class="spchip" [routerLink]="['/sedes', sede.slug]">
                <div
                  class="spchip__img"
                  [style.background-image]="'url(' + sede.heroImage + ')'"
                  aria-hidden="true"
                ></div>
                <div class="spchip__veil" aria-hidden="true"></div>
                <span class="spchip__index" aria-hidden="true">{{ i + 1 | number: '2.0-0' }}</span>

                @if (sede.flagship) {
                  <span class="spchip__badge">{{ 'home.sedesPreview.badge' | translate }}</span>
                }

                <div class="spchip__body">
                  <span class="spchip__region ui-data">{{ sede.region }}</span>
                  <h3 class="spchip__city">{{ sede.city }}</h3>
                  <p class="spchip__tagline">{{ sede.tagline }}</p>
                  <div class="spchip__meta">
                    <span class="spchip__alt">{{ sede.altitude }}</span>
                    <span class="spchip__price">{{ 'home.sedesPreview.from' | translate }} {{ sede.priceFrom }}</span>
                  </div>
                  <span class="spchip__cta">
                    {{ 'home.sedesPreview.cardCta' | translate }}
                    <span class="spchip__arrow" aria-hidden="true">→</span>
                  </span>
                </div>
              </a>
            </li>
          }
        </ul>

        <div class="spreview__cta" appScrollReveal [delay]="420">
          <a routerLink="/sedes" class="spreview__cta-link">
            {{ 'home.sedesPreview.compareCta' | translate }}
            <span class="spreview__cta-arrow" aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  `,
  styleUrl: './sedes-preview.component.scss',
})
export class SedesPreviewComponent {
  protected readonly i18n = inject(LocaleService);

  protected readonly header = computed(() => {
    this.i18n.locale();
    return this.i18n.tObject<{
      eyebrow: string;
      title: string;
      titleEm: string;
      lead: string;
    }>('home.sedesPreview.header');
  });

  protected readonly contrast = computed(() => {
    this.i18n.locale();
    return this.i18n.tObject<{
      urubamba: { num: string; label: string };
      tacna: { num: string; label: string };
    }>('home.sedesPreview.contrast');
  });

  protected readonly sedes = computed(() => getVisibleSedes(this.i18n.locale()));
}
