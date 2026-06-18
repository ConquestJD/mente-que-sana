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
      <div class="manifesto__grain" aria-hidden="true"></div>
      <div class="container">
        <header class="manifesto__intro" appScrollReveal>
          <span class="title-md">Manifiesto</span>
          <h2 id="manifesto-title" class="manifesto__title">
            Buscamos personas que <em>todavía no se rinden.</em>
          </h2>
          <p class="manifesto__sub body-lg">
            Este retiro es para personas que cargan ansiedad, estrés o tristeza,
            o que conviven con alguna condición crónica — y sienten que necesitan
            parar y respirar de otra manera. No necesitas ser experto en nada:
            solo querer cuidarte.
          </p>
        </header>

        @if (welcome[0]; as lead) {
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
            <h3 class="manifesto__col-label ui-data">Para ti si</h3>
            <ul class="manifesto__list">
              @for (line of welcomeRest; track line.title; let i = $index) {
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
            <h3 class="manifesto__col-label ui-data">No es para ti si</h3>
            <ul class="manifesto__list manifesto__list--out">
              @for (line of notFor; track line.title; let i = $index) {
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
  protected readonly welcome: ManifestoLine[] = [
    { title: 'Quien carga ansiedad o estrés',          description: 'Si el cuerpo vive en alerta y la mente no para, este es un lugar para soltar.' },
    { title: 'Quien atraviesa tristeza o agotamiento', description: 'Etapas de bajón, duelo o desgaste emocional. No hace falta un diagnóstico para venir.' },
    { title: 'Quien convive con una condición crónica',description: 'Dolor persistente, enfermedad o tratamientos largos. El cuerpo también se sana en comunidad.' },
    { title: 'Profesionales que cuidan a otros',       description: 'Médicos, terapeutas, docentes o cuidadores. Si te entregas a los demás, también mereces parar.' },
  ];

  protected readonly welcomeRest = this.welcome.slice(1);

  protected readonly notFor: ManifestoLine[] = [
    { title: 'Quien busca un spa',           description: 'No es lujo turístico. Es trabajo interior con cuerpo y nutrición cuidadas.' },
    { title: 'Quien no quiere ser visto',    description: 'El círculo requiere presencia honesta. No hay forma de esconderse.' },
  ];

  protected indexLabel(n: number): string {
    return String(n).padStart(2, '0');
  }
}
