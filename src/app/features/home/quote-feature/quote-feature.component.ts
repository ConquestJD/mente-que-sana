import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ParallaxDirective } from '../../../shared/directives/parallax.directive';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';
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
        <p
          id="qfeat-title"
          class="qfeat__text"
          appScrollReveal
          direction="up"
          [threshold]="0.25"
        >
          Llegué buscando descansar <br>
          y volví con una forma distinta de <em>respirar.</em>
        </p>
        <p class="qfeat__author" appScrollReveal [delay]="180">
          <span class="qfeat__author-line"></span>
          Valentina Mendoza · Psicóloga clínica · Arequipa
        </p>
      </div>
    </section>
  `,
  styleUrl: './quote-feature.component.scss',
})
export class QuoteFeatureComponent {
  protected readonly bg = IMG.facingMountain;
}
