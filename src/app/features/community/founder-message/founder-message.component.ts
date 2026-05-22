import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';
import { ParallaxDirective } from '../../../shared/directives/parallax.directive';
import { IMG } from '../../../shared/images';

@Component({
  selector: 'app-founder-message',
  standalone: true,
  imports: [ScrollRevealDirective, ParallaxDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="founder section section--mist" aria-labelledby="founder-title">
      <div class="container">
        <div class="founder__layout">
          <figure class="founder__portrait" appScrollReveal direction="left">
            <div
              class="founder__photo"
              appParallax
              [speed]="0.12"
              [style.background-image]="'url(' + portrait + ')'"
              role="img"
              aria-label="Retrato del facilitador"
            ></div>
            <figcaption class="founder__caption">
              <span class="title-sm">Facilitador principal</span>
              <span class="founder__caption-name">Armando Huamán Naula</span>
              <span class="body-sm">Médico Cirujano · Ginecólogo Oncólogo</span>
            </figcaption>
          </figure>

          <div class="founder__text" appScrollReveal direction="right" [delay]="120">
            <span class="title-md founder__eyebrow">Una palabra del facilitador</span>
            <h2 id="founder-title" class="founder__title">
              No vengo a salvarte. <em>Vengo a recordarte.</em>
            </h2>

            <p class="founder__p body-lg">
              Llevo más de dos décadas acompañando a personas que enfrentan procesos
              de salud difíciles y que, en el camino, se olvidaron de su propio cuerpo.
              Construí este retiro para abrazar lo que la consulta no alcanza: el círculo,
              la naturaleza, la mesa compartida.
            </p>
            <p class="founder__p body-lg">
              Lo que vivirás acá no es un curso, ni una terapia. Es una experiencia
              diseñada con el rigor de la ciencia médica y la memoria larga de los
              Andes. Sin promesas místicas. Con compromiso humano y profesional.
            </p>
            <p class="founder__signature">
              — Armando, en el terreno familiar sobre el Valle Sagrado
            </p>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrl: './founder-message.component.scss',
})
export class FounderMessageComponent {
  protected readonly portrait = IMG.founderPortrait;
}
