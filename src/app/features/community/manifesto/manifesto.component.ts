import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';

interface ManifestoLine {
  title: string;
  description: string;
}

@Component({
  selector: 'app-manifesto',
  standalone: true,
  imports: [ScrollRevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="manifesto section section--cream" aria-labelledby="manifesto-title">
      <div class="container">
        <div class="manifesto__intro" appScrollReveal>
          <span class="title-md">Manifiesto</span>
          <h2 id="manifesto-title" class="manifesto__title">
            Buscamos personas que <em>todavía no se rinden.</em>
          </h2>
          <p class="manifesto__sub body-lg">
            Este retiro está pensado para quienes cuidan vidas — y empiezan a notar
            que necesitan cuidar la suya. Profesionales y personas que se entregan a otros
            y sienten que algo se está agotando por dentro.
          </p>
        </div>

        <ul class="manifesto__list">
          @for (line of welcome; track line.title; let i = $index) {
            <li class="manifesto__line manifesto__line--in" appScrollReveal [delay]="i * 80">
              <span class="manifesto__mark" aria-hidden="true">+</span>
              <div>
                <h3 class="manifesto__line-title">{{ line.title }}</h3>
                <p class="manifesto__line-desc body-md">{{ line.description }}</p>
              </div>
            </li>
          }
        </ul>

        <ul class="manifesto__list manifesto__list--out">
          @for (line of notFor; track line.title; let i = $index) {
            <li class="manifesto__line" appScrollReveal [delay]="i * 80">
              <span class="manifesto__mark manifesto__mark--minus" aria-hidden="true">—</span>
              <div>
                <h3 class="manifesto__line-title">{{ line.title }}</h3>
                <p class="manifesto__line-desc body-md">{{ line.description }}</p>
              </div>
            </li>
          }
        </ul>
      </div>
    </section>
  `,
  styleUrl: './manifesto.component.scss',
})
export class ManifestoComponent {
  protected readonly welcome: ManifestoLine[] = [
    { title: 'Profesionales de la salud',  description: 'Médicos, psicólogos, terapeutas, enfermeros. Si curas a otros, mereces curarte.' },
    { title: 'Educadores y maestros',      description: 'Docentes, coaches, formadores. La presencia se enseña con presencia.' },
    { title: 'Profesionales del bienestar',description: 'Yoga, nutrición, mindfulness, deporte. Para profundizar tu propia práctica.' },
    { title: 'Cuidadores invisibles',      description: 'Madres, padres, hijos de adultos mayores. El cuidado también te cuida a ti.' },
  ];

  protected readonly notFor: ManifestoLine[] = [
    { title: 'Quien busca un spa',           description: 'No es lujo turístico. Es trabajo interior con cuerpo y nutrición cuidadas.' },
    { title: 'Quien no quiere ser visto',    description: 'El círculo requiere presencia honesta. No hay forma de esconderse.' },
  ];
}
