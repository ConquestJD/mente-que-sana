import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import {
  formatRetreatOption,
  getNextRetreat,
  getUpcomingRetreats,
  RetreatDate,
} from '../../../shared/retreat-dates';

@Component({
  selector: 'app-dates-preview',
  standalone: true,
  imports: [RouterLink, ScrollRevealDirective, ButtonComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="dprev section section--white" aria-labelledby="dprev-title">
      <div class="container">
        <header class="dprev__head" appScrollReveal>
          <span class="title-md">Próximas fechas</span>
          <h2 id="dprev-title" class="display-lg dprev__title">
            Elige cuándo <em>sembrar.</em>
          </h2>
          <p class="body-lg dprev__lead">
            Retiros alternados entre Urubamba y Tacna. Reserva con sede y fecha
            o explora el calendario completo.
          </p>
        </header>

        @if (next; as n) {
          <article class="dprev__featured" appScrollReveal>
            <span class="dprev__featured-label ui-data">Siguiente cohorte</span>
            <h3 class="dprev__featured-title">{{ label(n) }}</h3>
            <a
              class="dprev__featured-link"
              routerLink="/contacto"
              [queryParams]="params(n)"
            >
              Reservar esta fecha →
            </a>
          </article>
        }

        <ul class="dprev__list">
          @for (retreat of upcoming; track retreat.id; let i = $index) {
            <li appScrollReveal [delay]="i * 60">
              <a
                class="dprev__row"
                routerLink="/contacto"
                [queryParams]="params(retreat)"
              >
                <span class="dprev__row-date ui-data">{{ retreat.label }}</span>
                <span
                  class="dprev__row-sede"
                  [class.is-urubamba]="retreat.sedeSlug === 'urubamba'"
                  [class.is-tacna]="retreat.sedeSlug === 'tacna'"
                >
                  {{ retreat.sedeSlug === 'urubamba' ? 'Urubamba' : 'Tacna' }}
                </span>
                <span class="dprev__row-arrow" aria-hidden="true">→</span>
              </a>
            </li>
          }
        </ul>

        <div class="dprev__cta" appScrollReveal>
          <app-button variant="secondary" size="lg" routerLink="/calendario">
            Ver calendario completo
          </app-button>
        </div>
      </div>
    </section>
  `,
  styleUrl: './dates-preview.component.scss',
})
export class DatesPreviewComponent {
  protected readonly next = getNextRetreat();
  protected readonly upcoming = getUpcomingRetreats(6);

  protected label(retreat: RetreatDate): string {
    return formatRetreatOption(retreat);
  }

  protected params(retreat: RetreatDate): Record<string, string> {
    const q: Record<string, string> = { fecha: retreat.id };
    if (retreat.sedeSlug) q['sede'] = retreat.sedeSlug;
    return q;
  }
}
