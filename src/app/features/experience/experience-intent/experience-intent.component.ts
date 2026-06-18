import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';
import { ParallaxDirective } from '../../../shared/directives/parallax.directive';
import { IMG } from '../../../shared/images';

interface Pillar {
  index: string;
  title: string;
  body: string;
  image: string;
}

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
          <span class="title-md intent__eyebrow">Tres movimientos</span>
          <h2 id="intent-title" class="intent__title">
            Lo que viene a <em>cambiar</em> viene en tres pasos.
          </h2>
        </header>

        <div class="intent__pillars">
          @for (pillar of pillars; track pillar.title; let i = $index) {
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
  protected readonly pillars: Pillar[] = [
    {
      index: '01',
      title: 'Reconocer',
      body: 'Antes de cambiar nada, hay que mirarse sin pelearse. El primer día te recibimos para que el cuerpo se acuerde de que está cansado — y de que tiene permiso para descansar.',
      image: IMG.handsTea,
    },
    {
      index: '02',
      title: 'Transformar',
      body: 'El segundo día practicamos. Yoga, respiración, neurociencia aplicada y palabra honesta. No se trata de aprender — se trata de vivirlo lo suficiente para que el cuerpo recuerde el camino.',
      image: IMG.yogaSunrise,
    },
    {
      index: '03',
      title: 'Sembrar',
      body: 'Treinta días después del retiro seguimos contigo. Una llamada grupal, una bitácora, un cierre. Porque la mente nueva necesita testigos que confirmen que no era un sueño.',
      image: IMG.paperJournal,
    },
  ];
}
