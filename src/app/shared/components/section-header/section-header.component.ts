import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

/**
 * Reusable section header — eyebrow (Cinzel) + title (Cormorant Italic).
 * Centered or left-aligned variant.
 */
@Component({
  selector: 'app-section-header',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="section-header" [class.section-header--center]="align === 'center'">
      @if (eyebrow) { <span class="section-header__eyebrow title-md">{{ eyebrow }}</span> }
      <h2 class="section-header__title display-lg">
        <ng-content></ng-content>
        @if (title) { <span>{{ title }}</span> }
      </h2>
      @if (lead) { <p class="section-header__lead body-lg">{{ lead }}</p> }
    </header>
  `,
  styleUrl: './section-header.component.scss',
})
export class SectionHeaderComponent {
  /** Small uppercase label above the title. */
  @Input() eyebrow?: string;
  /** Main heading (Cormorant). If absent, use projected content. */
  @Input() title?: string;
  /** Optional lead paragraph below the title. */
  @Input() lead?: string;
  /** Text alignment. */
  @Input() align: 'left' | 'center' = 'left';
}
