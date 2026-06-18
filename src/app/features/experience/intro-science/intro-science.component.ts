import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';
import { ParallaxDirective } from '../../../shared/directives/parallax.directive';
import { LocaleService } from '../../../core/i18n';
import { IMG } from '../../../shared/images';

interface IntroScienceCopy {
  eyebrow: string;
  title: string;
  titleEm: string;
  titleEnd: string;
  photoCaptionLabel: string;
  photoCaption: string;
  badgeEyebrow: string;
  badgeText: string;
  paragraphs: string[];
  stats: Array<{ number: string; label: string }>;
}

const STAT_IMAGES = [IMG.herbs, IMG.paperJournal, IMG.cuscoVista];

@Component({
  selector: 'app-intro-science',
  standalone: true,
  imports: [ScrollRevealDirective, ParallaxDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="intro" aria-labelledby="intro-title">
      <div class="intro__bg" aria-hidden="true"></div>

      <div class="container intro__inner">
        <div class="intro__head">
          <span class="intro__eyebrow title-md" appScrollReveal>{{ copy().eyebrow }}</span>
          <h2 id="intro-title" class="intro__title" appScrollReveal [delay]="120">
            {{ copy().title }}
            <em>{{ copy().titleEm }}</em>{{ copy().titleEnd }}
          </h2>
        </div>

        <div class="intro__split">
          <div class="intro__visual" appScrollReveal direction="left">
            <figure class="intro__photo intro__photo--main">
              <div
                class="intro__photo-bg"
                appParallax
                [speed]="0.15"
                [style.background-image]="'url(' + photoMain + ')'"
                aria-hidden="true"
              ></div>
              <figcaption class="intro__photo-caption">
                <span class="ui-data">{{ copy().photoCaptionLabel }}</span>
                {{ copy().photoCaption }}
              </figcaption>
            </figure>
            <figure class="intro__photo intro__photo--accent">
              <div
                class="intro__photo-bg"
                [style.background-image]="'url(' + photoAccent + ')'"
                aria-hidden="true"
              ></div>
            </figure>

            <div class="intro__badge" appScrollReveal [delay]="280">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
                <path d="M12 2.5l2.6 5.4 5.9.6-4.5 4.2 1.3 5.8L12 15.6l-5.3 2.9 1.3-5.8L3.5 8.5l5.9-.6L12 2.5z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>
              </svg>
              <div>
                <span class="intro__badge-eyebrow ui-data">{{ copy().badgeEyebrow }}</span>
                <span class="intro__badge-text">{{ copy().badgeText }}</span>
              </div>
            </div>
          </div>

          <div class="intro__text" appScrollReveal direction="right" [delay]="160">
            @for (paragraph of copy().paragraphs; track $index) {
              <p class="body-lg intro__p">{{ paragraph }}</p>
            }
          </div>
        </div>

        <div class="intro__stats" appScrollReveal [delay]="320">
          @for (stat of stats(); track stat.label) {
            <div class="intro__stat">
              <div
                class="intro__stat-image"
                [style.background-image]="'url(' + stat.image + ')'"
                aria-hidden="true"
              ></div>
              <div class="intro__stat-body">
                <span class="intro__stat-num">{{ stat.number }}</span>
                <span class="intro__stat-label">{{ stat.label }}</span>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styleUrl: './intro-science.component.scss',
})
export class IntroScienceComponent {
  protected readonly i18n = inject(LocaleService);
  protected readonly photoMain = IMG.meditationGirl;
  protected readonly photoAccent = IMG.handsTea;

  protected readonly copy = computed(() => {
    this.i18n.locale();
    return this.i18n.tObject<IntroScienceCopy>('experience.introScience')!;
  });

  protected readonly stats = computed(() =>
    this.copy().stats.map((stat, i) => ({ ...stat, image: STAT_IMAGES[i] })),
  );
}
