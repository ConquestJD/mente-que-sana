import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';

interface DetailGroup {
  title: string;
  items: string[];
}

@Component({
  selector: 'app-includes-detail',
  standalone: true,
  imports: [ScrollRevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="detail section section--light" aria-labelledby="detail-title">
      <div class="container">
        <header class="detail__head" appScrollReveal>
          <span class="title-md">Lo que incluye</span>
          <h2 id="detail-title" class="display-md">Cada tarifa cubre lo esencial de la experiencia.</h2>
        </header>

        <div class="detail__grid">
          @for (group of groups; track group.title; let i = $index) {
            <div class="detail__group" appScrollReveal [delay]="i * 100">
              <h3 class="detail__group-title">{{ group.title }}</h3>
              <ul class="detail__list">
                @for (item of group.items; track item) {
                  <li>
                    <span class="detail__bullet" aria-hidden="true"></span>
                    {{ item }}
                  </li>
                }
              </ul>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styleUrl: './includes-detail.component.scss',
})
export class IncludesDetailComponent {
  protected readonly groups: DetailGroup[] = [
    {
      title: 'Hospedaje',
      items: [
        'Habitaciones compartidas de 2 personas',
        'Habitación individual con costo adicional',
        'Ropa de cama natural · alpaca',
        'Baños con agua caliente solar',
      ],
    },
    {
      title: 'Cocina',
      items: [
        '3 comidas + 2 colaciones por día',
        'Opciones veganas, sin gluten y celíaco',
        'Ingredientes locales del Valle Sagrado',
        'Té de coca y agua de manantial',
      ],
    },
    {
      title: 'Prácticas',
      items: [
        'Yoga, respiración y meditación guiadas',
        'Sauna de piedra + contraste con agua fría',
        'Caminatas conscientes por el terreno',
        'Círculo de palabra alrededor del fuego',
      ],
    },
    {
      title: 'Seguimiento',
      items: [
        'Llamada de bienvenida pre-retiro',
        'Bitácora física + ebook de prácticas',
        'Llamada grupal a los 7 días',
        'Círculo virtual de cierre a los 30 días',
      ],
    },
  ];
}
