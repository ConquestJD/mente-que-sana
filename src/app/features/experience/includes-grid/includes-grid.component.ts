import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';

interface IncludeItem {
  icon: 'bed' | 'fork' | 'lotus' | 'fire' | 'book' | 'group' | 'plant' | 'phone';
  title: string;
  description: string;
}

@Component({
  selector: 'app-includes-grid',
  standalone: true,
  imports: [ScrollRevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './includes-grid.component.html',
  styleUrl: './includes-grid.component.scss',
})
export class IncludesGridComponent {
  protected readonly items: IncludeItem[] = [
    { icon: 'bed',   title: 'Alojamiento de altura',   description: 'Habitaciones de piedra con ropa de cama natural y vista al valle.' },
    { icon: 'fork',  title: 'Cocina viva',             description: 'Tres comidas + colaciones con ingredientes locales y opciones veganas.' },
    { icon: 'lotus', title: 'Prácticas de cuerpo',     description: 'Yoga restaurativo, respiración y meditación guiadas.' },
    { icon: 'fire',  title: 'Sauna + contraste',       description: 'Sesión de sauna de piedra con agua fría del manantial.' },
    { icon: 'book',  title: 'Material físico',         description: 'Cuaderno de bitácora, mapa de hábitos y carta a los 30 días.' },
    { icon: 'group', title: 'Círculo íntimo',          description: 'Sólo 10 personas — un círculo donde nadie es invisible.' },
    { icon: 'plant', title: 'Acompañamiento 30 días',  description: 'Llamadas grupales y micro-tareas para sostener la transformación.' },
    { icon: 'phone', title: 'Atención previa',         description: 'Llamada de bienvenida para conocernos antes del retiro.' },
  ];
}
