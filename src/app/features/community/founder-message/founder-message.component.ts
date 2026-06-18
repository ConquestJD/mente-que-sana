import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { LocaleService, TranslatePipe } from '../../../core/i18n';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';
import { ParallaxDirective } from '../../../shared/directives/parallax.directive';
import { IMG } from '../../../shared/images';

@Component({
  selector: 'app-founder-message',
  standalone: true,
  imports: [ScrollRevealDirective, ParallaxDirective, TranslatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="founder section section--mist" aria-labelledby="founder-title">
      <div class="founder__grain" aria-hidden="true"></div>
      <div class="container">
        <div class="founder__layout">
          <figure class="founder__portrait" appScrollReveal direction="left">
            <div class="founder__frame" aria-hidden="true"></div>
            <div
              class="founder__photo"
              appParallax
              [speed]="0.12"
              [style.background-image]="'url(' + portrait + ')'"
              role="img"
              [attr.aria-label]="'community.founderMessage.portraitAria' | translate"
            ></div>
            <figcaption class="founder__caption">
              <span class="title-sm">{{ 'community.founderMessage.captionRole' | translate }}</span>
              <span class="founder__caption-name">{{ 'community.founderMessage.name' | translate }}</span>
              <span class="body-sm founder__caption-role">
                {{ 'community.founderMessage.credentials' | translate }}
              </span>
            </figcaption>
          </figure>

          <div class="founder__text" appScrollReveal direction="right" [delay]="120">
            <span class="title-md founder__eyebrow">{{ 'community.founderMessage.eyebrow' | translate }}</span>
            <h2 id="founder-title" class="founder__title">
              {{ 'community.founderMessage.title' | translate }}
              <em>{{ 'community.founderMessage.titleEm' | translate }}</em>
            </h2>

            @for (p of paragraphs(); track $index) {
              <p class="founder__p body-lg">{{ p }}</p>
            }

            <blockquote class="founder__signature">
              <span class="founder__signature-line" aria-hidden="true"></span>
              {{ 'community.founderMessage.signature' | translate }}
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrl: './founder-message.component.scss',
})
export class FounderMessageComponent {
  private readonly i18n = inject(LocaleService);
  protected readonly portrait = IMG.founderPortrait;

  protected readonly paragraphs = computed(() => {
    this.i18n.locale();
    return this.i18n.tArray('community.founderMessage.paragraphs');
  });
}
