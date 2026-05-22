import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';
import { TiltDirective } from '../../../shared/directives/tilt.directive';
import { IMG } from '../../../shared/images';

interface IncludeItem {
  icon: 'bed' | 'fork' | 'lotus' | 'fire' | 'book' | 'group' | 'plant' | 'phone';
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-includes-grid',
  standalone: true,
  imports: [ScrollRevealDirective, TiltDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './includes-grid.component.html',
  styleUrl: './includes-grid.component.scss',
})
export class IncludesGridComponent {
  protected readonly items: IncludeItem[] = [
    { icon: 'bed',   title: 'Alojamiento de altura',   description: 'Habitaciones de piedra con ropa de cama natural y vista al valle.', image: IMG.andeStone },
    { icon: 'fork',  title: 'Cocina viva',             description: 'Tres comidas + colaciones con ingredientes locales y opciones veganas.', image: IMG.andineFood },
    { icon: 'lotus', title: 'Prácticas de cuerpo',     description: 'Yoga restaurativo, respiración y meditación guiadas.', image: IMG.yogaSalaInside },
    { icon: 'fire',  title: 'Sauna + contraste',       description: 'Sesión de sauna de piedra con agua fría del manantial.', image: IMG.saunaStone },
    { icon: 'book',  title: 'Material físico',         description: 'Cuaderno de bitácora, mapa de hábitos y carta a los 30 días.', image: IMG.paperJournal },
    { icon: 'group', title: 'Círculo íntimo',          description: 'Sólo 10 personas — un círculo donde nadie es invisible.', image: IMG.circleHands },
    { icon: 'plant', title: 'Acompañamiento 30 días',  description: 'Llamadas grupales y micro-tareas para sostener la transformación.', image: IMG.herbs },
    { icon: 'phone', title: 'Atención previa',         description: 'Llamada de bienvenida para conocernos antes del retiro.', image: IMG.cupTea },
  ];
}
