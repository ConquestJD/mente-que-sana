import { ChangeDetectionStrategy, Component } from '@angular/core';

interface MarqueeItem {
  number: string;
  label: string;
}

/**
 * Banda horizontal en bucle infinito con datos clave del retiro.
 * Animación CSS pura (translateX) — pausa al hover.
 */
@Component({
  selector: 'app-stats-marquee',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="marquee section--mist" aria-label="Datos del retiro">
      <div class="marquee__track" aria-hidden="true">
        @for (group of [0, 1]; track group) {
          <div class="marquee__group">
            @for (item of items; track item.label) {
              <div class="marquee__item">
                <span class="marquee__num">{{ item.number }}</span>
                <span class="marquee__label">{{ item.label }}</span>
              </div>
              <span class="marquee__sep" aria-hidden="true">✦</span>
            }
          </div>
        }
      </div>
    </section>
  `,
  styleUrl: './stats-marquee.component.scss',
})
export class StatsMarqueeComponent {
  protected readonly items: MarqueeItem[] = [
    { number: '10',     label: 'personas en círculo' },
    { number: '2',      label: 'días vivenciales' },
    { number: '30',     label: 'días de seguimiento' },
    { number: '2,870m', label: 'sobre el nivel del mar' },
    { number: '3',      label: 'hectáreas privadas' },
    { number: '45m',    label: 'desde Cusco' },
    { number: '12 años',label: 'de práctica del facilitador' },
  ];
}
