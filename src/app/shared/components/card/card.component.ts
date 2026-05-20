import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

/**
 * Surface card used across previews. Wraps children with the
 * standard "Tierra Viva" card surface (dark gradient + subtle border).
 */
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgClass],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <article
      class="card"
      [ngClass]="{
        'card--featured': featured,
        'card--interactive': interactive,
        'card--padded': padded
      }"
    >
      @if (featured && badge) {
        <span class="card__badge ui-badge">{{ badge }}</span>
      }
      <ng-content></ng-content>
    </article>
  `,
  styleUrl: './card.component.scss',
})
export class CardComponent {
  /** Highlights the card with gold border + subtle glow. */
  @Input() featured = false;
  /** Adds hover lift effect. */
  @Input() interactive = false;
  /** Adds default internal padding. */
  @Input() padded = true;
  /** Optional uppercase badge displayed on featured cards. */
  @Input() badge?: string;
}
