import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';
import { ParallaxDirective } from '../../../shared/directives/parallax.directive';
import { LocaleService } from '../../../core/i18n';
import { IMG } from '../../../shared/images';

interface ExperienceIntentCopy {
  eyebrow: string;
  title: string;
  titleEm: string;
  titleEnd: string;
  pillars: Array<{ index: string; title: string; body: string }>;
}

const PILLAR_IMAGES = [IMG.handsTea, IMG.yogaSunrise, IMG.paperJournal];

/**
 * Sección cinematográfica de transición: 3 pilares del retiro con imagen
 * grande, número y descripción. Diseño tipo editorial / showcase.
 */
@Component({
  selector: 'app-experience-intent',
  standalone: true,
  imports: [ScrollRevealDirective, ParallaxDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="intent" aria-labelledby="intent-title">
      <div class="intent__bg" aria-hidden="true"></div>

      <div class="container intent__inner">
        <header class="intent__head" appScrollReveal>
          <span class="title-md intent__eyebrow">{{ copy().eyebrow }}</span>
          <h2 id="intent-title" class="intent__title">
            {{ copy().title }} <em>{{ copy().titleEm }}</em>{{ copy().titleEnd }}
          </h2>
        </header>

        <div class="intent__pillars">
          @for (pillar of pillars(); track pillar.title; let i = $index) {
            <article
              class="intent__pillar"
              [class.is-reverse]="i % 2 === 1"
              appScrollReveal
              [delay]="i * 120"
            >
              <figure class="intent__media">
                <div
                  class="intent__image"
                  appParallax
                  [speed]="0.14"
                  [style.background-image]="'url(' + pillar.image + ')'"
                  aria-hidden="true"
                ></div>
                <span class="intent__index">{{ pillar.index }}</span>
              </figure>

              <div class="intent__body">
                <h3 class="intent__pillar-title">{{ pillar.title }}</h3>
                <p class="body-lg intent__pillar-text">{{ pillar.body }}</p>
              </div>
            </article>
          }
        </div>
      </div>
    </section>
  `,
  styleUrl: './experience-intent.component.scss',
})
export class ExperienceIntentComponent {
  protected readonly i18n = inject(LocaleService);

  protected readonly copy = computed(() => {
    this.i18n.locale();
    return this.i18n.tObject<ExperienceIntentCopy>('experience.experienceIntent')!;
  });

  protected readonly pillars = computed(() =>
    this.copy().pillars.map((pillar, i) => ({ ...pillar, image: PILLAR_IMAGES[i] })),
  );
}
