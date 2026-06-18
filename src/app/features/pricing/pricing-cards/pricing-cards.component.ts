import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { PricingCardComponent, PricingTier } from './pricing-card.component';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';
import { LocaleService } from '../../../core/i18n';
import {
  formatRetreatOption,
  getNextRetreat,
  getScheduledRetreats,
  RetreatDate,
} from '../../../shared/retreat-dates';

interface PricingCardsCopy {
  eyebrow: string;
  title: string;
  titleEm: string;
  lead: string;
  dateLabel: string;
  note: string;
  tiers: Array<{
    key: PricingTier['key'];
    name: string;
    tagline: string;
    description: string;
    price: string;
    oldPrice?: string;
    unit: string;
    badge?: string;
    marker: string;
    features: string[];
  }>;
}

const TIER_META: Record<
  PricingTier['key'],
  Pick<PricingTier, 'featured' | 'scarcity' | 'spotsAvailable'>
> = {
  sembradores: { scarcity: true, spotsAvailable: 3 },
  lanzamiento: { featured: true, spotsAvailable: 3 },
  regular: { spotsAvailable: 4 },
};

@Component({
  selector: 'app-pricing-cards',
  standalone: true,
  imports: [PricingCardComponent, ScrollRevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="pricing" aria-labelledby="pricing-title">
      <div class="pricing__bg" aria-hidden="true"></div>

      <div class="container pricing__inner">
        <header class="pricing__head" appScrollReveal>
          <span class="title-md pricing__eyebrow">{{ copy().eyebrow }}</span>
          <h2 id="pricing-title" class="pricing__title">
            {{ copy().title }}<br> <em>{{ copy().titleEm }}</em>
          </h2>
          <p class="body-lg pricing__lead">
            {{ copy().lead }}
          </p>
        </header>

        <div class="pricing__date" appScrollReveal [delay]="120">
          <label class="pricing__date-label" for="pricing-fecha">{{ copy().dateLabel }}</label>
          <select
            id="pricing-fecha"
            class="pricing__date-select"
            [value]="selectedFecha()"
            (change)="onFechaChange($event)"
          >
            @for (retreat of retreatDates; track retreat.id) {
              <option [value]="retreat.id">{{ formatRetreat(retreat) }}</option>
            }
          </select>
        </div>

        <div class="pricing__grid">
          @for (tier of tiers(); track tier.key; let i = $index) {
            <div
              class="pricing__cell"
              appScrollReveal
              [delay]="180 + i * 120"
              [class.is-featured]="tier.featured"
              [class.is-rare]="tier.scarcity"
            >
              <app-pricing-card [tier]="tier" [fechaId]="selectedFecha()" />
            </div>
          }
        </div>

        <p class="pricing__note body-sm" appScrollReveal [delay]="500">
          {{ copy().note }}
        </p>
      </div>
    </section>
  `,
  styleUrl: './pricing-cards.component.scss',
})
export class PricingCardsComponent {
  protected readonly i18n = inject(LocaleService);
  protected readonly retreatDates = getScheduledRetreats();
  protected readonly selectedFecha = signal(getNextRetreat()?.id ?? this.retreatDates[0]?.id ?? '');

  protected readonly copy = computed(() => {
    this.i18n.locale();
    return this.i18n.tObject<PricingCardsCopy>('pricing.pricingCards')!;
  });

  protected readonly tiers = computed((): PricingTier[] =>
    this.copy().tiers.map((tier) => ({ ...tier, ...TIER_META[tier.key] })),
  );

  protected formatRetreat = (retreat: RetreatDate): string =>
    formatRetreatOption(retreat, this.i18n.locale());

  protected onFechaChange(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    this.selectedFecha.set(value);
  }
}
