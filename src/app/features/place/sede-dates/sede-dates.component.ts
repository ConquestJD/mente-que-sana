import { ChangeDetectionStrategy, Component, Input, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LocaleService } from '../../../core/i18n';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';
import { Sede } from '../../../shared/sedes';
import {
  formatRetreatOption,
  formatRetreatLabel,
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
          <span class="title-md">{{ eyebrow() }}</span>
          <h2 id="sdates-title" class="display-md sdates__title">
            {{ title() }} <em>{{ titleEm() }}</em>
          </h2>
          @if (next; as n) {
            <p class="body-lg sdates__lead">
              {{ nextRetreatLabel() }} <strong>{{ label(n) }}</strong>
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
                <span class="sdates__date">{{ dateLabel(retreat) }}</span>
                <span class="sdates__action ui-data">{{ reserveLabel() }}</span>
              </a>
            </li>
          }
        </ul>

        <p class="sdates__foot" appScrollReveal>
          <a routerLink="/calendario" [queryParams]="{ sede: sede.slug }">
            {{ fullCalendarLabel() }}
          </a>
        </p>
      </div>
    </section>
  `,
  styleUrl: './sede-dates.component.scss',
})
export class SedeDatesComponent {
  @Input({ required: true }) sede!: Sede;

  private readonly i18n = inject(LocaleService);

  private readonly cityVars = computed(() => ({ city: this.sede.city }));

  protected readonly eyebrow = computed(() => {
    this.i18n.locale();
    return this.i18n.tInterpolate('placeUi.sedeDates.eyebrow', this.cityVars());
  });

  protected readonly title = computed(() => {
    this.i18n.locale();
    return this.i18n.t('placeUi.sedeDates.title');
  });

  protected readonly titleEm = computed(() => {
    this.i18n.locale();
    return this.i18n.tInterpolate('placeUi.sedeDates.titleEm', this.cityVars());
  });

  protected readonly nextRetreatLabel = computed(() => {
    this.i18n.locale();
    return this.i18n.t('placeUi.sedeDates.nextRetreat');
  });

  protected readonly reserveLabel = computed(() => {
    this.i18n.locale();
    return this.i18n.t('placeUi.sedeDates.reserve');
  });

  protected readonly fullCalendarLabel = computed(() => {
    this.i18n.locale();
    return this.i18n.t('placeUi.sedeDates.fullCalendar');
  });

  protected get dates(): RetreatDate[] {
    return getRetreatsBySede(this.sede.slug as RetreatSedeSlug);
  }

  protected get next(): RetreatDate | undefined {
    return getNextRetreatForSede(this.sede.slug as RetreatSedeSlug);
  }

  protected label(retreat: RetreatDate): string {
    return formatRetreatOption(retreat, this.i18n.locale());
  }

  protected dateLabel(retreat: RetreatDate): string {
    return formatRetreatLabel(retreat, this.i18n.locale());
  }

  protected params(retreat: RetreatDate): Record<string, string> {
    return { sede: this.sede.slug, fecha: retreat.id };
  }
}
