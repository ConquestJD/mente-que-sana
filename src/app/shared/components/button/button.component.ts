import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgClass, NgTemplateOutlet } from '@angular/common';
import { RouterLink } from '@angular/router';

/**
 * Custom button component — supports anchor (routerLink/href) and native button.
 *
 * Usage with content projection for the label:
 *   <app-button variant="primary" routerLink="/tarifas">Reservar</app-button>
 *
 * Internamente proyectamos `<ng-content>` UNA sola vez en un `<ng-template>`
 * y lo embebemos con `ngTemplateOutlet` en cada rama del control flow. Esto
 * evita el bug conocido donde `<ng-content>` repetido en ramas `@if/@else`
 * no muestra el contenido (Angular sólo proyecta al primer slot).
 */
@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgClass, NgTemplateOutlet, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-template #labelTpl>
      <span class="btn__label"><ng-content></ng-content></span>
      @if (showArrow) {
        <span class="btn__arrow" aria-hidden="true">→</span>
      }
    </ng-template>

    @if (routerLink) {
      <a
        class="btn"
        [ngClass]="cssClasses"
        [routerLink]="routerLink"
        [attr.aria-label]="ariaLabel || null"
      >
        <ng-container *ngTemplateOutlet="labelTpl"></ng-container>
      </a>
    } @else if (href) {
      <a
        class="btn"
        [ngClass]="cssClasses"
        [href]="href"
        [target]="external ? '_blank' : null"
        [rel]="external ? 'noopener noreferrer' : null"
        [attr.aria-label]="ariaLabel || null"
      >
        <ng-container *ngTemplateOutlet="labelTpl"></ng-container>
      </a>
    } @else {
      <button
        class="btn"
        [ngClass]="cssClasses"
        [type]="type"
        [disabled]="disabled"
        [attr.aria-label]="ariaLabel || null"
      >
        <ng-container *ngTemplateOutlet="labelTpl"></ng-container>
      </button>
    }
  `,
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  /** Visual variant. */
  @Input() variant: 'primary' | 'secondary' | 'ghost' | 'whatsapp' | 'gold' = 'primary';
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
  /** Show the trailing arrow next to the label. Default true. */
  @Input() showArrow = true;
  /** Optional explicit aria-label (otherwise the projected text is used). */
  @Input() ariaLabel?: string;

  /** Composed CSS classes for the host element. */
  protected get cssClasses(): string[] {
    return [
      'btn--' + this.variant,
      this.size === 'lg' ? 'btn--lg' : '',
    ];
  }
}
