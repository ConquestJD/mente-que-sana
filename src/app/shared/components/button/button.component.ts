import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

/**
 * Custom button component — supports anchor (routerLink/href) and native button.
 *
 * Use with content projection for the label:
 *   <app-button variant="primary" routerLink="/tarifas">Reservar</app-button>
 */
@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgClass, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (routerLink) {
      <a
        class="btn"
        [ngClass]="['btn--' + variant, size === 'lg' ? 'btn--lg' : '']"
        [routerLink]="routerLink"
      >
        <ng-content></ng-content>
        <span class="btn__arrow" aria-hidden="true">→</span>
      </a>
    } @else if (href) {
      <a
        class="btn"
        [ngClass]="['btn--' + variant, size === 'lg' ? 'btn--lg' : '']"
        [href]="href"
        [target]="external ? '_blank' : null"
        [rel]="external ? 'noopener noreferrer' : null"
      >
        <ng-content></ng-content>
        <span class="btn__arrow" aria-hidden="true">→</span>
      </a>
    } @else {
      <button
        class="btn"
        [ngClass]="['btn--' + variant, size === 'lg' ? 'btn--lg' : '']"
        [type]="type"
        [disabled]="disabled"
      >
        <ng-content></ng-content>
        <span class="btn__arrow" aria-hidden="true">→</span>
      </button>
    }
  `,
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  /** Visual variant. */
  @Input() variant: 'primary' | 'secondary' | 'ghost' | 'whatsapp' = 'primary';
  /** Size. */
  @Input() size: 'md' | 'lg' = 'md';
  /** Native button type when not a link. */
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  /** Disabled state (only for native button). */
  @Input() disabled = false;
  /** RouterLink target. */
  @Input() routerLink?: string | (string | number)[];
  /** External href (renders an `<a>`). */
  @Input() href?: string;
  /** Open external href in new tab. */
  @Input() external = false;
}
