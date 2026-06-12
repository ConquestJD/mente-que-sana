import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';

interface DetailGroup {
  title: string;
  description: string;
  icon: 'bed' | 'leaf' | 'flame' | 'compass';
  items: string[];
}

@Component({
  selector: 'app-includes-detail',
  standalone: true,
  imports: [ScrollRevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './includes-detail.component.html',
  styleUrl: './includes-detail.component.scss',
})
export class IncludesDetailComponent {
  protected readonly groups: DetailGroup[] = [
    {
      title: 'Hospedaje',
      description: 'Donde el cuerpo descansa.',
      icon: 'bed',
      items: [
        'Habitaciones compartidas de 2 personas',
        'Habitación individual con costo adicional',
        'Agua caliente',
      ],
    },
    {
      title: 'Cocina',
      description: 'Lo que sostiene la altura.',
      icon: 'leaf',
      items: [
        '3 comidas + 2 colaciones por día',
        'Ingredientes locales del Valle Sagrado',
        'Té de coca y hierbas naturales',
      ],
    },
    {
      title: 'Prácticas',
      description: 'Donde la mente se mueve.',
      icon: 'flame',
      items: [
        'Yoga, respiración y meditación guiadas',
        'Caminatas conscientes por el terreno',
        'Círculo de palabra alrededor del fuego',
      ],
    },
    {
      title: 'Seguimiento',
      description: 'Lo que sigue después.',
      icon: 'compass',
      items: [
        'Llamada de bienvenida pre-retiro',
        'Bitácora física + ebook de prácticas',
        'Llamada grupal a los 7 días',
        'Círculo virtual de cierre a los 30 días',
      ],
    },
  ];
}
