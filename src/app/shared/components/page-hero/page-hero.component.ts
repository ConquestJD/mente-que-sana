import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

/**
 * Reusable page hero for every secondary route.
 * Provides a consistent grain-textured banner with a Cormorant title.
 */
@Component({
  selector: 'app-page-hero',
  standalone: true,
  imports: [NgClass],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section
      class="page-hero"
      [ngClass]="'page-hero--' + backgroundVariant"
      aria-labelledby="page-hero-title"
    >
      <div class="page-hero__bg" aria-hidden="true"></div>
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
  /** Main headline (Cormorant Italic). */
  @Input({ required: true }) title!: string;
  /** Optional supporting paragraph below the title. */
  @Input() subtitle?: string;
  /** Optional small uppercase label above the title (Space Mono). */
  @Input() eyebrow?: string;
  /** Visual tone for the hero band. */
  @Input() backgroundVariant: 'dark' | 'medium' | 'light' = 'dark';
}
