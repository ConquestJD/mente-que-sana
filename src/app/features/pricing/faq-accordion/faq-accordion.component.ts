import { ChangeDetectionStrategy, Component, Input, signal } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

export interface FaqItem {
  /** Question label shown on the trigger. */
  q: string;
  /** Answer (may include short Markdown-like emphasis via *strong*). */
  a: string;
}

/**
 * Accessible accordion FAQ with expand/collapse animation.
 * The accordion is `single-open` by default — opening one closes the others.
 */
@Component({
  selector: 'app-faq-accordion',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('expand', [
      state('closed', style({ height: 0, opacity: 0, paddingTop: 0, paddingBottom: 0 })),
      state('open', style({ height: '*', opacity: 1 })),
      transition('closed <=> open', [animate('320ms cubic-bezier(0.16,1,0.3,1)')]),
    ]),
  ],
  templateUrl: './faq-accordion.component.html',
  styleUrl: './faq-accordion.component.scss',
})
export class FaqAccordionComponent {
  /** Array of questions and answers. */
  @Input() items: FaqItem[] = [];
  /** Optional section eyebrow. */
  @Input() eyebrow = 'Preguntas';
  /** Optional section title. */
  @Input() title = 'Lo que suelen preguntar.';
  /** When true, only one item can be open at a time. */
  @Input() singleOpen = true;

  protected readonly openIndex = signal<number | null>(0);

  protected toggle(i: number): void {
    if (this.singleOpen) {
      this.openIndex.set(this.openIndex() === i ? null : i);
    } else {
      this.openIndex.set(this.openIndex() === i ? null : i);
    }
  }

  protected isOpen(i: number): boolean {
    return this.openIndex() === i;
  }
}
