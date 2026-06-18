import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { LocaleService, TranslatePipe } from '../../../core/i18n';

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
  imports: [TranslatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="marquee section--mist" [attr.aria-label]="'home.statsMarquee.aria' | translate">
      <div class="marquee__track" aria-hidden="true">
        @for (group of [0, 1]; track group) {
          <div class="marquee__group">
            @for (item of items(); track item.label) {
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
  protected readonly i18n = inject(LocaleService);

  protected readonly items = computed((): MarqueeItem[] => {
    this.i18n.locale();
    return this.i18n.tObject<MarqueeItem[]>('home.statsMarquee.items') ?? [];
  });
}
