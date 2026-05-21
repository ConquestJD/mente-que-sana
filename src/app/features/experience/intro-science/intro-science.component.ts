import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-intro-science',
  standalone: true,
  imports: [ScrollRevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="intro section section--cream" aria-labelledby="intro-title">
      <div class="container-prose">
        <span class="intro__eyebrow title-md" appScrollReveal>El Punto de partida</span>

        <h2 id="intro-title" class="intro__title" appScrollReveal [delay]="120">
          El dolor que cargas
          <em>no es tuyo solamente,</em>
          es de una mente que aún no encontró
          dónde descansar.
        </h2>

        <div class="intro__columns" appScrollReveal [delay]="240">
          <p class="body-lg">
            La <strong>psiconeuroinmunología</strong> demostró lo que tu cuerpo ya sospechaba:
            el estrés crónico no es un estado emocional, es una inflamación silenciosa que
            altera tu microbiota, tu sueño y la forma en que percibes el mundo.
          </p>
          <p class="body-lg">
            Pero la <strong>neuroplasticidad</strong> te devuelve la autoridad: cada práctica
            sostenida — respiración, atención, comunidad, naturaleza — reescribe los circuitos
            que aprendiste a la fuerza. Sanar no es un milagro. Es una repetición consciente.
          </p>
        </div>

        <div class="intro__stats" appScrollReveal [delay]="360">
          <div class="intro__stat">
            <span class="intro__stat-num">70%</span>
            <span class="intro__stat-label">de la serotonina vive en tu intestino</span>
          </div>
          <div class="intro__stat">
            <span class="intro__stat-num">21 días</span>
            <span class="intro__stat-label">empiezan a consolidar un nuevo hábito neural</span>
          </div>
          <div class="intro__stat">
            <span class="intro__stat-num">2,870m</span>
            <span class="intro__stat-label">la altitud expande tu fisiología</span>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrl: './intro-science.component.scss',
})
export class IntroScienceComponent {}
