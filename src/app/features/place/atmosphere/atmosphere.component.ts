import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';
import { ParallaxDirective } from '../../../shared/directives/parallax.directive';
import { Sede } from '../../../shared/sedes';

@Component({
  selector: 'app-atmosphere',
  standalone: true,
  imports: [ScrollRevealDirective, ParallaxDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="atmos" aria-labelledby="atmos-title">
      <div
        class="atmos__bg"
        appParallax
        [speed]="0.25"
        [style.background-image]="'url(' + sede.place.atmosphereBg + ')'"
        aria-hidden="true"
      ></div>
      <div class="atmos__veil" aria-hidden="true"></div>

      <div class="atmos__content container container-prose">
        <span class="title-md atmos__eyebrow" appScrollReveal>Atmósfera</span>
        <h2 id="atmos-title" class="atmos__text" appScrollReveal [delay]="100">
          @for (seg of sede.place.atmosphereHeadline; track $index) {
            @if (seg.em) {
              <em>{{ seg.text }}</em>
            } @else {
              {{ seg.text }}
            }
          }
        </h2>
        <p class="atmos__sub body-lg" appScrollReveal [delay]="240">
          {{ sede.place.atmosphereSubtitle }}
        </p>

        <div class="atmos__senses" appScrollReveal [delay]="380">
          @for (sense of sede.place.senses; track sense.label) {
            <div class="atmos__sense">
              <span class="atmos__sense-label ui-data">{{ sense.label }}</span>
              <span class="atmos__sense-text">{{ sense.text }}</span>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styleUrl: './atmosphere.component.scss',
})
export class AtmosphereComponent {
  @Input({ required: true }) sede!: Sede;
}
