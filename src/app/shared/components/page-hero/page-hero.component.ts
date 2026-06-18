import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';
import { ParallaxDirective } from '../../directives/parallax.directive';

/**
 * Page hero reutilizable. Soporta fondo con imagen (con overlay legible)
 * o variantes degradadas. Aplica un parallax sutil sobre la imagen.
 */
@Component({
  selector: 'app-page-hero',
  standalone: true,
  imports: [NgClass, NgStyle, ParallaxDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section
      class="page-hero"
      [ngClass]="[
        'page-hero--' + backgroundVariant,
        image ? 'page-hero--image' : ''
      ]"
      aria-labelledby="page-hero-title"
    >
      @if (image) {
        <div class="page-hero__image" appParallax [speed]="0.18"
             [ngStyle]="{ 'background-image': 'url(' + image + ')' }"
             aria-hidden="true"></div>
        <div class="page-hero__overlay" aria-hidden="true"></div>
      } @else {
        <div class="page-hero__bg" aria-hidden="true"></div>
      }
      <div class="page-hero__grain" aria-hidden="true"></div>

      <div class="container page-hero__inner">
        @if (eyebrow) {
          <span class="page-hero__eyebrow ui-data">{{ eyebrow }}</span>
        }
        <h1 id="page-hero-title" class="display-lg page-hero__title">{{ title }}</h1>
        @if (subtitle) {
          <p class="page-hero__subtitle body-lg">{{ subtitle }}</p>
        }
      </div>
    </section>
  `,
  styleUrl: './page-hero.component.scss',
})
export class PageHeroComponent {
  /** Headline principal (Cormorant Italic). */
  @Input({ required: true }) title!: string;
  /** Párrafo opcional bajo el título. */
  @Input() subtitle?: string;
  /** Etiqueta pequeña (Space Mono) sobre el título. */
  @Input() eyebrow?: string;
  /** Variante visual del banner. */
  @Input() backgroundVariant: 'light' | 'cream' | 'mist' | 'dark' = 'light';
  /** URL de imagen de fondo (cuando se proporciona, ignora la variante de degradado). */
  @Input() image?: string;
}
