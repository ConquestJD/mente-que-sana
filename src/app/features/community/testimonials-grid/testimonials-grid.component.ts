import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';
import { IMG } from '../../../shared/images';

interface Testimonial {
  avatar: string;
  name: string;
  role: string;
  city: string;
  quote: string;
}

@Component({
  selector: 'app-testimonials-grid',
  standalone: true,
  imports: [ScrollRevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './testimonials-grid.component.html',
  styleUrl: './testimonials-grid.component.scss',
})
export class TestimonialsGridComponent {
  protected readonly testimonials: Testimonial[] = [
    {
      avatar: IMG.portraitWoman1,
      name: 'Valentina Mendoza',
      role: 'Convive con ansiedad',
      city: 'Arequipa',
      quote:
        'Llegué con el pecho apretado todo el tiempo y volví con una forma distinta de respirar. No fue lo que aprendí — fue lo que dejé de cargar.',
    },
    {
      avatar: IMG.portraitWoman2,
      name: 'Liz Carbajal',
      role: 'En tratamiento oncológico',
      city: 'Cusco',
      quote:
        'En medio de la enfermedad encontré un lugar donde no era solo una paciente. Volví a sentirme persona, y acompañada.',
    },
    {
      avatar: IMG.portraitMan2,
      name: 'Andrés Mariátegui',
      role: 'Atravesando un duelo',
      city: 'Trujillo',
      quote:
        'El círculo cura cosas que la terapia individual no toca. Te recuerda que no estás solo cargando lo que cargas.',
    },
    {
      avatar: IMG.portraitMan1,
      name: 'Ricardo Aliaga',
      role: 'Médico internista',
      city: 'Lima',
      quote:
        'Hace años recomendaba a mis pacientes que descansaran. Era yo quien no sabía hacerlo. Acá lo entendí en el cuerpo.',
    },
  ];
}
