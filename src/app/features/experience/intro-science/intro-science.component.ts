import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';
import { ParallaxDirective } from '../../../shared/directives/parallax.directive';
import { IMG } from '../../../shared/images';

@Component({
  selector: 'app-intro-science',
  standalone: true,
  imports: [ScrollRevealDirective, ParallaxDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="intro section section--cream" aria-labelledby="intro-title">
      <div class="container">
        <div class="intro__head">
          <span class="intro__eyebrow title-md" appScrollReveal>El punto de partida</span>
          <h2 id="intro-title" class="intro__title" appScrollReveal [delay]="120">
            El dolor que cargas
            <em>no es tuyo solamente</em>,
            es de una mente que aún no encontró
            dónde descansar.
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
                <span class="ui-data">Mente · Cuerpo</span>
                Una sola fisiología, un solo lenguaje.
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
                <span class="intro__badge-eyebrow ui-data">Diseño del programa</span>
                <span class="intro__badge-text">3 disciplinas · 1 propósito</span>
              </div>
            </div>
          </div>

          <div class="intro__text" appScrollReveal direction="right" [delay]="160">
            <p class="body-lg intro__p">
              La <strong>psiconeuroinmunología</strong> demostró lo que tu cuerpo ya sospechaba:
              el estrés crónico no es un estado emocional, es una inflamación silenciosa que
              altera tu microbiota, tu sueño y la forma en que percibes el mundo.
            </p>
            <p class="body-lg intro__p">
              La <strong>neuroplasticidad</strong> te devuelve la autoridad: cada práctica
              sostenida — respiración, atención, comunidad, naturaleza — reescribe los circuitos
              que aprendiste a la fuerza. Sanar no es un milagro: es repetición consciente.
            </p>
            <p class="body-lg intro__p">
              Y la <strong>sabiduría andina</strong> añade lo que la ciencia recién está
              recordando: el cuerpo se ordena en círculo, con otros, en la tierra que pisa.
            </p>
          </div>
        </div>

        <div class="intro__stats" appScrollReveal [delay]="320">
          @for (stat of stats; track stat.label) {
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
  protected readonly photoMain = IMG.meditationGirl;
  protected readonly photoAccent = IMG.handsTea;

  protected readonly stats: Array<{ number: string; label: string; image: string }> = [
    { number: '70%',     label: 'de la serotonina vive en tu intestino',          image: IMG.herbs },
    { number: '21 días', label: 'consolidan un nuevo hábito neural',              image: IMG.paperJournal },
    { number: '2,870m',  label: 'la altitud que expande tu fisiología',           image: IMG.cuscoVista },
  ];
}
