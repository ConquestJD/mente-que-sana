import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';
import { ParallaxDirective } from '../../../shared/directives/parallax.directive';
import { IMG } from '../../../shared/images';

interface Stat {
  value: string;
  label: string;
  hint: string;
}

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
          [style.background-image]="'url(' + img + ')'"
          aria-hidden="true"
        ></div>
        <div class="lstats__panorama-veil" aria-hidden="true"></div>
        <div class="lstats__panorama-text container">
          <span class="lstats__panorama-eyebrow ui-data">2.870 m · 13°31'S · Valle Sagrado</span>
          <h2 id="lstats-title" class="lstats__panorama-title">
            Un terreno familiar <em>sobre el Valle Sagrado.</em>
          </h2>
        </div>
      </div>

      <div class="container">
        <ul class="lstats__grid">
          @for (stat of stats; track stat.label; let i = $index) {
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
  protected readonly img = IMG.morningMist;
  protected readonly stats: Stat[] = [
    { value: '2,870', label: 'metros s.n.m.', hint: 'Altitud que expande consciencia y respiración.' },
    { value: '45 min', label: 'desde Cusco', hint: 'Por la ruta panorámica al Valle Sagrado.' },
    { value: '3.2 ha', label: 'de terreno privado', hint: 'Campos verdes, piedra andina y silencio.' },
    { value: '360°',  label: 'de vista panorámica', hint: 'Cusco al norte, Urubamba al sur.' },
  ];
}
