import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { LocaleService, TranslatePipe } from '../../../core/i18n';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';

interface ManifestoLine {
  title: string;
  description: string;
}

@Component({
  selector: 'app-manifesto',
  standalone: true,
  imports: [ScrollRevealDirective, TranslatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="manifesto section section--cream" aria-labelledby="manifesto-title">
      <div class="manifesto__grain" aria-hidden="true"></div>
      <div class="container">
        <header class="manifesto__intro" appScrollReveal>
          <span class="title-md">{{ 'community.manifesto.eyebrow' | translate }}</span>
          <h2 id="manifesto-title" class="manifesto__title">
            {{ 'community.manifesto.title' | translate }}
            <em>{{ 'community.manifesto.titleEm' | translate }}</em>
          </h2>
          <p class="manifesto__sub body-lg">
            {{ 'community.manifesto.sub' | translate }}
          </p>
        </header>

        @if (welcome()[0]; as lead) {
          <article class="manifesto__lead" appScrollReveal>
            <span class="manifesto__lead-index ui-data">01</span>
            <div>
              <h3 class="manifesto__lead-title">{{ lead.title }}</h3>
              <p class="manifesto__lead-desc body-lg">{{ lead.description }}</p>
            </div>
          </article>
        }

        <div class="manifesto__columns">
          <div class="manifesto__col">
            <h3 class="manifesto__col-label ui-data">{{ 'community.manifesto.forYouLabel' | translate }}</h3>
            <ul class="manifesto__list">
              @for (line of welcomeRest(); track line.title; let i = $index) {
                <li class="manifesto__line" appScrollReveal [delay]="i * 80">
                  <span class="manifesto__index ui-data">{{ indexLabel(i + 2) }}</span>
                  <div>
                    <h4 class="manifesto__line-title">{{ line.title }}</h4>
                    <p class="manifesto__line-desc body-md">{{ line.description }}</p>
                  </div>
                </li>
              }
            </ul>
          </div>

          <div class="manifesto__col manifesto__col--out">
            <h3 class="manifesto__col-label ui-data">{{ 'community.manifesto.notForYouLabel' | translate }}</h3>
            <ul class="manifesto__list manifesto__list--out">
              @for (line of notFor(); track line.title; let i = $index) {
                <li class="manifesto__line manifesto__line--out" appScrollReveal [delay]="i * 80">
                  <span class="manifesto__index manifesto__index--out ui-data">—</span>
                  <div>
                    <h4 class="manifesto__line-title">{{ line.title }}</h4>
                    <p class="manifesto__line-desc body-md">{{ line.description }}</p>
                  </div>
                </li>
              }
            </ul>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrl: './manifesto.component.scss',
})
export class ManifestoComponent {
  private readonly i18n = inject(LocaleService);

  protected readonly welcome = computed(() => {
    this.i18n.locale();
    return this.i18n.tObject<ManifestoLine[]>('community.manifesto.welcome') ?? [];
  });

  protected readonly welcomeRest = computed(() => this.welcome().slice(1));

  protected readonly notFor = computed(() => {
    this.i18n.locale();
    return this.i18n.tObject<ManifestoLine[]>('community.manifesto.notFor') ?? [];
  });

  protected indexLabel(n: number): string {
    return String(n).padStart(2, '0');
  }
}
