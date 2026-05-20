import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';

/**
 * Banner CTA reusable across pages — gold gradient on dark with a strong
 * editorial headline and primary button.
 */
@Component({
  selector: 'app-cta-banner',
  standalone: true,
  imports: [ButtonComponent, ScrollRevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="cta-banner section">
      <div class="cta-banner__bg" aria-hidden="true"></div>
      <div class="container container-narrow cta-banner__inner" appScrollReveal>
        <span class="cta-banner__eyebrow title-md">{{ eyebrow }}</span>
        <h2 class="cta-banner__title">{{ title }}</h2>
        @if (subtitle) { <p class="cta-banner__sub body-lg">{{ subtitle }}</p> }
        <div class="cta-banner__actions">
          <app-button variant="primary" size="lg" [routerLink]="primaryLink">
            {{ primaryLabel }}
          </app-button>
          @if (secondaryLink && secondaryLabel) {
            <app-button variant="ghost" [routerLink]="secondaryLink">
              {{ secondaryLabel }}
            </app-button>
          }
        </div>
      </div>
    </section>
  `,
  styleUrl: './cta-banner.component.scss',
})
export class CtaBannerComponent {
  /** Small uppercase label above the title. */
  @Input() eyebrow = 'Tu siguiente paso';
  /** Main headline. */
  @Input() title = '¿Listo para transformar tu mente?';
  /** Optional supporting paragraph below the title. */
  @Input() subtitle?: string;
  /** Primary CTA button label. */
  @Input() primaryLabel = 'Ver tarifas';
  /** Primary CTA router link. */
  @Input() primaryLink = '/tarifas';
  /** Secondary CTA button label (optional). */
  @Input() secondaryLabel?: string;
  /** Secondary CTA router link (optional). */
  @Input() secondaryLink?: string;
}
