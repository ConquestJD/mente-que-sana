import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ButtonComponent } from '../../../shared/components/button/button.component';

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
  /** Treat as scarcity tier (red badge). */
  scarcity?: boolean;
  /** Number of remaining spots in this tier (drives the inline counter). */
  spotsLeft?: number;
  /** Total spots in this tier. */
  spotsTotal?: number;
}

/**
 * Pricing card displayed on the /tarifas grid.
 * Receives the entire tier definition via @Input — no internal data.
 */
@Component({
  selector: 'app-pricing-card',
  standalone: true,
  imports: [ButtonComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './pricing-card.component.html',
  styleUrl: './pricing-card.component.scss',
})
export class PricingCardComponent {
  /** Tier definition consumed by the card. */
  @Input({ required: true }) tier!: PricingTier;
}
