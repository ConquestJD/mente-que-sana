import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';
import { Sede } from '../../../shared/sedes';
import {
  formatRetreatOption,
  getNextRetreatForSede,
  getRetreatsBySede,
  RetreatDate,
  RetreatSedeSlug,
} from '../../../shared/retreat-dates';

@Component({
  selector: 'app-sede-dates',
  standalone: true,
  imports: [RouterLink, ScrollRevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="sdates section section--mist" aria-labelledby="sdates-title">
      <div class="container container-narrow">
        <header class="sdates__head" appScrollReveal>
          <span class="title-md">Fechas en {{ sede.city }}</span>
          <h2 id="sdates-title" class="display-md sdates__title">
            Próximas cohortes en <em>{{ sede.city }}.</em>
          </h2>
          @if (next; as n) {
            <p class="body-lg sdates__lead">
              Siguiente retiro: <strong>{{ label(n) }}</strong>
            </p>
          }
        </header>

        <ul class="sdates__list">
          @for (retreat of dates; track retreat.id; let i = $index) {
            <li appScrollReveal [delay]="i * 70">
              <a
                class="sdates__item"
                routerLink="/contacto"
                [queryParams]="params(retreat)"
              >
                <span class="sdates__date">{{ retreat.label }}</span>
                <span class="sdates__action ui-data">Reservar →</span>
              </a>
            </li>
          }
        </ul>

        <p class="sdates__foot" appScrollReveal>
          <a routerLink="/calendario" [queryParams]="{ sede: sede.slug }">
            Ver calendario completo
          </a>
        </p>
      </div>
    </section>
  `,
  styleUrl: './sede-dates.component.scss',
})
export class SedeDatesComponent {
  @Input({ required: true }) sede!: Sede;

  protected get dates(): RetreatDate[] {
    return getRetreatsBySede(this.sede.slug as RetreatSedeSlug);
  }

  protected get next(): RetreatDate | undefined {
    return getNextRetreatForSede(this.sede.slug as RetreatSedeSlug);
  }

  protected label(retreat: RetreatDate): string {
    return formatRetreatOption(retreat);
  }

  protected params(retreat: RetreatDate): Record<string, string> {
    return { sede: this.sede.slug, fecha: retreat.id };
  }
}
