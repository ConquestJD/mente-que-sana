import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '../../../core/i18n';

export interface PricingTier {
  /** Internal key used for routing/segmentation. */
  key: 'sembradores' | 'lanzamiento' | 'regular';
  /** Tier name (Cinzel). */
  name: string;
  /** Short subtitle. */
  description: string;
  /** Final price label (e.g. "S/ 1,290"). */
  price: string;
  /** Optional crossed-out price for comparison. */
  oldPrice?: string;
  /** Per-unit text shown below the price (e.g. "por persona"). */
  unit?: string;
  /** Highlight features included with the tier. */
  features: string[];
  /** Recommended/featured tier badge. */
  badge?: string;
  /** Treat this tier as the featured one. */
  featured?: boolean;
  /** Treat as the rare/scarce tier (uses gold accent instead of red). */
  scarcity?: boolean;
  /** Optional editorial tagline shown under the name. */
  tagline?: string;
  /** Optional Roman numeral marker for the card (e.g. "I", "II", "III"). */
  marker?: string;
  /** Available spots for this tier (shown on /tarifas). */
  spotsAvailable?: number;
}

/**
 * Pricing card displayed on the /tarifas grid.
 * Editorial redesign — no stains, no scarcity counters.
 */
@Component({
  selector: 'app-pricing-card',
  standalone: true,
  imports: [RouterLink, TranslatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './pricing-card.component.html',
  styleUrl: './pricing-card.component.scss',
})
export class PricingCardComponent {
  /** Tier definition consumed by the card. */
  @Input({ required: true }) tier!: PricingTier;
  /** Selected retreat date id for contact prefill. */
  @Input() fechaId?: string;

  protected get contactQueryParams(): Record<string, string> {
    const params: Record<string, string> = { tarifa: this.tier.key };
    if (this.fechaId) params['fecha'] = this.fechaId;
    return params;
  }
}
