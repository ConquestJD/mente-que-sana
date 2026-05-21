import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';

interface Stat {
  value: string;
  label: string;
  hint: string;
}

@Component({
  selector: 'app-location-stats',
  standalone: true,
  imports: [ScrollRevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="stats section section--cream" aria-labelledby="stats-title">
      <div class="container">
        <header class="stats__head" appScrollReveal>
          <span class="title-md">Coordenadas</span>
          <h2 id="stats-title" class="display-md">Un terreno familiar a un paso del Valle Sagrado.</h2>
        </header>

        <ul class="stats__grid">
          @for (stat of stats; track stat.label; let i = $index) {
            <li class="stats__cell" appScrollReveal [delay]="i * 100">
              <span class="stats__value">{{ stat.value }}</span>
              <span class="stats__label title-sm">{{ stat.label }}</span>
              <span class="stats__hint body-sm">{{ stat.hint }}</span>
            </li>
          }
        </ul>
      </div>
    </section>
  `,
  styleUrl: './location-stats.component.scss',
})
export class LocationStatsComponent {
  protected readonly stats: Stat[] = [
    { value: '2,870', label: 'metros s.n.m.', hint: 'Altitud que expande consciencia y respiración.' },
    { value: '45 min', label: 'desde Cusco', hint: 'Por la ruta panorámica al Valle Sagrado.' },
    { value: '3.2 ha', label: 'de terreno privado', hint: 'Campos verdes, piedra andina y silencio.' },
    { value: '360°',  label: 'de vista panorámica', hint: 'Cusco al norte, Urubamba al sur.' },
  ];
}
