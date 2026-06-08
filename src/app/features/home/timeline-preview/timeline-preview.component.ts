import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';
import { IMG } from '../../../shared/images';

interface TimelineStop {
  index: string;
  title: string;
  description: string;
  image: string;
}

/**
 * Resumen del programa día-a-día con imágenes alternando lado y línea
 * conectora animada.
 */
@Component({
  selector: 'app-timeline-preview',
  standalone: true,
  imports: [RouterLink, ScrollRevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './timeline-preview.component.html',
  styleUrl: './timeline-preview.component.scss',
})
export class TimelinePreviewComponent {
  protected readonly stops: TimelineStop[] = [
    {
      index: 'DÍA 1 · 15:00',
      title: 'Ceremonia del agua',
      description: 'Llegamos. Limpia simbólica con agua de manantial. Te recibimos con una infusión andina y el círculo se forma por primera vez.',
      image: IMG.handsTea,
    },
    {
      index: 'DÍA 1 · 18:00',
      title: 'Yoga + respiración consciente',
      description: 'En la sala de piedra, abrimos cuerpo y respiración. Práctica restaurativa para aterrizar en el presente.',
      image: IMG.yogaSalaInside,
    },
    {
      index: 'DÍA 1 · 21:00',
      title: 'Fuego y palabra honesta',
      description: 'Círculo nocturno al aire libre con vista a las luces de Cusco. Cada quien deja algo en el fuego.',
      image: IMG.fuego,
    },
    {
      index: 'DÍA 2 · 06:30',
      title: 'Saludo al sol sobre el valle',
      description: 'Despertar con yoga dinámico mirando el amanecer sobre Pisac y Urubamba.',
      image: IMG.yogaSunrise,
    },
    {
      index: 'DÍA 2 · 14:00',
      title: 'Almuerzo en el campo',
      description: 'Mesa larga sobre la pradera, mirando el valle. Sabores locales, risas y silencios elegidos.',
      image: IMG.diningTable,
    },
    {
      index: 'POST · 30 DÍAS',
      title: 'Acompañamiento sostenido',
      description: 'Llamada grupal a los 7 días, micro-tareas diarias y círculo de cierre a los 30 días. No te dejamos solo.',
      image: IMG.paperJournal,
    },
  ];
}
