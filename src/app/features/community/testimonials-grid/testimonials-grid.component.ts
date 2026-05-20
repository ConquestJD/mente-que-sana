import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';

interface Testimonial {
  initials: string;
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
      initials: 'VM',
      name: 'Valentina Mendoza',
      role: 'Psicóloga clínica',
      city: 'Arequipa',
      quote:
        'Llegué buscando descansar y volví con una forma distinta de respirar. No fue lo que aprendí — fue lo que dejé de cargar.',
    },
    {
      initials: 'RA',
      name: 'Ricardo Aliaga',
      role: 'Médico internista',
      city: 'Lima',
      quote:
        'Hace años recomendaba a mis pacientes que descansaran. Era yo quien no sabía hacerlo. Acá lo entendí en el cuerpo.',
    },
    {
      initials: 'LC',
      name: 'Liz Carbajal',
      role: 'Maestra de primaria',
      city: 'Cusco',
      quote:
        'Volví a mi aula sin gritar. No es magia: es lo que pasa cuando bajas dos cambios de marcha en tu propia mente.',
    },
    {
      initials: 'AM',
      name: 'Andrés Mariátegui',
      role: 'Coach de bienestar',
      city: 'Trujillo',
      quote:
        'El círculo cura cosas que la terapia individual no toca. Te recuerda que no estás solo cargando lo que cargas.',
    },
  ];
}
