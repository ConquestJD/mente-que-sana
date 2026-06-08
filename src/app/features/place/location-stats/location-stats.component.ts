import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';
import { ParallaxDirective } from '../../../shared/directives/parallax.directive';
import { Sede } from '../../../shared/sedes';

@Component({
  selector: 'app-location-stats',
  standalone: true,
  imports: [ScrollRevealDirective, ParallaxDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="lstats section section--cream" aria-labelledby="lstats-title">
      <div class="lstats__panorama" appScrollReveal>
        <div
          class="lstats__panorama-img"
          appParallax
          [speed]="0.18"
          [style.background-image]="'url(' + sede.place.panoramaImage + ')'"
          aria-hidden="true"
        ></div>
        <div class="lstats__panorama-veil" aria-hidden="true"></div>
        <div class="lstats__panorama-text container">
          <span class="lstats__panorama-eyebrow ui-data">{{ sede.place.panoramaEyebrow }}</span>
          <h2 id="lstats-title" class="lstats__panorama-title">
            {{ sede.place.panoramaTitle }} <em>{{ sede.place.panoramaTitleEm }}</em>
          </h2>
        </div>
      </div>

      <div class="container">
        <ul class="lstats__grid">
          @for (stat of sede.place.stats; track stat.label; let i = $index) {
            <li class="lstats__cell" appScrollReveal [delay]="i * 100">
              <span class="lstats__cell-marker">{{ '0' + (i + 1) }}</span>
              <span class="lstats__value">{{ stat.value }}</span>
              <span class="lstats__label title-sm">{{ stat.label }}</span>
              <span class="lstats__hint body-sm">{{ stat.hint }}</span>
            </li>
          }
        </ul>
      </div>
    </section>
  `,
  styleUrl: './location-stats.component.scss',
})
export class LocationStatsComponent {
  @Input({ required: true }) sede!: Sede;
}
