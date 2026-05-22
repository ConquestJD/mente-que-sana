import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';
import { ParallaxDirective } from '../../../shared/directives/parallax.directive';
import { IMG } from '../../../shared/images';

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
        [style.background-image]="'url(' + bg + ')'"
        aria-hidden="true"
      ></div>
      <div class="atmos__veil" aria-hidden="true"></div>

      <div class="atmos__content container container-prose">
        <span class="title-md atmos__eyebrow" appScrollReveal>Atmósfera</span>
        <h2 id="atmos-title" class="atmos__text" appScrollReveal [delay]="100">
          Aquí se huele <em>la leña fría</em> de la mañana,
          se escucha el viento bajando del Ausangate
          y los astros se ven con una nitidez
          <em>que recuerda por qué la mente necesita silencio.</em>
        </h2>
        <p class="atmos__sub body-lg" appScrollReveal [delay]="240">
          No es un hotel. Es una casa familiar de piedra y barro,
          adaptada para que diez personas puedan habitar dos días con cuidado,
          calidez y un nivel de presencia que rara vez se permite la ciudad.
        </p>

        <div class="atmos__senses" appScrollReveal [delay]="380">
          @for (s of senses; track s.label) {
            <div class="atmos__sense">
              <span class="atmos__sense-label ui-data">{{ s.label }}</span>
              <span class="atmos__sense-text">{{ s.text }}</span>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styleUrl: './atmosphere.component.scss',
})
export class AtmosphereComponent {
  protected readonly bg = IMG.starsAndes;
  protected readonly senses = [
    { label: 'Olfato',  text: 'Eucalipto, muña fresca, leña que arde lento.' },
    { label: 'Oído',    text: 'Viento, fuego crepitando, silencios largos.' },
    { label: 'Tacto',   text: 'Piedra fría al amanecer, lana tibia al anochecer.' },
    { label: 'Vista',   text: 'Cordillera abierta, cielo sin contaminación.' },
  ];
}
