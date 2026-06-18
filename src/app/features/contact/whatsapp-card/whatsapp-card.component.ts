import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { LocaleService, TranslatePipe } from '../../../core/i18n';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';

interface StripItem {
  strong: string;
  text: string;
}

interface Hour {
  day: string;
  hours: string;
}

@Component({
  selector: 'app-whatsapp-card',
  standalone: true,
  imports: [ScrollRevealDirective, TranslatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="wac" aria-labelledby="wac-title">
      <div class="wac__bg" aria-hidden="true"></div>

      <div class="container wac__inner">
        <div class="wac__strip" appScrollReveal>
          @for (item of strip(); track item.strong; let last = $last) {
            <span class="wac__strip-item"><strong>{{ item.strong }}</strong> {{ item.text }}</span>
            @if (!last) {
              <span class="wac__strip-dot" aria-hidden="true"></span>
            }
          }
        </div>

        <div class="wac__grid">
          <div class="wac__panel" appScrollReveal direction="left">
            <span class="title-md wac__eyebrow">{{ 'contactExtra.whatsappCard.eyebrow' | translate }}</span>
            <h2 id="wac-title" class="wac__title">
              {{ 'contactExtra.whatsappCard.title' | translate }}<br>
              <em>{{ 'contactExtra.whatsappCard.titleEm' | translate }}</em>
            </h2>

            <a class="wac__number" [href]="waLink" target="_blank" rel="noopener noreferrer">
              <span class="wac__number-label">{{ 'contactExtra.whatsappCard.numberLabel' | translate }}</span>
              <span class="wac__number-value">{{ display }}</span>
            </a>

            <p class="body-md wac__sub">
              {{ 'contactExtra.whatsappCard.sub' | translate }}
            </p>

            <ul class="wac__hours">
              @for (h of hours(); track h.day) {
                <li>
                  <span class="wac__hours-day">{{ h.day }}</span>
                  <span class="wac__hours-time ui-data">{{ h.hours }}</span>
                </li>
              }
            </ul>
          </div>

          <aside class="wac__suggested" appScrollReveal direction="right" [delay]="140">
            <span class="wac__suggested-index" aria-hidden="true">→</span>
            <span class="title-sm wac__suggested-label">{{ 'contactExtra.whatsappCard.suggestedLabel' | translate }}</span>
            <blockquote class="wac__quote">
              “{{ suggestedQuote() }}”
            </blockquote>
            <a class="wac__quick" [href]="quickLink()" target="_blank" rel="noopener noreferrer">
              {{ 'contactExtra.whatsappCard.quickSend' | translate }}
            </a>
          </aside>
        </div>
      </div>
    </section>
  `,
  styleUrl: './whatsapp-card.component.scss',
})
export class WhatsappCardComponent {
  private readonly i18n = inject(LocaleService);

  protected readonly phone = '51998901054';
  protected readonly display = '+51 998 901 054';

  protected readonly strip = computed(() => {
    this.i18n.locale();
    return this.i18n.tObject<StripItem[]>('contactExtra.whatsappCard.strip') ?? [];
  });

  protected readonly hours = computed(() => {
    this.i18n.locale();
    return this.i18n.tObject<Hour[]>('contactExtra.whatsappCard.hours') ?? [];
  });

  protected readonly suggestedQuote = computed(() => {
    this.i18n.locale();
    return this.i18n.t('contactExtra.whatsappCard.suggestedQuote');
  });

  protected readonly defaultMessage = computed(() => {
    this.i18n.locale();
    return this.i18n.t('contactExtra.whatsappCard.defaultMessage');
  });

  protected get waLink(): string {
    return `https://wa.me/${this.phone}`;
  }

  protected quickLink(): string {
    return `https://wa.me/${this.phone}?text=${encodeURIComponent(this.defaultMessage())}`;
  }
}
