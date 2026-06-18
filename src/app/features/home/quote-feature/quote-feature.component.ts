import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ParallaxDirective } from '../../../shared/directives/parallax.directive';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';
import { LocaleService } from '../../../core/i18n';
import { IMG } from '../../../shared/images';

/**
 * Sección de cita destacada con imagen de fondo y parallax.
 * Texto editorial grande sobre fotografía.
 */
@Component({
  selector: 'app-quote-feature',
  standalone: true,
  imports: [ParallaxDirective, ScrollRevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="qfeat" aria-labelledby="qfeat-title">
      <div class="qfeat__bg" appParallax [speed]="0.22"
           [style.background-image]="'url(' + bg + ')'"
           aria-hidden="true"></div>
      <div class="qfeat__overlay" aria-hidden="true"></div>

      <div class="container qfeat__inner">
        <span class="qfeat__mark" aria-hidden="true">"</span>
        @if (content(); as c) {
          <p
            id="qfeat-title"
            class="qfeat__text"
            appScrollReveal
            direction="up"
            [threshold]="0.25"
          >
            {{ c.quoteLine1 }} <br>
            {{ c.quoteLine2 }} <em>{{ c.quoteEm }}</em>
          </p>
          <p class="qfeat__author" appScrollReveal [delay]="180">
            <span class="qfeat__author-line"></span>
            {{ c.attribution }}
          </p>
        }
      </div>
    </section>
  `,
  styleUrl: './quote-feature.component.scss',
})
export class QuoteFeatureComponent {
  protected readonly i18n = inject(LocaleService);
  protected readonly bg = IMG.facingMountain;

  protected readonly content = computed(() => {
    this.i18n.locale();
    return this.i18n.tObject<{
      quoteLine1: string;
      quoteLine2: string;
      quoteEm: string;
      attribution: string;
    }>('home.quoteFeature');
  });
}
