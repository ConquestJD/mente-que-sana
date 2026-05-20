import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-atmosphere',
  standalone: true,
  imports: [ScrollRevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="atmosphere section section--medium" aria-labelledby="atmosphere-title">
      <div class="container container-prose">
        <span class="title-md atmosphere__eyebrow" appScrollReveal>Atmósfera</span>
        <h2 id="atmosphere-title" class="atmosphere__text" appScrollReveal [delay]="100">
          Aquí se huele <em>la leña fría</em> de la mañana,
          se escucha el viento bajando del Ausangate,
          y los astros se ven con una nitidez que recuerda
          <em>por qué la mente necesita silencio</em>.
        </h2>
        <p class="atmosphere__sub body-lg" appScrollReveal [delay]="240">
          No es un hotel. Es una casa familiar de piedra y barro,
          adaptada para que diez personas puedan habitar dos días con cuidado,
          calidez y un nivel de presencia que rara vez se permite la ciudad.
        </p>
      </div>
    </section>
  `,
  styleUrl: './atmosphere.component.scss',
})
export class AtmosphereComponent {}
