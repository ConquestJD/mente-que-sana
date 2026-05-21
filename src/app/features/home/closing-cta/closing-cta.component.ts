import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { ParallaxDirective } from '../../../shared/directives/parallax.directive';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';
import { MagneticDirective } from '../../../shared/directives/magnetic.directive';
import { IMG } from '../../../shared/images';

/**
 * CTA final del home — imagen panorámica con parallax, gradiente legible
 * y dos botones.
 */
@Component({
  selector: 'app-closing-cta',
  standalone: true,
  imports: [ButtonComponent, ParallaxDirective, ScrollRevealDirective, MagneticDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="closing" aria-labelledby="closing-title">
      <div class="closing__bg" appParallax [speed]="0.2"
           [style.background-image]="'url(' + bg + ')'"
           aria-hidden="true"></div>
      <div class="closing__overlay" aria-hidden="true"></div>

      <div class="container closing__inner">
        <div appScrollReveal>
          <span class="title-md closing__eyebrow">Tu siguiente paso</span>
          <h2 id="closing-title" class="closing__title">
            La cohorte fundadora <br>
            <em>se forma una sola vez.</em>
          </h2>
          <p class="closing__sub body-lg">
            Diez personas. Dos días. Treinta días sostenidos.
            Una decisión que solo tú puedes tomar.
          </p>
        </div>

        <div class="closing__actions" appScrollReveal [delay]="180">
          <span appMagnetic [strength]="0.25">
            <app-button variant="primary" size="lg" routerLink="/tarifas">
              Reservar mi lugar
            </app-button>
          </span>
          <app-button variant="ghost" routerLink="/contacto">
            Hablar primero
          </app-button>
        </div>

        <div class="closing__strip" appScrollReveal [delay]="360">
          <div class="closing__strip-item">
            <span class="closing__strip-num">7</span>
            <span class="closing__strip-label">de 10 cupos disponibles</span>
          </div>
          <div class="closing__strip-bar" aria-hidden="true">
            <span class="closing__strip-fill" style="width: 30%"></span>
          </div>
          <div class="closing__strip-item">
            <span class="closing__strip-num">50%</span>
            <span class="closing__strip-label">reservas con plan de pagos</span>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrl: './closing-cta.component.scss',
})
export class ClosingCtaComponent {
  protected readonly bg = IMG.heroValle;
}
