import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';
import { SEDES } from '../../../shared/sedes';

/**
 * Vista previa de las cuatro sedes en el home, con enlace a la vista
 * completa de sedes.
 */
@Component({
  selector: 'app-sedes-preview',
  standalone: true,
  imports: [RouterLink, ScrollRevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="spreview section section--mist" aria-labelledby="spreview-title">
      <div class="container">
        <header class="spreview__head" appScrollReveal>
          <span class="title-md">Cuatro sedes</span>
          <h2 id="spreview-title" class="display-lg spreview__title">
            Un mismo programa, <em>cuatro paisajes.</em>
          </h2>
          <p class="body-lg spreview__lead">
            Vive Mente que Sana donde más te resuene: la altura del Valle Sagrado,
            la ciudad imperial, la selva amazónica o el sur sereno.
          </p>
        </header>

        <ul class="spreview__grid">
          @for (sede of sedes; track sede.slug; let i = $index) {
            <li class="spreview__cell" appScrollReveal [delay]="i * 80">
              <a class="spchip" [routerLink]="['/sedes', sede.slug]">
                <div
                  class="spchip__img"
                  [style.background-image]="'url(' + sede.heroImage + ')'"
                  aria-hidden="true"
                ></div>
                <div class="spchip__veil" aria-hidden="true"></div>
                <div class="spchip__body">
                  <span class="spchip__city">{{ sede.city }}</span>
                  <span class="spchip__region ui-data">{{ sede.region }}</span>
                </div>
              </a>
            </li>
          }
        </ul>

        <div class="spreview__cta" appScrollReveal>
          <a routerLink="/sedes" class="spreview__cta-link">
            Conocer las cuatro sedes
            <span class="spreview__cta-arrow" aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  `,
  styleUrl: './sedes-preview.component.scss',
})
export class SedesPreviewComponent {
  protected readonly sedes = SEDES;
}
