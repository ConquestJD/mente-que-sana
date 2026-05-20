import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-testimonial-preview',
  standalone: true,
  imports: [ButtonComponent, ScrollRevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="testimonial section section--medium" aria-labelledby="testimonial-title">
      <div class="container-narrow">
        <figure class="testimonial__wrap" appScrollReveal>
          <span class="testimonial__quote-mark" aria-hidden="true">“</span>
          <blockquote id="testimonial-title" class="testimonial__text">
            Llegué buscando descansar y volví con una forma distinta de respirar.
            No fue lo que aprendí — fue lo que dejé de cargar.
          </blockquote>
          <figcaption class="testimonial__author">
            <span class="testimonial__avatar" aria-hidden="true">VM</span>
            <span>
              <span class="testimonial__name">Valentina Mendoza</span>
              <span class="testimonial__role">Psicóloga clínica · Arequipa</span>
            </span>
          </figcaption>
        </figure>

        <div class="testimonial__cta">
          <app-button variant="ghost" routerLink="/comunidad">Ver comunidad</app-button>
        </div>
      </div>
    </section>
  `,
  styleUrl: './testimonial-preview.component.scss',
})
export class TestimonialPreviewComponent {}
